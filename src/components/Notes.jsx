import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

function Notes() {
    const [readme, setReadme] = useState("");

    useEffect(() => {
    fetch("/README.md")
        .then((res) => res.text())
        .then((text) => setReadme(text));
    }, []);

    const [notes, setNotes] = useState("");

    useEffect(() => {
    fetch("/notes.md")
        .then((res) => res.text())
        .then((text) => setNotes(text));
    }, []);

    return (
    <div>
        <h1>Project Docs 📖</h1>
        <ReactMarkdown>{notes}</ReactMarkdown>
        <ReactMarkdown>{readme}</ReactMarkdown>
    </div>
    );
}

export default Notes;
