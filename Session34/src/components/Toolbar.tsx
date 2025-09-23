<<<<<<< HEAD
import { Button, TextField } from '@mui/material';

import React from 'react';

interface ToolbarProps {
  onSearch: (keyword: string) => void;
  onAdd: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onSearch, onAdd }) => {
  const [keyword, setKeyword] = React.useState('');

  return (
    <div className="flex justify-between mb-4">
      <Button variant="contained" color="primary" onClick={onAdd}>
        Thêm mới sinh viên
      </Button>
      <div className="flex gap-2">
        <TextField
          size="small"
          placeholder="Search Here"
          value={keyword}
          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setKeyword(e.target.value)}
        />
        <Button variant="contained" onClick={() => onSearch(keyword)}>
          Tìm kiếm
        </Button>
        <Button variant="outlined">Sắp xếp</Button>
      </div>
    </div>
  );
};

=======
import { Button, TextField } from '@mui/material';

import React from 'react';

interface ToolbarProps {
  onSearch: (keyword: string) => void;
  onAdd: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onSearch, onAdd }) => {
  const [keyword, setKeyword] = React.useState('');

  return (
    <div className="flex justify-between mb-4">
      <Button variant="contained" color="primary" onClick={onAdd}>
        Thêm mới sinh viên
      </Button>
      <div className="flex gap-2">
        <TextField
          size="small"
          placeholder="Search Here"
          value={keyword}
          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setKeyword(e.target.value)}
        />
        <Button variant="contained" onClick={() => onSearch(keyword)}>
          Tìm kiếm
        </Button>
        <Button variant="outlined">Sắp xếp</Button>
      </div>
    </div>
  );
};

>>>>>>> 9ff6c1a591451acca643a6e60899e7d056a54a8c
export default Toolbar;