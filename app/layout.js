import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Header from "./header";
import Footer from "./footer"
import logo from "@/public/logo.png"
import Head from "next/head";
import Script from 'next/script'



const inter = Inter({ subsets: ["latin"] });

const blackerSansPro = localFont({
  src: [
    {
      path: "../public/fonts/BlackerSansPro-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/BlackerSansPro-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/BlackerSansPro-Book.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/BlackerSansPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/BlackerSansPro-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/BlackerSansPro-Bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/BlackerSansPro-Extrabold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/BlackerSansPro-Heavy.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/BlackerSansPro-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "TS Synergy Consultancy Service Limited",
  description: "Leading provider of financial consultancy services. Empowering individuals and businesses with tailored solutions. Excellence, integrity, innovation.",
  keywords: "TS Synergy, Synergy Consultancy, financial consultancy, financial services, integrity, excellence, innovation, collaboration, client-centricity, financial advisors in nigeria, ",
  author: "Ayomide Wayne",
  openGraph: {
    title: "TS Synergy Consultancy Service Limited",
    description: "Leading provider of financial consultancy services. Empowering individuals and businesses with tailored solutions. Excellence, integrity, innovation.",
    url: "http://www.tssynergyconsult.com/",
    siteName: "Ts Synergy",
    locale: "en-US",
    type: "website",
    image: logo ,
  },
  canonicalUrl: "http://www.tssynergyconsult.com/",
  type: "website",
  charset: "UTF-8"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      
<Script async src="https://www.googletagmanager.com/gtag/js?id=G-XV4686VJCG"></Script>
<Script id="ga"
 dangerouslySetInnerHTML={{
  __html:`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XV4686VJCG');`
 }}
/>
      
      <body className={blackerSansPro.className}>
        <Header/>
        {children}
        <Footer/></body>
    </html>
  );
}
