export default function RootLayout({
  children,
}: {
  children: any;
}) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
