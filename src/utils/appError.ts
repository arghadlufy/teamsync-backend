import { HTTP_STATUS, HttpStatusCode } from "../config/http.config";
import { ErrorCodeEnum, ErrorCodeEnumType } from "../enums/error-code.enum";

export class AppError extends Error {
  public statusCode: HttpStatusCode;
  public errorCode?: ErrorCodeEnumType;

  constructor(
    message: string,
    statusCode: HttpStatusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR,
    errorCode: ErrorCodeEnumType = ErrorCodeEnum.INTERNAL_SERVER_ERROR
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

export class BadRequestError extends AppError {
  constructor(
    message: string,
    statusCode: HttpStatusCode = HTTP_STATUS.BAD_REQUEST,
    errorCode: ErrorCodeEnumType = ErrorCodeEnum.BAD_REQUEST
  ) {
    super(message, statusCode, errorCode);
  }
}

export class UnauthorizedError extends AppError {
  constructor(
    message: string,
    statusCode: HttpStatusCode = HTTP_STATUS.UNAUTHORIZED,
    errorCode: ErrorCodeEnumType = ErrorCodeEnum.ACCESS_UNAUTHORIZED
  ) {
    super(message, statusCode, errorCode);
  }
}

export class ForbiddenError extends AppError {
  constructor(
    message: string,
    statusCode: HttpStatusCode = HTTP_STATUS.FORBIDDEN,
    errorCode: ErrorCodeEnumType = ErrorCodeEnum.ACCESS_FORBIDDEN
  ) {
    super(message, statusCode, errorCode);
  }
}

export class NotFoundError extends AppError {
  constructor(
    message: string,
    statusCode: HttpStatusCode = HTTP_STATUS.NOT_FOUND,
    errorCode: ErrorCodeEnumType = ErrorCodeEnum.RESOURCE_NOT_FOUND
  ) {
    super(message, statusCode, errorCode);
  }
}

export class ValidationError extends AppError {
  constructor(
    message: string,
    statusCode: HttpStatusCode = HTTP_STATUS.UNPROCESSABLE_ENTITY,
    errorCode: ErrorCodeEnumType = ErrorCodeEnum.VALIDATION_ERROR
  ) {
    super(message, statusCode, errorCode);
  }
}

export class InternalServerError extends AppError {
  constructor(
    message: string,
    statusCode: HttpStatusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR,
    errorCode: ErrorCodeEnumType = ErrorCodeEnum.INTERNAL_SERVER_ERROR
  ) {
    super(message, statusCode, errorCode);
  }
}
