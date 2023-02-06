import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTodoAsync } from '../redux/todoSlice';

function AddTodoForm({ placeholder }) {

	const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		if (title) {
			dispatch(
				addTodoAsync({
					title: title,
				})
			);
      setTitle('');
      setDescription('');
		} else {
      alert('Please fill the title');
    }
	};

  return (
    <Form>
        <Form.Group className="mb-2" controlId="from.title">
            <Form.Label>Kerjaan</Form.Label>
            <Form.Control 
              type="text" 
              placeholder={placeholder}
				      value={title} 
              onChange={(e) => setTitle(e.target.value)} 
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="form.description">
            <Form.Label>Deskripsi kerjaan</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3} 
              value={description} 
              onChange={(e) => setDescription(e.target.value)}
            />
        </Form.Group>
        <Button variant="primary" type="submit" className='m-10' onClick={onSubmit}>
            Tambah
        </Button>
    </Form>
  );
}

export default AddTodoForm;