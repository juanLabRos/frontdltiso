"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";

export function GoogleSignInButton() {
  const handleClick = () => {
    signIn("google");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-white flex w-full items-center justify-center rounded-md ${bgColor} px-3 py-2 text-sm font-semibold leading-6 hover:${hoverBgColor} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:${focusOutlineColor}`"
    >
      <Image src={"./google.svg"} width={20} height={20} alt="Google" className="w-5 mr-2 h-5" />
      <span className="text-sm font-semibold text-black leading-7">Google</span>
    </button>
  );
}



  