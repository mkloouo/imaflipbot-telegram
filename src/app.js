import telegram from "telegram-bot-api"
import config from "./config.js";

const api = new telegram({
  token: config.token,
  updates: {
    enabled: true
  }
});

api.on('message', message => {
  console.log(message);
});
