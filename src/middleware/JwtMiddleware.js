
import JwtService from "../services/JwtService.js";
import ApiResponse from '../helpers/api.responses.js';

class JwtMiddleware {

  constructor() { }

  static hasRole(role) {
    return (req, res, next) => {
      const bearer = req.header('Authorization') || '';
      const token = bearer.split(' ')[1];
      const decoded = JwtService.decode(token);
      const foundRole = decoded.payload.roles.find(e => e === role);
      return foundRole ? next() : ApiResponse.ForbiddenResponse(res,"Access Denied.");
    }
  }

  static hasAllRoles(roles) {
    return (req, res, next) => {
      const bearer = req.header('Authorization') || '';
      const token = bearer.split(' ')[1];
      const decoded = JwtService.decode(token);
      const foundAllRole = roles.every(e => decoded.payload.roles.find(i => i === e));
      return foundAllRole ? next() : ApiResponse.ForbiddenResponse(res,"Access Denied.");
    }
  }

  static hasAnyRole(roles) {
    return (req, res, next) => {
      const bearer = req.header('Authorization') || '';
      const token = bearer.split(' ')[1];
      const decoded = JwtService.decode(token);
      const foundAnyRole = roles.some(e => decoded.payload.roles.find(i => i === e));
      return foundAnyRole ? next() : ApiResponse.ForbiddenResponse(res,"Access Denied.");
    }
  }

}
export default JwtMiddleware;


//hasRole(role) =	Ensures the authenticated user has appropriate role
//hasAnyRole([role, role])	= Ensures the authenticated user has ANY of the appropriate roles
//hasAllRoles([role, role])	= Ensures the authenticated user has ALL the appropriate roles