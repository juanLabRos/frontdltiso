export function validatePassword(password: string){
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,16}$/;
    return passwordRegex.test(password);
}
