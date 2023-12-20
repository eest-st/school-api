import winston from "winston";

const { combine, timestamp, printf, colorize, align } = winston.format;

export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: combine(
    colorize({ all: true }),
    timestamp({
      format: "YYYY-MM-DD hh:mm:ss.SSS A",
    }),
    align(),
    printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`),
  ),
  transports: [new winston.transports.Console({ level: "http" })],
});

export const exitLog = (err: any, evt: string) => {
  if (err) {
    process.stdout.write(`\n\n[!ERROR][${evt}] => ${err}\n\n`);
  } else {
    process.stdout.write(`\n\n![${evt}] EVENT CAUSE EXIT\n\n`);
  }

  process.exit(err ? 1 : 0);
};
