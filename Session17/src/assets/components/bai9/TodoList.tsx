/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

const TaskItem: React.FC<{ task: Task; onEdit: (id: number) => void; onDelete: (id: number) => void; onToggle: (id: number) => void }> = ({ task, onEdit, onDelete, onToggle }) => (
  <div className="flex justify-between items-center p-2 border-b border-custom-gray-200">
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-custom-gray-300 rounded"
      />
      <span className={`text-custom-gray-700 ${task.completed ? 'line-through' : ''}`}>{task.name}</span>
    </div>
    <div className="flex space-x-2">
      <button onClick={() => onEdit(task.id)} className="text-yellow-500 hover:text-yellow-700">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      </button>
      <button onClick={() => onDelete(task.id)} className="text-red-500 hover:text-red-700">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
);

const EditModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onSave: (id: number, newName: string) => void;
  task: Task | null;
  tasks: Task[];
}> = ({ isOpen, onClose, onSave, task, tasks }) => {
  const [editedName, setEditedName] = useState(task?.name || '');
  const [error, setError] = useState('');

  if (!isOpen || !task) return null;

  const handleSave = () => {
    if (!editedName.trim()) {
      setError('Tên công việc không được để trống');
      return;
    }
    if (tasks.some(t => t.id !== task.id && t.name.toLowerCase() === editedName.toLowerCase())) {
      setError('Tên công việc không được phép trùng');
      return;
    }
    onSave(task.id, editedName);
    setError('');
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-80">
        <h3 className="text-lg font-semibold text-custom-gray-900 mb-2">Chỉnh sửa công việc</h3>
        <input
          type="text"
          value={editedName}
          onChange={(e) => {
            setEditedName(e.target.value);
            setError('');
          }}
          className="w-full p-2 border border-custom-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-custom-gray-300 text-custom-gray-800 rounded-lg hover:bg-custom-gray-400">
            Hủy
          </button>
          <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
};

const ConfirmationModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  taskName: string;
}> = ({ isOpen, onClose, onConfirm, taskName }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-80">
        <h3 className="text-lg font-semibold text-custom-gray-900 mb-2">Xác nhận xóa</h3>
        <p className="text-red-500 mb-4">Bạn có chắc chắn muốn xóa công việc <span className="font-bold">{taskName}</span> không?</p>
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-custom-gray-300 text-custom-gray-800 rounded-lg hover:bg-custom-gray-400">
            Hủy
          </button>
          <button onClick={onConfirm} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Đồng ý
          </button>
        </div>
      </div>
    </div>
  );
};

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState('');
  const [error, setError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    // Thêm trạng thái completed cho các task cũ nếu chưa có
    const updatedTasks = savedTasks.map((task: any) => ({
      ...task,
      completed: task.completed || false,
    }));
    setTasks(updatedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (!taskName.trim()) {
      setError('Tên công việc không được để trống');
      return;
    }
    if (tasks.some(task => task.name.toLowerCase() === taskName.toLowerCase())) {
      setError('Tên công việc không được phép trùng');
      return;
    }
    setTasks([...tasks, { id: Date.now(), name: taskName, completed: false }]);
    setTaskName('');
    setError('');
  };

  const handleEditTask = (id: number) => {
    const task = tasks.find(t => t.id === id);
    setTaskToEdit(task || null);
    setEditModalOpen(true);
  };

  const handleSaveEdit = (id: number, newName: string) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, name: newName } : task));
    setEditModalOpen(false);
    setTaskToEdit(null);
  };

  const handleDeleteTask = (id: number) => {
    setTaskToDelete(id);
    setModalOpen(true);
  };

  const handleToggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const confirmDelete = () => {
    if (taskToDelete !== null) {
      setTasks(tasks.filter(task => task.id !== taskToDelete));
    }
    setModalOpen(false);
    setTaskToDelete(null);
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const allCompleted = completedTasks === tasks.length && tasks.length > 0;

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md mt-6 relative">
      {modalOpen && (
        <div className="fixed inset-0 bg-custom-gray-600 bg-opacity-50 z-40"></div>
      )}
      {editModalOpen && (
        <div className="fixed inset-0 bg-custom-gray-600 bg-opacity-50 z-40"></div>
      )}
      <h2 className="text-xl font-semibold text-center mb-4 border-b-2 border-custom-gray-200 pb-2">Danh sách công việc</h2>
      <div className="flex mb-4 items-center">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Nhập tên công việc"
          className="flex-1 p-2 border border-custom-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-custom-gray-400"
        />
        <button
          onClick={handleAddTask}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Thêm
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <div>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            onToggle={handleToggleTask}
          />
        ))}
      </div>
      <p className="text-custom-gray-500 text-sm mt-2 bg-custom-gray-100 p-2 rounded-lg">
        {allCompleted ? 'Hoàn thành công việc' : `Công việc đã hoàn thành: ${completedTasks}/${tasks.length}`}
      </p>
      <ConfirmationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={confirmDelete}
        taskName={tasks.find(task => task.id === taskToDelete)?.name || ''}
      />
      <EditModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSave={handleSaveEdit}
        task={taskToEdit}
        tasks={tasks}
      />
    </div>
  );
};

export default TodoList;