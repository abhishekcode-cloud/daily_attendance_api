import Joi from "joi";


const stateValidation = (body) => {
	const schema = Joi.object({
		stateName: Joi.string().required().label("State Name"),	
	});
	return schema.validate(body);
};
export {
	stateValidation
};