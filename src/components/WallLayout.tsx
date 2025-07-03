// (Denna komponent används inte längre. Ta bort filen.)
export default function WallLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full grid gap-20 lg:gap-24 lg:grid-cols-12 lg:auto-rows-min py-8 items-center justify-center justify-items-center">
        <div className="col-span-full">{children}</div>
      </div>
    </div>
  );
}
