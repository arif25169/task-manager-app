import { Input, Select, DatePicker, Tag } from "antd";
import { useEffect, useState } from "react";
import { useTaskStore } from "../../stores/task/task.store";
import { Task, TaskStatus } from "../../utils/interfaces";
import dayjs, { Dayjs } from "dayjs";
import { getStatusColor, statusOptions } from "../../utils/taskUtils";


interface EditableCellProps {
  record: Task;
  dataIndex: keyof Task;
}

export const EditableCell: React.FC<EditableCellProps> = ({ record, dataIndex }) => {
  const { updateTask, tasks } = useTaskStore();
  
  const [value, setValue] = useState<string | number | Dayjs | null>(
    dataIndex === "due_date" ? (record.due_date ? dayjs(record.due_date) : null) : record[dataIndex] || ""
  );

  useEffect(() => {
    const updatedTask = tasks.find((task) => task.id === record.id);
    if (updatedTask) {
      const newValue = updatedTask[dataIndex as keyof Task];
      if (newValue !== null && newValue !== undefined) {
        setValue(
          dataIndex === "due_date"
            ? dayjs(newValue as string) // Ensure it's a valid Dayjs object
            : (newValue as string | number)
        );
      }
    }
  }, [tasks, record.id, dataIndex]);

  const handleBlur = async () => {
    if (value !== record[dataIndex]) {
      await updateTask(record.id, {
        [dataIndex]: dataIndex === "due_date" && value instanceof Dayjs
          ? value.format("YYYY-MM-DD HH:mm:ss") 
          : value,
      });
    }
  };

  return dataIndex === "status" ? (
    <Select
      value={value as TaskStatus}
      onChange={(newValue) => {
        setValue(newValue);
        updateTask(record.id, { [dataIndex]: newValue });
      }}
      onBlur={handleBlur}
      style={{ width: "100%" }}
    >
        {statusOptions.map((option) => (
          <Select.Option key={option.value} value={option.value}>
            <Tag color={getStatusColor(option.value as TaskStatus)}>{option.value}</Tag>
          </Select.Option>
        ))}
    </Select>
  ) : dataIndex === "due_date" ? (
    <DatePicker
      value={value ? (value as Dayjs) : null}
      onChange={(date) => {
        setValue(date);
        updateTask(record.id, {
          [dataIndex]: date ? date.format("YYYY-MM-DD HH:mm:ss") : null, // ✅ Correct Format
        });
      }}
      onBlur={handleBlur}
      showTime
      format="YYYY-MM-DD HH:mm:ss"
      allowClear={false}
    />
  ) : (
    <Input value={value as string} onChange={(e) => setValue(e.target.value)} onBlur={handleBlur} />
  );
};