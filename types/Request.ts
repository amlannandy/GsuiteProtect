import { Request } from "express";

import IUser from "./User";

interface IRequest extends Request {
  user: IUser;
}

export default IRequest;
