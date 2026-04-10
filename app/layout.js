import { Nunito, Comfortaa } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromoBanner from "@/components/PromoBanner";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://slavniymaliy.ru"),
  title: {
    default: "Славный Малый — частный детский сад в Приморском районе СПб",
    template: "%s | Славный Малый",
  },
  description:
    "Частный детский сад и центр развития «Славный Малый» в Приморском районе Санкт-Петербурга. Бесплатный пробный день, работа в субботу, группы от 1,5 до 7 лет. ул. Парашютная 23.",
  keywords: [
    "частный детский сад",
    "детский сад Приморский район",
    "детский сад СПб",
    "центр развития ребенка",
    "ясли Приморский район",
    "детский сад Парашютная",
    "Славный Малый",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://slavniymaliy.ru",
    siteName: "Славный Малый",
    title: "Славный Малый — частный детский сад в Приморском районе СПб",
    description:
      "Запишитесь на бесплатный пробный день! Частный детский сад с группами от 1,5 до 7 лет. Работаем в субботу.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://slavniymaliy.ru",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${nunito.variable} ${comfortaa.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ChildCare",
              name: "Славный Малый",
              description:
                "Частный детский сад и центр развития в Приморском районе СПб",
              url: "https://slavniymaliy.ru",
              telephone: "+79500383731",
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "ул. Парашютная, д. 23, к. 1",
                  addressLocality: "Санкт-Петербург",
                  addressRegion: "Санкт-Петербург",
                  postalCode: "197348",
                  addressCountry: "RU",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "ул. Парашютная, д. 23, к. 2",
                  addressLocality: "Санкт-Петербург",
                  addressRegion: "Санкт-Петербург",
                  postalCode: "197348",
                  addressCountry: "RU",
                },
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "08:00",
                  closes: "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              priceRange: "₽₽",
              areaServed: {
                "@type": "City",
                name: "Санкт-Петербург",
              },
            }),
          }}
        />
      </head>
      <body>
        <PromoBanner />
        <Header />
        <main>{children}</main>
        <Footer />
        <ThemeSwitcher />
      </body>
    </html>
  );
}
