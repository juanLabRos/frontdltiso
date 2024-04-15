export interface User {
    username: string;
    password: string;
    email: string;
    company:string;
  };

export type Usuario= Partial<User>;

export const customErrorZod = (issue:any) => {
  switch (issue.code) {
    case "too_small":
      return "La contraseña debe tener al menos 6 caracteres";
    case "invalid_email":
      return "Correo electrónico inválido";
    default:
      return "Ha habido un error al registrar el usuario";
  }
};