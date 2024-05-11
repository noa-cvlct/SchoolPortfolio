import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

export const metadata: Metadata = {
  title: "Noa Cavalcante | Portfolio",
};

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={"font-mono scroll-smooth"}>
    <body>
    <Header/>
    <main className={"px-4 sm:px-12 md:px-48"}>
      {children}
    </main>
    <Footer/>
    </body>
    </html>
  );
}
