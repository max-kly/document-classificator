import { useState, DragEvent } from 'react';
export default function DragAndDrop() {
    const [file, setFile] = useState<File | null>(null);
    const [dragging, setDragging] = useState(false);
    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragging(true);
    };
    const handleDragLeave = () => {
        setDragging(false);
    };
    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragging(false);
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile && ['application/pdf', 'text/plain', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(droppedFile.type)) {
            setFile(droppedFile);
        } else {
            alert('Only .pdf, .txt or .docx files are allowed');
        }
    };
    return (
        <div className='fileInput'
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            style={{
                border: '2px dashed #999',
                borderRadius: 10,
                padding: 30,
                textAlign: 'center',
                opacity: dragging ? '0.4' : '1',
            }}
        >
            {file ? (
                <p>📄 Uploaded: {file.name}</p>
            ) : (
                <p>Drag and drop a PDF, TXT, or DOCX file here</p>
            )}
        </div>
    );
}