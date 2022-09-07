import { Request } from "express";

import IUser from "types/User";

interface IRequest extends Request {
  user: IUser;
}

export default IRequest;
