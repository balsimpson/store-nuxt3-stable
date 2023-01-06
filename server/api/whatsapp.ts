// import type { IncomingMessage, ServerResponse } from "http";
// import { useBody } from 'h3'

// export default (req, res) => {
//     res.statusCode(200)
//     res.end('Legacy handler')
//   }
import { Configuration, OpenAIApi } from "openai"

export default defineEventHandler( async (event) => {
    // const config = useRuntimeConfig()
    // console.log("config", config);
    // console.log("apiKey", config.public.OPENAI_KEY, config.OPENAI_KEY);
    try {

        const config = useRuntimeConfig()
        const configuration = new Configuration({
            apiKey: config.public.OPENAI_KEY,
        });
        
        const openai = new OpenAIApi(configuration);
        const query = getQuery(event)
        
        // console.log("event", event.node.req)
        
        let mode = query["hub.mode"];
        let token = query["hub.verify_token"];
        let challenge = query["hub.challenge"];

        let generatedImg = "";
        
        // console.log('body', JSON.stringify(body.entry[0].changes[0], null, 2));
        // console.log(query);
        
        
        if (mode && token) {
            console.log(token, challenge);
            return challenge;
        } else {
            try {
                const body = await readBody(event)
                const ACCESS_TOKEN = config.public.WHATSAPP_ACCESS_TOKEN;
                console.log("body", body);
                let phone_number_id =
                body.entry[0].changes[0].value.metadata.phone_number_id || "";
                let from = ""
                let msg_body = "";

                if (body.entry[0].changes[0].value && body.entry[0].changes[0].value.messages[0]) {
                        from = body.entry[0].changes[0].value.messages[0].from || ""; // extract the phone number from the webhook payload
                }

                msg_body = body.entry[0].changes[0].value.messages[0].text.body || "";

            if (from && msg_body) {

                console.log("body", msg_body)
                // let model = "text-embedding-ada-002"
                let model = "text-davinci-003"
                // if (msg_body.indexOf('/b') === 0) {
                //     model = "text-babbage-001";
                //     msg_body = msg_body.substring(3, msg_body.length-1)

                //     // console.log("msg_body", msg_body)
                //   } 
                // if (msg_body.indexOf('/c') === 0) {
                //     model = "text-curie-001";
                //     msg_body = msg_body.substring(3, msg_body.length-1)

                //     // console.log("msg_body", msg_body)
                //   } 
                // get image from dall-e
                // const response = await openai.createImage({
                //     prompt: msg_body,
                //     n: 1,
                //     size: "256x256",
                //   });

                // get reply from GPT-3
                const prediction = await openai.createCompletion({
                    model: model,
                    prompt: msg_body,
                    max_tokens: 256,
                    temperature: 0.7,
                });

                // console.log(JSON.stringify(prediction.data, null, 2))

                // generatedImg = response.data.data[0].url;

                await sendMessage(prediction.data.choices[0].text, from, ACCESS_TOKEN, phone_number_id)

                return {
                    statusCode: 200
                }
            } else {

                return {
                    statusCode: 200
                }
            }
        } catch (error) {
                console.log("error", error);
                return {
                    statusCode: 200
            }
        }

        // if (status !== "sent" || status !== "delivered" || status !== "read") {
        // }

        }
    } catch (error) {
        console.log("main error", error)
    }
    // return { challenge, status: 200 };
})

const sendMessage = async (msg: string | undefined, from: string, token: any, id: any) => {
    let url = `https://graph.facebook.com/v15.0/${id}/messages`;
    let res = await fetch(url, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': `application/json`
        },
        body: JSON.stringify({
            messaging_product: "whatsapp",
            to: from,
            // type: "image",
            text: {
                body: msg
            },
            // "image": {
            //     "link": generatedImg,
            //   }
        }),
        credentials: "include"
    })
}

// export default defineEventHandler((event) => {
//     const query = getQuery(event)
//     console.log(query)
//     // Parse params from the webhook verification request
//     let mode = query["hub.mode"];
//     let token = query["hub.verify_token"];
//     let challenge = query["hub.challenge"];
    
//     console.log(mode, token, challenge);
//     // // Check if a token and mode were sent
//     if (mode && token) {
//         // Check the mode and token sent are correct
//         if (mode == "subscribe" && token == "foxy") {
//             // Respond with 200 OK and challenge token from the request
//             console.log("WEBHOOK_VERIFIED");
//             // return challenge;
//             return {
//                 headers: { 'Content-Type': 'application/json' },
//                 statusCode: 200,
//                 body: query["hub.challenge"]
//             };
//         } else {
//             // Responds with '403 Forbidden' if verify tokens do not match
//             return {
//                 statusCode: 403
//             };
//         }
//     }
//     // return {
//     //     headers: { 'Content-Type': 'application/json' },
//     //     statusCode: 200,
//     //     // body: Buffer.from(challenge)
//     // }
// })

