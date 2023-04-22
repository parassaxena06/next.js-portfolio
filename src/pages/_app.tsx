import "@/scss/index.scss";
import {Raleway, Fira_Code } from "next/font/google";

const raleway = Raleway({subsets:["latin"]})
const fire_Code = Fira_Code({
  subsets:["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

import type { AppProps } from 'next/app'
export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <style jsx global>{`
  :root {
    --raileway: ${raleway.style.fontFamily};
    --fira-code: ${fire_Code.style.fontFamily};
  }`
  }</style>
  <Component {...pageProps} />
  </>
  );
}
