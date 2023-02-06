import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import  NavbarHeader  from './components/header';
import AddTodoForm from './components/addTodoForm';
import TodoList from './components/todoList';




function App() {
  return (
    <Container >
      <NavbarHeader />
      <AddTodoForm placeholder={'Kerjain apa?'}/> 
      <hr />
      <TodoList />
    </Container>
  );
}

export default App;
