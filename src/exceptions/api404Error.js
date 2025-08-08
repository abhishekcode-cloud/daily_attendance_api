
import BaseError from "./BaseError.js";

class Api404Error extends BaseError {
    constructor(
        name,
        status,
        description = 'Not found.',
        isOperational = true
    ) {
        super(name, status, isOperational, description)
    }
}
export default Api404Error;

//example:  throw new Api404Error(`User with id: ${req.params.id} not found.`)
