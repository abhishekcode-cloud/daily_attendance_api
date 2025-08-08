import Joi from "joi";

const signUpBodyValidation = (body) => {
	const schema = Joi.object({
		organizationName: Joi.string().required().label("Organization Name"),
		ownerName: Joi.string().required().label("Owner Name"),
		address: Joi.string().required().label("Address"),
		organizationType: Joi.string().required().label("Organization Type"),
		//state: Joi.string().required().label("State"),
		mobile: Joi.string().regex(/^[0-9]{10}$/).messages({ 'string.pattern.base': `Mobile number must have 10 digits.` }).required(),
		//email: Joi.string().email({ tlds: { allow: false } }).required().label("Email"),
		password: Joi.string().min(6).max(15).required().label("Password")
	});
	return schema.validate(body);
};

const logInBodyValidation = (body) => {
	const schema = Joi.object({
		mobile: Joi.string().regex(/^[0-9]{10}$/).messages({ 'string.pattern.base': `Mobile number must have 10 digits.` }).required(),
		password: Joi.string().min(6).max(15).required().label("Password")
	});
	return schema.validate(body);
};

const refreshTokenBodyValidation = (body) => {
	const schema = Joi.object({
		refreshToken: Joi.string().required().label("Refresh Token"),
	});
	return schema.validate(body);
};
const forgotBodyValidation = (body) => {
	const schema = Joi.object({
		mobile: Joi.string().regex(/^[0-9]{10}$/).messages({ 'string.pattern.base': `Mobile number must have 10 digits.` }).required(),
	});
	return schema.validate(body);
};
const verifyBodyValidation = (body) => {
	const schema = Joi.object({
		mobile: Joi.string().regex(/^[0-9]{10}$/).messages({ 'string.pattern.base': `Mobile number must have 10 digits.` }).required(),
		otp: Joi.string().min(6).max(6).regex(/^\d*$/).required().messages({ 'string.pattern.base': `OTP must have 6 digits.` }).required(),
	});
	return schema.validate(body);
};
const resetBodyValidation = (body) => {
	const schema = Joi.object({
		newPassword: Joi.string().min(3).max(15).required().label('New Password'),
		confirmPassword: Joi.any().equal(Joi.ref('newPassword'))
			.required()
			.label('Confirm password')
			.options({ messages: { 'any.only': '{{#label}} does not match' } })
	});
	return schema.validate(body);
};

export {
	signUpBodyValidation,
	logInBodyValidation,
	refreshTokenBodyValidation,
	forgotBodyValidation,
	verifyBodyValidation,
	resetBodyValidation
};
