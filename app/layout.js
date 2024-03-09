import { Inter } from "next/font/google"
import "./globals.css";
import localFont from "next/font/local";
import Header from "./header";
import Footer from "./footer"


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
  description: "TS Synergy Consultancy Service Limited is a leading provider of financial consultancy services, dedicated to helping individuals and businesses achieve their financial goals. Explore our tailored solutions driven by integrity and excellence, empowering individuals and businesses to navigate finance with confidence. Our mission is to deliver unparalleled value to our clients by providing comprehensive financial consultancy services tailored to their unique needs and objectives. Our core values of excellence, integrity, innovation, collaboration, and client-centricity drive everything we do, setting the standard for excellence in the financial consultancy industry.",
  keywords: "TS Synergy, Synergy Consultancy, financial consultancy, financial services, integrity, excellence, innovation, collaboration, client-centricity",
  author: "Ayomide Wayne",
  canonicalUrl: "http://www.tssynergyconsult.com/",
  ogTitle: "TS Synergy Consultancy Service Limited",
  ogDescription: "TS Synergy Consultancy Service Limited is a leading provider of financial consultancy services, dedicated to helping individuals and businesses achieve their financial goals. Explore our tailored solutions driven by integrity and excellence, empowering individuals and businesses to navigate finance with confidence. Our mission is to deliver unparalleled value to our clients by providing comprehensive financial consultancy services tailored to their unique needs and objectives. Our core values of excellence, integrity, innovation, collaboration, and client-centricity drive everything we do, setting the standard for excellence in the financial consultancy industry.",
  ogUrl: "http://www.tssynergyconsult.com/",
  ogImage: "https://www.example.com/image.jpg",
  twitterSite: "@tssynergy",
  type: "website",
  charset: "UTF-8"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={blackerSansPro.className}>
        <Header/>
        {children}
        <Footer/></body>
    </html>
  );
}
