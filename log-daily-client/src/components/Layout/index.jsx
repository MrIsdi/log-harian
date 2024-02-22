import React, { Suspense } from "react";
import Sidebar from "../Sidebar";

function Layout({ children, name }) {
  return (
    <Suspense>
      <div className="flex min-h-screen bg-slate-950 gap-8">
        <Sidebar name={name} />
        <main className="md:basis-4/5 basis-full p-4">{children}</main>
      </div>
    </Suspense>
  );
}

export default Layout;
