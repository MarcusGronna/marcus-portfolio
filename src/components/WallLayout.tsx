// Grid-layout som “gallerivägg”. Div class='grid gap-16 md:grid-cols-12'. Placera children i auto-flow. Exportera FC<{children}>.
export default function WallLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full grid gap-20 lg:gap-24 lg:grid-cols-12 lg:auto-rows-min px-4 md:px-12 py-8">
      <div className="col-span-full mx-auto w-full max-w-6xl">{children}</div>
    </div>
  );
}
