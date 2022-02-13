import { Request } from "express";

interface IRequest extends Request {
  user: any;
}

export default IRequest;
