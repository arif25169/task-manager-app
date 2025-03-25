import { Button, Col, DatePicker, Form, Input, Row, Select, Tag } from "antd";
import { statusOptions, getStatusColor } from "../../utils/taskUtils";
import { useTaskStore } from "../../stores/task/task.store";
import dayjs from "dayjs";
import { PlusOutlined } from "@ant-design/icons";

export const AddTaskForm: React.FC = () => {
  const [form] = Form.useForm();
  const { addTask } = useTaskStore();

  const handleAddTask = async (values: any) => {
    const formattedValues = {
      ...values,
      due_date: values.due_date ? dayjs(values.due_date).format("YYYY-MM-DD HH:mm:ss") : null,
    };
    await addTask(formattedValues);
    form.resetFields();
  };

  return (
<Form onFinish={handleAddTask} form={form} style={{padding:5}}>
  <Row gutter={[16, 8]}>
    <Col xs={24} sm={12} md={6} lg={5}>
      <Form.Item 
        name="name" 
        rules={[{ required: true, message: "Enter task name" }]} 
        style={{ marginBottom: 0 }}
      >
        <Input placeholder="Task Name" />
      </Form.Item>
    </Col>
    <Col xs={24} sm={12} md={6} lg={5}>
      <Form.Item 
        name="description" 
        rules={[{ required: true, message: "Enter description" }]} 
        style={{ marginBottom: 0 }}
      >
        <Input placeholder="Description" />
      </Form.Item>
    </Col>
    <Col xs={24} sm={12} md={6} lg={5}>
      <Form.Item 
        name="status" 
        rules={[{ required: true, message: "Select a status" }]} 
        style={{ marginBottom: 0 }}
      >
        <Select placeholder="Status">
          {statusOptions.map((option) => (
            <Select.Option key={option.value} value={option.value}>
              <Tag color={getStatusColor(option.value)}>{option.label}</Tag>
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </Col>
    <Col xs={24} sm={12} md={6} lg={5}>
      <Form.Item 
        name="due_date" 
        rules={[{ required: true, message: "Enter due date" }]} 
        style={{ marginBottom: 0 }}
      >
        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" allowClear={false} style={{ width: "100%" }} />
      </Form.Item>
    </Col>
    <Col xs={24} sm={12} md={6} lg={4} style={{ display: "flex", alignItems: "center" }}>
      <Form.Item style={{ marginBottom: 0 }}>
        <Button type="primary" htmlType="submit" icon={<PlusOutlined />} block>
          Add Task
        </Button>
      </Form.Item>
    </Col>
  </Row>
</Form>


  );
};
