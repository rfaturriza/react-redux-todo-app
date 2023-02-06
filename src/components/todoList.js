import TodoItem from "./todoItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTodosAsync } from "../redux/todoSlice";


const ListTodo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosAsync());
    }, [dispatch]);

  const todos = useSelector(state => state.todos.todos);
  const isLoading = useSelector(state => state.todos.fetchInProgress);

    return (
        <ul className="list-group">
        {isLoading && <div>Loading...</div>}
        {todos?.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
        ))}
        </ul>
    );
}; 

export default ListTodo;
