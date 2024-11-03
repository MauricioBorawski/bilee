import { PortalAuthGuard } from "./PortalAuthGuard";

export default function LayoutPortal({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-screen flex flex-col gap-[80px] items-center justify-center px-4 py-6">
      <h1 className="text-5xl">Billee</h1>
      <div className="w-[320px] bg-billee-background-secondary rounded-lg flex flex-col items-center justify-between p-6">
        <PortalAuthGuard>
          {children}
        </PortalAuthGuard>
      </div>
    </div>
  );
}
