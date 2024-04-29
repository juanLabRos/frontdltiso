export function validatePassword(password: string){
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/;
    return passwordRegex.test(password);
}
