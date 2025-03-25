import { TaskStatus } from "./interfaces";

export const statusColors: Record<TaskStatus, string> = {
  [TaskStatus.IN_PROGRESS]: "blue",
  [TaskStatus.DONE]: "green",
  [TaskStatus.TO_DO]: "orange",
};

export const SESSION_EXPIRED= "Your session has expired. Please login again";
export const INVALID_LOGIN= "Your credential is invalid";
export const SOMETHING_WRONG= "Something Went Wrong";
export const NEW_USER= "New User has been created";