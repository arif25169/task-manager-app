import { TaskStatus } from "./interfaces";

export const getStatusColor = (status: TaskStatus): string => {
  switch (status) {
    case TaskStatus.TO_DO:
      return "orange";
    case TaskStatus.IN_PROGRESS:
      return "blue";
    case TaskStatus.DONE:
      return "green";
    default:
      return "gray";
  }
};

export const statusOptions = Object.values(TaskStatus)
  .filter((status): status is TaskStatus => typeof status === "string")
  .map((status) => ({
    value: status,
    label: status,
  }));
