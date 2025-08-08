
import {
    ReasonPhrases,
    StatusCodes,
    getReasonPhrase,
    getStatusCode
} from 'http-status-codes';

export default {

    SuccessResponse: function (res, msg) {
        return res.status(StatusCodes.OK).set({ response: ReasonPhrases.OK, responseMessage: msg }).json({});
    },

    SuccessResponseWithData: function (res, msg, data) { //success with data
        var resData = {
            data: data
        };
        return res.status(StatusCodes.OK).set({ response: ReasonPhrases.OK, responseMessage: msg }).json(resData);
    },

    ErrorResponse: function (res, msg) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).set({ response: ReasonPhrases.INTERNAL_SERVER_ERROR, responseMessage: msg }).json({});
    },

    NotFoundResponse: function (res, msg) {
        return res.status(StatusCodes.NOT_FOUND).set({ response: ReasonPhrases.NOT_FOUND, responseMessage: msg }).json({});
    },

    ValidationError: function (res, msg) {
        return res.status(StatusCodes.BAD_REQUEST).set({ response: ReasonPhrases.BAD_REQUEST, responseMessage: msg }).json({});
    },
    ValidationErrorWithData: function (res, msg, data) {
        var resData = {
            data: data
        };
        return res.status(StatusCodes.BAD_REQUEST).set({ response: ReasonPhrases.BAD_REQUEST, responseMessage: msg }).json(resData);

    },

    UnauthorizedResponse: function (res, msg) {
        return res.status(StatusCodes.UNAUTHORIZED).set({ response: ReasonPhrases.UNAUTHORIZED, responseMessage: msg }).json({});

    },
   ForbiddenResponse: function (res, msg) {
        return res.status(StatusCodes.FORBIDDEN).set({ response: ReasonPhrases.FORBIDDEN, responseMessage: msg }).json({});

    }
}