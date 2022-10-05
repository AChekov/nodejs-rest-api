const { User, schemas } = require("../../models/user");

const { RequestError } = require("../../helpers");

const register = async (req, res) => {
  const { error } = schemas.registerSchema.validate(req.body);
  if (error) {
    throw RequestError(400, "missing required name field");
  }
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "Email in use");
  }
  const result = await User.create({ name, email, password });
  res.status(201).json({
    name: result.name,
    email: result.email,
  });
};

module.exports = register;
