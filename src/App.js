import React, { useState } from 'react';
import BookForm from './components/BookForm';
import BookTable from './components/BookTable';

function App() {
  const [books, setBooks] = useState([]);
  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <div className="app-container">
      <h1>Gestor de Biblioteca</h1>
      <BookForm onAddBook={handleAddBook} />
      <hr style={{ margin: '30px 0', border: '1px solid #eee' }} />
      <BookTable books={books} />
    </div>
  );
}

export default App;