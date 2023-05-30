const Joi = require('joi');

const user = Joi.object({
  id: Joi.number().required(),
  email: Joi.string().required(),
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  avatar: Joi.string().required(),
});

const support = Joi.object({
  url: Joi.string().required(),
  text: Joi.string().required(),
});

const userSchema = Joi.object({
  data: user.required(),
  support: support.required(),
}).options({ presence: 'required', abortEarly: false });

const usersSchema = Joi.object({
  page: Joi.number().required(),
  per_page: Joi.number().required(),
  total: Joi.number().required(),
  total_pages: Joi.number().required(),
  data: Joi.array().items(user).required(),
  support: support.required(),
}).options({ presence: 'required', abortEarly: false });

module.exports = {
  userSchema,
  usersSchema,
};
