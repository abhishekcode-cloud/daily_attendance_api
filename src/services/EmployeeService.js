import bcrypt from "bcrypt";
import logger from "../loggers/logger.js";
import customUtils from "../utils/custom.util.js";
import Employee from "../models/Employee.js";

class EmployeeService {

    static async getAllEmployees(user) {
        try {
            const allEmployees = await Employee.find({ openId: user.openId });
            return allEmployees;
        } catch (error) {
            logger.error('Employee service find all: ', error);
        }
    }

    static async createEmployee(data, openId) {
        try {
            const findOneResponse = await Employee.findOne({ mobile: data.mobile });
            if (findOneResponse == null) {
                const payload = {};
                payload.name = data.name;
                payload.mobile = data.mobile;
                payload.gender = data.gender;
                payload.designation = data.designation;
                payload.address = data.address;
                payload.attachmentId = data.attachmentId;
                payload.fileName = data.fileName;
                payload.openId = openId;
                const response = await new Employee(payload).save();
                if (response)
                    return true;

            } else {
                return false
            }
        } catch (error) {
            logger.error('Employee service create: ', error);
        }

    }
    static async getEmployeeById(employeeId) {
        try {
            const singleEmployeeResponse = await Employee.findById({ _id: employeeId });
            return singleEmployeeResponse;
        } catch (error) {
            logger.error('Employee  not found: ', error);
        }
    }

    static async updateEmployee(data, employeeId) {
        try {
            const updateResponse = await Employee.updateOne({ _id: employeeId }, { $set: data });
            return updateResponse;
        } catch (error) {
            logger.error('Could not update employee: ', error);

        }
    }

    static async deleteEmployee(employeeId) {
        try {
            const deletedResponse = await Employee.findOneAndDelete(employeeId);
            return deletedResponse;
        } catch (error) {
            logger.error('Could  ot delete employee : ', error);
        }

    }

}
export default EmployeeService;