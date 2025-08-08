import Joi from "joi";

const employeeAddBodyValidation = (body) => {
	const schema = Joi.object({
		name: Joi.string().required().label("Full name"),
		gender: Joi.string().required().label("Gender"),
		mobile: Joi.string().regex(/^[0-9]{10}$/).messages({ 'string.pattern.base': `Mobile number must have 10 digits.` }).required(),
		designation: Joi.string().required().label("Designation"),
		address: Joi.string().required().label("Address"),
		attachmentId: Joi.string().required().label("Attachment ID"),
		fileName: Joi.string().required().label("FileName"),
	});
	return schema.validate(body);
};

export {
	employeeAddBodyValidation
};
