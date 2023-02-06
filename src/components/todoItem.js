import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodoAsync } from '../redux/todoSlice';

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const handleDone = () => {
    dispatch(toggleComplete({
      id: todo.id,
      isDone: !todo.isDone
    }));
  };

  const handleDelete = () => {
    dispatch(deleteTodoAsync(todo.id));
  };


  return (
    <>
      <Alert variant={todo.isDone ? 'success' : 'warning'}>
        <Alert.Heading>{todo.title}</Alert.Heading>
        <p>
          {todo.description}
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={handleDelete} variant='outline-danger' className="mx-2">
            Hapus
          </Button>
          <Button onClick={handleDone} variant={todo.isDone ? 'outline-success' : 'outline-warning'}>
            {todo.isDone ? 'Belum Selesai' : 'Sudah Selesai'}
          </Button>
        </div>
      </Alert>
    </>
  );
}

export default TodoItem;