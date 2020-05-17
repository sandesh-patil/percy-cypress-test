const spawn = require("child_process").spawn;
const platform = require("os").platform();

// We need to change the command path based on the platform they're using
const cmd = /^win/.test(platform)
  ? `${process.cwd()}\\node_modules\\.bin\\cypress.cmd`
  : `cypress`;

const tests = spawn(cmd, ["run"], {
  stdio: "inherit",
  windowsVerbatimArguments: true,
})
