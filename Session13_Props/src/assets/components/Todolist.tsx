import { Component } from "react";
import './Todolist.css'
  export default class Todolist extends Component {
    render() {
        return(
            <>
            <div className="container">
    {/* Header */}
    <div className="header">
      <h1>📝 TodoList</h1>
      <p>Quản lý công việc hiệu quả</p>
    </div>
    {/* Input Section */}
    <div className="input-section">
      <div className="input-group">
        <input
          type="text"
          className="task-input"
          placeholder="Nhập công việc cần làm..."
          maxLength={100}
        />
        <button className="add-btn">➕ Thêm</button>
      </div>
      <div className="error-message">
        {/* Thông báo lỗi sẽ hiển thị ở đây */}
      </div>
    </div>
    {/* Empty State */}
    <div className="empty-state">
      <div className="empty-state-icon">📋</div>
      <div className="empty-state-text">Chưa có công việc nào</div>
      <div className="empty-state-subtext">
        Hãy thêm công việc đầu tiên của bạn!
      </div>
    </div>
    {/* Todo List */}
    <div className="todo-list">
      <div className="todo-item">
        <input type="checkbox" className="todo-checkbox" />
        <span className="todo-text">Học HTML và CSS</span>
        <div className="todo-actions">
          <button className="delete-btn">🗑️ Xóa</button>
        </div>
      </div>
      <div className="todo-item">
        <input type="checkbox" className="todo-checkbox" />
        <span className="todo-text completed">Hoàn thành dự án website</span>
        <div className="todo-actions">
          <button className="delete-btn">🗑️ Xóa</button>
        </div>
      </div>
      <div className="todo-item">
        <input type="checkbox" className="todo-checkbox" />
        <span className="todo-text">Đi mua sắm</span>
        <div className="todo-actions">
          <button className="delete-btn">🗑️ Xóa</button>
        </div>
      </div>
      <div className="todo-item">
        <input type="checkbox" className="todo-checkbox" />
        <span className="todo-text completed">Đọc sách lập trình</span>
        <div className="todo-actions">
          <button className="delete-btn">🗑️ Xóa</button>
        </div>
      </div>
      <div className="todo-item">
        <input type="checkbox" className="todo-checkbox" />
        <span className="todo-text">Tập thể dục buổi sáng</span>
        <div className="todo-actions">
          <button className="edit-btn">✏️ Sửa</button>
          <button className="delete-btn">🗑️ Xóa</button>
        </div>
      </div>
      <div className="todo-item">
        <input type="checkbox" className="todo-checkbox" />
        <span className="todo-text">Chuẩn bị bài thuyết trình</span>
        <div className="todo-actions">
          <button className="delete-btn">🗑️ Xóa</button>
        </div>
      </div>
    </div>
    {/* Footer */}
    <div className="footer">
      <div className="task-counter">
        Đã hoàn thành: <span className="counter-number">2</span> /
        <span className="counter-number">6</span> công việc
      </div>
    </div>
  </div>
</>
        )
        
    }
}
      
