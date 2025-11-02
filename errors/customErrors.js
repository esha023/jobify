import { StatusCodes } from "http-status-codes";

export class NotFoundError extends Error {
  constructor(message = "Resource not found") {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

export class BadRequestError extends Error {
  constructor(message = "Bad Request") {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export class UnauthenticatedError extends Error {
  constructor(message = "User not authenticated") {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export class UnauthorizedError extends Error {
  constructor(message = "User not authorized") {
    super(message);
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}
