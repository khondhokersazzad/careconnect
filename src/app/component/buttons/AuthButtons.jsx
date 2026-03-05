"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const AuthButtons = () => {
  const session = useSession();
  return (
    <div>
      {session.status === "authenticated" ? (
        <button onClick={()=>signOut()} className="btn bg-white text-emerald-600 hover:bg-emerald-100 border-none rounded-xl">
          Logout
        </button>
      ) : (
        <Link href={'/login'} className="btn bg-white text-emerald-600 hover:bg-emerald-100 border-none rounded-xl">
          Login
        </Link>
      )}
    </div>
  );
};

export default AuthButtons;
