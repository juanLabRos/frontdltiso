import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      user:{
        premium: boolean;
        id: number,
        username: string,
        fullname: string,
        password: string,
        newpassword: string,
        email: string,
        usertype: string,
        company: string,
        userphoto: string,
        token: string;
        error:[];
      }
    };
  }
}
