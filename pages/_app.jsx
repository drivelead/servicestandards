import localFont from "next/font/local";
import "../styles/globals.css";

const deadexPro = localFont({
  src: "../lib/fonts/readexpro/deadexpro.ttf",
  variable: "--font-readex-pro",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${deadexPro.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
