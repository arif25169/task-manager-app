import { Modal, Form, Input, Select, DatePicker, Tag } from "antd";
import dayjs from "dayjs";
import { Task } from "../../utils/interfaces";
import { statusOptions, getStatusColor } from "../../utils/taskUtils";


interface EditTaskModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (values: Partial<Task>) => void;
  editingTask: Task | null;
}

export const EditTaskModal: React.FC<EditTaskModalProps> = ({ visible, onClose, onSubmit, editingTask }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      title="Edit Task"
      open={visible}
      onCancel={onClose}
      onOk={() => form.submit()}
    >
      <Form
        form={form}
        onFinish={onSubmit}
        initialValues={editingTask ? { ...editingTask, due_date: editingTask.due_date ? dayjs(editingTask.due_date) : null } : {}}
      >
        <Form.Item name="name" rules={[{ required: true, message: "Please enter task name" }]}>
          <Input placeholder="Task Name" />
        </Form.Item>
        <Form.Item name="description" rules={[{ required: true, message: "Please enter description" }]}>
          <Input placeholder="Description" />
        </Form.Item>
        <Form.Item name="status" rules={[{ required: true, message: "Please select a status" }]}>
          <Select placeholder="Select Status">
          {statusOptions.map((option) => (
            <Select.Option key={option.value} value={option.value}>
              <Tag color={getStatusColor(option.value)}>{option.label}</Tag>
            </Select.Option>
          ))}
          </Select>
        </Form.Item>
        <Form.Item name="due_date" rules={[{ required: true, message: "Please select a due date" }]}>
          <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" allowClear={false}/>
        </Form.Item>
      </Form>
    </Modal>
  );
};
