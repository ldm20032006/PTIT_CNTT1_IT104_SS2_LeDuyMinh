import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import {
  deleteTask,
  getAllTasks,
  toggleTaskCompletion,
} from "../apis/task.api";
import type { Task } from "../interfaces/task.interface";
import type { RootState } from "../redux/stores"; // 👈 import RootState
import TaskForm from "./TaskForm";
import FilterControls from "./FilterControls";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { setSelectedTask } from "../redux/slices/task.slice";

// Gom TaskItem vào trong đây
interface TaskItemProps {
  id: string;
  title: string;
  completed: boolean;
  priority: string;
  onToggle: () => void;
  onDelete: () => void;
  onEdit: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  title,
  completed,
  priority,
  onToggle,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow mb-2">
      <div>
        <h3
          className={`font-semibold ${
            completed ? "line-through text-gray-500" : ""
          }`}
        >
          {title}
        </h3>
        <p className="text-sm text-gray-600">Priority: {priority}</p>
      </div>
      <div className="flex gap-2">
        <Button variant="outlined" size="small" onClick={onToggle}>
          {completed ? "Undo" : "Done"}
        </Button>
        <Button variant="outlined" size="small" onClick={onEdit}>
          Edit
        </Button>
        <Button variant="outlined" color="error" size="small" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

const TaskList: React.FC = () => {
  const dispatch = useAppDispatch();

  // 👇 dùng RootState thay cho any
  const { tasks, status, error } = useAppSelector(
    (state: RootState) => state.task
  );

  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [filters, setFilters] = useState({
    status: "all",
    priority: "all",
    search: "",
  });

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  const handleDelete = (id: number) => {
    setDeleteId(id);
  };

  const confirmDelete = () => {
    if (deleteId) {
      dispatch(deleteTask(deleteId));
      setDeleteId(null);
    }
  };

  const handleEdit = (task: Task) => {
    dispatch(setSelectedTask(task));
  };

  // 👇 dùng Task thay cho {completed: any; priority: string; ...}
  const filteredTasks = tasks.filter((task: Task) => {
    const matchStatus =
      filters.status === "all" ||
      (filters.status === "completed" && task.completed) ||
      (filters.status === "active" && !task.completed);

    const matchPriority =
      filters.priority === "all" || task.priority === filters.priority;

    const matchSearch = task.taskName
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    return matchStatus && matchPriority && matchSearch;
  });

  if (error) {
    return (
      <h1 className="text-red-500 text-center">Đã có lỗi xảy ra: {error}</h1>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">📝 Task Manager</h1>

      {status === "pending" && (
        <div className="flex justify-center mb-4">
          <div className="loader animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}

      <TaskForm />

      <FilterControls
        status={filters.status}
        priority={filters.priority}
        search={filters.search}
        onStatusChange={(status) => setFilters({ ...filters, status })}
        onPriorityChange={(priority) => setFilters({ ...filters, priority })}
        onSearchChange={(search) => setFilters({ ...filters, search })}
      />

      <div>
        {filteredTasks.map((task: Task) => (
          <TaskItem
            key={task.id}
            id={task.id?.toString() || ""}
            title={task.taskName}
            completed={task.completed}
            priority={task.priority}
            onToggle={() => dispatch(toggleTaskCompletion(task))}
            onDelete={() => handleDelete(task.id || 0)}
            onEdit={() => handleEdit(task)}
          />
        ))}
      </div>

      <Dialog open={!!deleteId} onClose={() => setDeleteId(null)}>
        <DialogTitle>Xác nhận xóa</DialogTitle>
        <DialogContent>Bạn có chắc muốn xóa công việc này?</DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteId(null)} color="primary">
            Hủy
          </Button>
          <Button onClick={confirmDelete} color="error">
            Xóa
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TaskList;
