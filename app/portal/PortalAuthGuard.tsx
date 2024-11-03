'use client';

import { useEffect } from "react";
import { redirect, RedirectType } from "next/navigation";
import { useAuthContext } from "../firebase/auth";

export const PortalAuthGuard = ({ children }: {
  children: React.ReactNode;
}) => {
  const user = useAuthContext();

  useEffect(() => {
    if (user) {
      redirect("/", RedirectType.replace);
    }
  }, [user]);

  return (
    children
  );
};
