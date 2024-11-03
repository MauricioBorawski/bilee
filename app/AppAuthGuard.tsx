import { useEffect } from "react";
import { redirect, RedirectType } from "next/navigation";
import { useAuthContext } from "./firebase/auth";

export const AppAuthGuard = ({ children }: { children: React.ReactNode }) => {
  const user = useAuthContext();

  useEffect(() => {
    if (user === null) {
      redirect("/portal/login", RedirectType.replace);
    }
  }, [user]);

  return children;
};
