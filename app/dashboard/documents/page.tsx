'use client';

import { UserContext } from "@/app/context/UserContext";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import axios from 'axios';

interface Document {
    id: number;
    name: string;
    createdAt: string;
    createdBy: string;
    downloadLink: string;
}

const DocumentsTable: React.FC<{ documents: Document[] }> = ({ documents }) => {
    const { usuario } = useContext(UserContext);
    return (
        <div className="px-20 rounded-lg">
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
                                {usuario?.premium ? (
                                    <a href={doc.downloadLink} className="text-blue-500 hover:underline" download>
                                        Descargar
                                    </a>
                                ) : (
                                    <Link href={'./premium'} className="text-blue-500 hover:underline">
                                        Descargar
                                    </Link>
                                )}
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




    return (
        <div className="flex h-screen flex-col items-center bg-gray-100">
            <h1 className="text-2xl font-bold my-4 text-black">Documentos Generados</h1>
            <div className="w-full px-4">
                <DocumentsTable documents={documents} />
            </div>
        </div>
    );
}
