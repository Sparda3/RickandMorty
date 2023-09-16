const users = require("../utils/users");

function login(req, res) {
  const { email, password } = req.query;
//   const user = users.find(
//     (user) => user.email === email && user.password === password
//   );
  const user = users.some(user => user.email === email && user.password === password)
  user ? res.json({access: true}) : res.json({access: false})
}

module.exports = login;
