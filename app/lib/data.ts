'use server'
import User from '../mock/users.json';
import bcrypt from 'bcrypt';

export async function fetchFilteredUsers({ mail, pass }: { mail: string; pass: string }) {
    // Buscar el usuario por su mail
    const user = User.find((user: { correo: string }) => user.correo === mail);
    if (!user) {
        return false;
    }
    // Comparar la contraseña
    const result = await bcrypt.compare(pass, user.contrasenia);
    return result;
}
