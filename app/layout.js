import "./globals.css";

export const metadata = {
  title: "Create 'Hello World' First NextJS App",
  description: "Programmed by Jay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
