'use client'
import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import mammoth from 'mammoth';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; 
import { UserContext } from "@/app/context/UserContext";

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function DocumentPSI() {
    const [content, setContent] = useState("");
    const [isSaving, setIsSaving] = useState(false); 
    const [documentId, setDocumentId] = useState<number | null>(null); 
    const { usuario } = useContext(UserContext); 

    useEffect(() => {
        if (!usuario) return;

        const fetchDocument = async () => {
            try {
                const response = await axios.post(`http://localhost:5000/word/create/sgsi`, {
                    userId: usuario.id,
                    nombreEmpresa: "Dlt",
                    realizadoPor: "Miguel Suárez",
                    revisadoPor: "Antonio Marquez",
                    aprobadoPor: "Juan Martinez",
                    estado: "en progreso"
                });

                const buffer = response.data.content;
                const arrayBuffer = new Uint8Array(buffer.data).buffer;

                mammoth.convertToHtml({ arrayBuffer: arrayBuffer })
                    .then(result => {
                        const html = result.value;
                        setContent(html);
                        setDocumentId(response.data.id);
                    })
                    .catch(err => {
                        console.error("Error converting document:", err);
                        setContent("Error al cargar el contenido del documento.");
                    });
            } catch (error) {
                console.error("Error fetching document:", error);
                setContent("Error al cargar el contenido del documento.");
            }
        };

        fetchDocument();
    }, [usuario]);

    const handleChange = (value: string) => {
        setContent(value);
    };

    const handleSave = async () => {
        if (documentId === null || !usuario) {
            alert("No se pudo obtener el ID del documento o del usuario.");
            return;
        }

        setIsSaving(true);
        try {
            await axios.put(`http://localhost:5000/word/psi/${documentId}/user/buffer/${usuario.id}`, {
                content: content
            });
            alert('Documento guardado con éxito');
        } catch (error) {
            console.error("Error saving document:", error);
            alert('Error al guardar el documento');
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-full p-10">
            <h1 className="text-2xl font-bold mb-4">Documento PSI</h1>
            <div className="w-full h-full max-w-4xl p-4 bg-white border border-gray-300 rounded-lg shadow-md mb-4">
                <ReactQuill
                    value={content}
                    onChange={handleChange}
                    style={{ boxSizing: 'border-box' }}
                />
            </div>
            <button 
                onClick={handleSave} 
                className={`mt-4 px-4 py-2 bg-blue-500 text-white rounded ${isSaving ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isSaving}
            >
                {isSaving ? 'Guardando...' : 'Guardar'}
            </button>
        </div>
    );
}
