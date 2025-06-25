// Grid-layout som “gallerivägg”. Div class='grid gap-16 md:grid-cols-12'. Placera children i auto-flow. Exportera FC<{children}>.
export default function WallLayout({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-16 md:grid-cols-12 auto-rows-auto">{children}</div>;
}
