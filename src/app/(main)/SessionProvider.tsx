"use client";

import { Session } from "lucia";
import React, { createContext, useContext } from "react";

interface User {
  username: string;
  avatarUrl: string | null;
  isAdmin: boolean;
}

interface SessionContext {
  user: User;
  session: Session;
}

const SessionContext = createContext<SessionContext | null>(null);

export default function SessionProvider({
  children,
  value,
}: React.PropsWithChildren<{
  value: SessionContext;
}>) {
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
}

export function useSession() {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession phải được sử dụng trong SessionProvider");
  }
  return context;
}
