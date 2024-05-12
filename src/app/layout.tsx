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
    <main className={"px-8 md:px-24 xl:px-48 2xl:px-96"}>
      {children}
    </main>
    <Footer/>
    </body>
    </html>
  );
}
