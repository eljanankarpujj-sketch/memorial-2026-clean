export const metadata = {
  title: "Día de memoria 2026 | יום הזיכרון 2026",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he">
      <body>{children}</body>
    </html>
  );
}
