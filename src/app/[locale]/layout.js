import localFont from "next/font/local";
import "../globals.css";




import { getMessages } from 'next-intl/server';
import {NextIntlClientProvider} from "next-intl"
import Navbar from "../../components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "KOCHEN",
  description: "Internationale Kochprojekt",
};



export default async function RootLayout  ({ children, params }) {
   const {locale} = await params;
  
  const messages = await getMessages();
  // if(!locale || !messages[locale]) notFound();
  

  return (
    
    <html lang={locale} className="!scroll-smooth" >
      <body
        className={`mx-auto max-w-[75rem] px-[1rem] 2xl:px-0  ${geistSans.variable} ${geistMono.variable} antialiased`}
        // className="font-[Montserrat]"
      >
      <NextIntlClientProvider timeZone="Europe/Vienna"  locale={locale} messages={messages} >
        <Navbar/>
        {children}
        <Footer/>
      </NextIntlClientProvider>
      </body>
    </html>
  );
}
