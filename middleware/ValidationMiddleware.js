import { body, param, validationResult } from "express-validator";
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../errors/customErrors.js";
import mongoose from "mongoose";
import Job from "../models/JobModel.js";
import User from "../models/UserModel.js";

const withValidationErrors = (validateValues) => [
  async (req, res, next) => {
    await Promise.all(validateValues.map((validation) => validation.run(req)));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new BadRequestError(
        errors
          .array()
          .map((e) => e.msg)
          .join(", ")
      );
    }
    next();
  },
];

export const validateIdParam = withValidationErrors([
  param("id").custom(async (value, { req }) => {
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidMongoId) throw new BadRequestError("invalid MongoDB id");
    const job = await Job.findById(value);
    if (!job) throw new NotFoundError(`no job with id ${value}`);
    const isAdmin = req.user.role === "admin";
    const isOwner = req.user.userId === job.createdBy.toString();
    if (!isAdmin && !isOwner)
      throw new UnauthorizedError("not authorized to access this route");
  }),
]);

export const validateJobInput = withValidationErrors([
  body("company").notEmpty().withMessage("Company is required"),
  body("position").notEmpty().withMessage("Position is required"),
  body("jobStatus")
    .optional()
    .isIn(["pending", "interview", "declined", "accepted"])
    .withMessage("Invalid job status"),
  body("jobType")
    .optional()
    .isIn(["full-time", "part-time", "internship"])
    .withMessage("Invalid job type"),
  body("jobLocation")
    .optional()
    .notEmpty()
    .withMessage("Job location cannot be empty"),
]);

export const validateJobId = withValidationErrors([
  param("id").custom(async (value) => {
    const isValid = mongoose.Types.ObjectId.isValid(value);
    if (!isValid) throw new BadRequestError("Job ID must be a valid ObjectId");
    const job = await Job.findById(value);
    if (!job) throw new NotFoundError(`Job with id ${value} not found`);
  }),
]);

export const validateRegisterInput = withValidationErrors([
  body("name").notEmpty().withMessage("name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError("email already exists");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters long"),
  body("location").notEmpty().withMessage("location is required"),
  body("lastName").notEmpty().withMessage("last name is required"),
]);

export const validateLoginInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format"),
  body("password").notEmpty().withMessage("password is required"),
]);

export const validateUpdateUserInput = withValidationErrors([
  body("name").notEmpty().withMessage("name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (user && user._id.toString() !== req.user.userId) {
        throw new BadRequestError("email already exists");
      }
    }),
  body("lastName").notEmpty().withMessage("last name is required"),
  body("location").notEmpty().withMessage("location is required"),
]);
