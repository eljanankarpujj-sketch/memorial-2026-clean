export const metadata = {
  title: "Día de memoria 2026 | יום הזיכרון 2026",
  description: "Memorial candle page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
