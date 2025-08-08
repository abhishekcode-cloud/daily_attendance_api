import logger from "../loggers/logger.js";
import customUtils from "../utils/custom.util.js";
import message from '../helpers/api.massages.js';
import ApiResponse from '../helpers/api.responses.js';
import EmployeeService from '../services/EmployeeService.js';
import { employeeAddBodyValidation } from "../validations/employee.validate.js";

class Employee {

    static async getAllEmployees(req, res, next) {
        try {
            const employee = await EmployeeService.getAllEmployees(req.user);
            ApiResponse.SuccessResponseWithData(res, message.findAll, employee);
        } catch (error) {
            logger.error("Internal Server Error!", error);
            ApiResponse.ErrorResponse(res, message.systemError);
        }

    }

    static async getEmployeeById(req, res, next) {
        try {
            let id = req.params.id || {};
            const employee = await EmployeeService.getEmployeeById(id);
            if (employee == null)
                ApiResponse.NotFoundResponse(res, "Not found User");
            else
                ApiResponse.SuccessResponseWithData(res, message.findOne, employee);
        } catch (error) {
            logger.error("Internal Server Error!", error);
            ApiResponse.ErrorResponse(res, message.systemError);
        }
    }

    static async createEmployee(req, res, next) {
        try {
            const { error } = employeeAddBodyValidation(req.body);
            if (error)
                return ApiResponse.ValidationError(res, error.details[0].message);
            const openId = req.user.openId;
            const createdEmployee = await EmployeeService.createEmployee(req.body, openId);
            if (createdEmployee)
                return ApiResponse.SuccessResponse(res, message.created);
            ApiResponse.ValidationError(res, message.exists);

        } catch (error) {
            logger.error("Internal Server Error!", error);
            ApiResponse.ErrorResponse(res, message.systemError);
        }
    }

    static async updateEmployee(req, res, next) {
        try {
            const data = {};
            data.name = req.body.name;
            data.mobile = req.body.mobile;
            data.gender = req.body.gender;
            data.designation = req.body.designation;
            data.address = req.body.address;
            data.attachmentId = req.body.attachmentId;
            data.fileName = req.body.fileName;
            const employeeId = req.params.id;
            const updatedEmployee = await EmployeeService.updateEmployee(data, employeeId);
            if (updatedEmployee.modifiedCount === 0) {
                throw new Error("Unable to update employee, error occurred.");
            }
            ApiResponse.SuccessResponseWithData(res, message.updated, updatedEmployee);
        } catch (error) {
            logger.error("Internal Server Error!", error);
            ApiResponse.ErrorResponse(res, message.systemError);
        }
    }

    static async deleteEmployee(req, res, next) {
        try {
            const employeeId = req.params.id;
            const deleteResponse = await EmployeeService.deleteEmployee(employeeId)
            if (deleteResponse == null)
                ApiResponse.NotFoundResponse(res, message.notFound);
            else
                ApiResponse.SuccessResponse(res, message.deleted);
        } catch (error) {
            logger.error("Internal Server Error!", error);
            ApiResponse.ErrorResponse(res, message.systemError);
        }
    }

}
export default Employee;