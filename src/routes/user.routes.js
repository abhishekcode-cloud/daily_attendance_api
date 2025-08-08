import { Router } from "express";
import JwtMiddleware from "../middleware/JwtMiddleware.js";
import Role from "../models/Role.js";

const UserRouter = Router();

//** Controllers List */
import UserCtrl from "../controllers/user.controller.js";
import EmployeeCtrl from "../controllers/employee.controller.js";
import AttachmentCtrl from "../controllers/attachment.controller.js";
// import MailCtrl from "../controllers/mail.controller.js";




//** USER AND ADMIN ROUTE  */
//** hasRole(role) = Ensures the authenticated user has appropriate role */
//** hasAnyRole([role, role]) = Ensures the authenticated user has ANY of the appropriate roles */
//** hasAllRoles([role, role]) = Ensures the authenticated user has ALL the appropriate roles */

UserRouter.route('/fileUpload').post(JwtMiddleware.hasAnyRole([Role.USER, Role.ADMIN]), AttachmentCtrl.fileUpload);
UserRouter.route('/detail').get(JwtMiddleware.hasAnyRole([Role.ADMIN, Role.USER]), UserCtrl.userDetails);
UserRouter.route('/update').put(JwtMiddleware.hasAnyRole([Role.USER, Role.ADMIN]), UserCtrl.userUpdate);
UserRouter.route('/resetPassword').post(JwtMiddleware.hasAnyRole([Role.USER, Role.ADMIN]), UserCtrl.passwordReset);
UserRouter.route('/employees').post(JwtMiddleware.hasRole(Role.USER), EmployeeCtrl.createEmployee)
UserRouter.route('/employees').get(JwtMiddleware.hasRole(Role.USER), EmployeeCtrl.getAllEmployees);
UserRouter.route('/employees/employee/:id').get(JwtMiddleware.hasRole(Role.USER), EmployeeCtrl.getEmployeeById);
UserRouter.route('/employees/employee/:id').put(JwtMiddleware.hasRole(Role.USER), EmployeeCtrl.updateEmployee);
UserRouter.route('/employees/employee/:id').delete(JwtMiddleware.hasRole(Role.USER), EmployeeCtrl.deleteEmployee);






export default UserRouter;
