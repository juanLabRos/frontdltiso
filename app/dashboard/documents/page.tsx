"use client";
import { UserContext } from "@/app/context/UserContext";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";

// Definición de la estructura de datos de los documentos
interface Document {
    id: number;
    name: string;
    createdAt: string;
    createdBy: string;
    downloadLink: string;
}

// Datos de ejemplo
const exampleDocuments: Document[] = [
    { id: 1, name: "Informe de Seguridad", createdAt: "2024-05-21", createdBy: "Juan Pérez", downloadLink: "/documents/informe-seguridad.docx" },
    { id: 2, name: "Evaluación de Riesgos", createdAt: "2024-05-20", createdBy: "Ana Gómez", downloadLink: "/documents/evaluacion-riesgos.docx" },
    { id: 3, name: "Análisis de Vulnerabilidades", createdAt: "2024-05-19", createdBy: "Luis Martínez", downloadLink: "/documents/analisis-vulnerabilidades.docx" },
];

const DocumentsTable: React.FC<{ documents: Document[] }> = ({ documents }) => {
    const {usuario}= useContext(UserContext);
    
    return (
        <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="min-w-full bg-white border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2 border text-black">Nombre</th>
                        <th className="px-4 py-2 border text-black">Fecha de Generación</th>
                        <th className="px-4 py-2 border text-black">Creado Por</th>
                        <th className="px-4 py-2 border text-black">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {documents.map((doc) => (
                        <tr key={doc.id} className="hover:bg-gray-100">
                            <td className="px-4 py-2 border text-black">{doc.name}</td>
                            <td className="px-4 py-2 border text-black">{doc.createdAt}</td>
                            <td className="px-4 py-2 border text-black">{doc.createdBy}</td>
                            <td className="px-4 py-2 border text-black">
                                {
                                    usuario?.premium ? <a href={doc.downloadLink} className="text-blue-500 hover:underline" download>
                                    Descargar
                                </a> :  <Link href={'./premium'} className="text-blue-500 hover:underline" download>
                                    Descargar
                                </Link>
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function Documents() {
    const [documents, setDocuments] = useState<Document[]>([]);

    useEffect(() => {
        // Aquí se puede hacer la llamada a la API para obtener los documentos
        // Por ahora, usamos datos de ejemplo
        setDocuments(exampleDocuments);
    }, []);

    return (
        <div className="flex h-screen flex-col items-center bg-gray-100">
            <h1 className="text-2xl font-bold my-4 text-black">Documentos Generados</h1>
            <div className="w-full px-4">
                <DocumentsTable documents={documents} />
            </div>
        </div>
    );
}
