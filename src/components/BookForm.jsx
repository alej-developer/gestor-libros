import React from 'react';

const BookForm = ({ onAddBook }) => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !author.trim()) return;
        onAddBook({ title, author });
        setTitle('');
        setAuthor('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Añadir Nuevo Libro</h2>
            <div className="form-group">
                <label>Título del Libro:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Ej: Cien años de soledad"
                />
            </div>
            <div className="form-group">
                <label>Autor:</label>
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Ej: Gabriel García Márquez"
                />
            </div>
            <button type="submit">Guardar Libro</button>
        </form>
    );
};

export default BookForm;