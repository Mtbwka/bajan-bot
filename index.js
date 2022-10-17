import { Telegraf } from "telegraf";

const bot = new Telegraf(process.env.BOT_TOKEN);

const sendPoll = (ctx) => {
  return ctx.replyWithPoll("Баян?", ["Так", "Ні"], {
    allows_multiple_answers: false,
    is_anonymous: false,
    reply_to_message_id: ctx.message.message_id,
  });
};

bot.on("photo", (ctx) => {
  sendPoll(ctx);
});

bot.on("video", (ctx) => {
  sendPoll(ctx);
});

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
