'use client';

import { UserContext } from "@/app/context/UserContext";
import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface Document {
    id: number;
    name: string;
    createdAt: string;
    createdBy: string;
    downloadLink: string;
}

const DocumentsTable: React.FC<{ documents: Document[]; download: (docId: number) => void; isDownloading: boolean }> = ({ documents, download, isDownloading }) => {
    const { usuario } = useContext(UserContext);
    const router = useRouter();

    const handleDownloadClick = (docId: number) => {
        //  if (usuario?.premium) {
        download(docId);
        /*  } else {
            router.push('/premium');
        }*/
    };

    return (
        <div className="px-20 rounded-lg h-full overflow-auto">
            <table className="w-full bg-200 border">
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
                                <button onClick={() => handleDownloadClick(doc.id)} className="text-blue-500 hover:underline" disabled={isDownloading}>
                                    {isDownloading ? 'Descargando...' : 'Descargar'}
                                </button>
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
    const [isDownloading, setIsDownloading] = useState(false);
    const { usuario } = useContext(UserContext);

    useEffect(() => {
        const fetchDocuments = async (userId: number) => {
            try {
                const response = await axios.get(`http://localhost:5000/users/${userId}/words`);
                const fetchedDocuments = response.data.map((doc: any) => ({
                    id: doc.id,
                    name: doc.name,
                    createdAt: new Date(doc.createdAt).toISOString().split('T')[0],
                    createdBy: doc.createdBy,
                    downloadLink: doc.downloadLink,
                }));
                setDocuments(fetchedDocuments);
            } catch (error) {
                console.error("Error fetching documents:", error);
            }
        };

        if (usuario?.id !== undefined) {
            fetchDocuments(usuario.id);
        }
    }, [usuario]);

    const download = async (docId: number) => {
        setIsDownloading(true);
        try {
            const response = await axios.post(`http://localhost:5000/word/${docId}/download/pdf`, {}, {
                responseType: 'blob'
            });

            const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `document_${docId}.pdf`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            alert('Documento descargado con éxito');
        } catch (error) {
            console.error("Error al descargar el documento:", error);
            alert('Error al descargar el documento');
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div className="flex h-screen flex-col items-center bg-gray-100">
            <h1 className="text-2xl font-bold my-4 text-black">Documentos Generados</h1>
            <div className="w-full px-4 h-5/6 overflow-auto">
                <DocumentsTable documents={documents} download={download} isDownloading={isDownloading} />
            </div>
        </div>
    );
}
