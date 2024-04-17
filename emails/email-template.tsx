import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  token:string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  token
}) => (
  <div>
    <h1>Bienvenido, {firstName}!</h1>
    <p>Hola amigo {firstName}, usted está intentando iniciar sesion en nuestra aplicación web.</p>
    <p>Para continuar en nuestra aplicación es necesario verificiar este correo electronico.</p>
    <p>Por favor haga click en el siguiente enlace para verificar su correo.</p>
    <a href={`http://localhost:3000/verify?tk=${token}`}>Verificar correo</a>
    <p>Si no es usted el destinatario, simplemente elimine este correo.</p>
  </div>
);
