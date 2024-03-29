const fs = require("fs")

const logsDir = "./logs"
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir)
}

function getTime() {
  const now = new Date()
  return now.toLocaleString()
}

function doLog(level: string, ...args: (string | object)[]) {
  const strs = args.map((arg) =>
    typeof arg === "string" ? arg : JSON.stringify(arg)
  )
  let line = strs.join(" | ")
  line = `${getTime()} - ${level} - ${line}\n`
  console.log(line)
  fs.appendFileSync("./logs/backend.log", line)
}

module.exports = {
  debug(...args: (string | object)[]) {
    // if (process.env.NODE_NEV === 'production') return
    doLog("DEBUG", ...args)
  },
  info(...args: (string | object)[]) {
    doLog("INFO", ...args)
  },
  warn(...args: (string | object)[]) {
    doLog("WARN", ...args)
  },
  error(...args: (string | object)[]) {
    doLog("ERROR", ...args)
  },
}
