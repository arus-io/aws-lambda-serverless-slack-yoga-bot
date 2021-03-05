const Axios = require("axios");
async function processYoga(event, context) {

  await Axios.post(
    `SLACK-WEBHOOK-URL`,
    {
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text:
              " :mega: Its a stretching time reminder, <https://arus.io|from the crunchy arus crew>",
          },
        },
        {
          type: "divider",
        },
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text: "*Step 1* \n Sit on the floor cross-legged.",
            },
          ],
        },
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text:
                "*Step 2* \n Stretch one arm up and learn to the opposite side.",
            },
          ],
        },
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text: "*Step 3*  \n Keep this posture for 30 seconds.",
            },
          ],
        },
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text: "*Step 4*  \n Repeat with the other arm.",
            },
          ],
        },
        {
          type: "image",
          image_url:
            "https://images.unsplash.com/photo-1597361768437-30aadb192d9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=970&q=80",
          alt_text: "inspiration",
        },
      ],
    }
  );
}
export const handler = processYoga;
