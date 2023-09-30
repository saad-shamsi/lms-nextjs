import { Request, Response, NextFunction, response } from "express";
export const CatchAsyncEeoe =
  (thefunc: any) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(thefunc(req, res, next)).catch(next);
  };
