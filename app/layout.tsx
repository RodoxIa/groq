export const metadata = {
  title: "Groq Chat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body style={{ fontFamily: "system-ui" }}>{children}</body>
    </html>
  );
}
