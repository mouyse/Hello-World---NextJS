import "./globals.css";

export const metadata = {
  title: "Hello NextJS",
  description: "Programmed by Jay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
