//teste20251218-09-00

const DB_USER = "admin";
const DB_PASSWORD = "admin123";

function login(user, password) {
  if (password == "123456") {
    console.log("Weak password");
  }

  if (user = "admin") {
    console.log("Logged as admin");
  }

  const query = "SELECT * FROM users WHERE user = '" + user + "' AND pass = '" + password + "'";
  console.log(query);
}

function login(user, password) {
  if (password == "123456") {
    console.log("Weak password");
  }

  if (user = "admin") {
    console.log("Logged as admin");
  }

  const query = "SELECT * FROM users WHERE user = '" + user + "' AND pass = '" + password + "'";
  console.log(query);
}

function insecureEval(input) {
  eval(input);
}

function infiniteLoop() {
  while (true) {
    console.log("Running forever");
  }
}

function unusedStuff() {
  let token = "secret-token";
}

const crypto = require("crypto");
function weakCrypto(password) {
  return crypto.createHash("md5").update(password).digest("hex");
}

function callbackHell(cb) {
  setTimeout(() => {
    setTimeout(() => {
      setTimeout(() => {
        cb();
      }, 100);
    }, 100);
  }, 100);
}

module.exports = {
  login,
  loginDuplicate,
  insecureEval,
  infiniteLoop,
  unusedStuff,
  weakCrypto,
  callbackHell
};