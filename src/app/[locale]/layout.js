import { NextIntlClientProvider, useLocale } from "next-intl";

import OrbitPrimary from "@/components/ui/orbits/orbit-primary";
import OrbitSecondary from "@/components/ui/orbits/orbit-secondary";
import OrbitVignette from "@/components/ui/orbits/orbit-vignette";

import { getTranslations } from "next-intl/server";

import "../globals.css";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    authors: [{ name: t("author") }],
    keywords: t.raw("keywords"),
    metadataBase: new URL("https://javadrafiei.ir"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://javadrafiei.ir",
      siteName: t("author"),
      type: "website",
      locale: locale === "fa" ? "fa_IR" : "en_US",
    },
  };
}

export default function RootLayout({ children }) {
  const locale = useLocale();

  return (
    <html lang={locale} dir={locale === "en" ? "ltr" : "rtl"}>
      <body className="h-dvh">
        <OrbitPrimary />
        <OrbitSecondary />
        <OrbitVignette />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
