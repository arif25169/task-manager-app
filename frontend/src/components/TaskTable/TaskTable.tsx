import { Table, Button, Space, Popconfirm, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { Task } from "../../utils/interfaces";
import { useTaskStore } from "../../stores/task/task.store";
import { EditableCell } from "./EditableCell";
import { EditTaskModal } from "../TaskModal";
import dayjs from "dayjs";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { SearchBar } from "../SearchBar/SearchBar";


export const TaskTable: React.FC = () => {
  const { tasks, isLoading, pagination, fetchTasks, updateTask, deleteTask } = useTaskStore();
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleSearch = (value: string) => {
    fetchTasks(1, { search: value });
  };


  const handleEditTask = async (values: Partial<Task>) => {
    if (editingTask) {
      await updateTask(editingTask.id, {
        ...values,
        due_date: values.due_date ? dayjs(values.due_date).format("YYYY-MM-DD HH:mm:ss") : null,
      });
      setIsModalOpen(false);
      setEditingTask(null);
    }
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_: any, record: Task) => <EditableCell record={record} dataIndex="name" />
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (_: any, record: Task) => <EditableCell record={record} dataIndex="description" />
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_: any, record: Task) => <EditableCell record={record} dataIndex="status" />
    },
    {
      title: "Due Date",
      dataIndex: "due_date",
      key: "due_date",
      render: (_: any, record: Task) => <EditableCell record={record} dataIndex="due_date" />
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: Task) => (
        <Space>
          <Button icon={<EditOutlined />}
            onClick={() => {
              setEditingTask(record);
              setIsModalOpen(true);
            }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => deleteTask(record.id)}

          >
            <Tooltip title="Delete">
              <Button danger icon={<DeleteOutlined />} />
            </Tooltip>
          </Popconfirm>
        </Space>

      ),
    },
  ];

  return (
    <div>
      {/* Search Input */}
      <div style={{ marginBottom: 0, marginTop: 15 }}>
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Task Table */}
      <div className="responsive-table">
        <Table
          columns={columns}
          dataSource={tasks}
          loading={isLoading}
          rowKey="id"
          pagination={{
            current: pagination?.current_page,
            total: pagination?.total,
            onChange: (page) => fetchTasks(page),
          }}
        />
      </div>
      {/* Edit Task Modal */}
      <EditTaskModal
        visible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleEditTask}
        editingTask={editingTask}
      />
    </div>
  );
};
