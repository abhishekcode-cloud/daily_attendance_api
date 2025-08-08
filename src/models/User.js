import mongoose from "mongoose";
import constants from "../constants/constants.js";
const Schema = mongoose.Schema;

const userSchema = new Schema({
	mobile: {
		type: String,
		required: true,
		unique: true,
		trim: true
	},
	openId: {
		type: String,
		unique: true,
		trim: true
	},
	organizationName: {
		type: String,
		required: true,
		trim: true
	},
	ownerName: {
        type: String,
        required: true,
        trim: true
    },
    organizationType: {
        type: String,
        required: true,
        trim: true
    },
	orgCertificate: {
        type: String,
        default: ""
    },
	orgCertificateId: {
        type: String,
        default: ""
    },
	currentLocation: {
        type: String,
        default: ""
    },
	attachmentId: {
        type: String,
        default: ""
    },
	attachmentName: {
        type: String,
        default: ""
    },
    address: {
        type: String,
        required: true
    },
	email: {
		type: String,
		default: ""
	},
	password: {
		type: String,
		required: true
	},
	isAccountStatus: {
		type: Boolean,
		default: false
	},
	roles: {
		type: [String],
		enum: ["USER", "ADMIN"],
		default: ["USER"],
	}
    
},{ timestamps: true }
);

const User = mongoose.model(constants.USER_SCHEMA, userSchema);

export default User;

// id_owner:  [{
//     type: Schema.Types.ObjectId,
//     required: true,
//     ref:'client'
//   }],
//   id_trip: [{
//     type: Schema.Types.ObjectId,
//     required: true,
//     ref:'trip'
//   }],