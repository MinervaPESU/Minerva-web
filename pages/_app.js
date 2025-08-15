import "@/styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import localFont from "next/font/local";
const gilroy = localFont({
  src: [
    { path: "../public/fonts/Gilroy-Medium.ttf", weight: "500" },
    { path: "../public/fonts/Gilroy-SemiBold.ttf", weight: "600" },
    { path: "../public/fonts/Gilroy-Black.ttf", weight: "700" },
  ],
  variable: "--font-gilroy",
});

const georgia = localFont({
  src: [
    {
      path: "../public/fonts/GeorgiaPro-CondRegular.ttf",
      weight: "500",
    },
    { path: "../public/fonts/GeorgiaPro-SemiBold.ttf", weight: "600" },
    { path: "../public/fonts/GeorgiaPro-CondBold.ttf", weight: "700" },
  ],
  variable: "--font-georgia",
});
export default function App({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        variants={{
          hidden: { opacity: 0 },
          enter: { opacity: 1 },
          exit: { opacity: 0 },
        }} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: "linear", duration: 0.75 }} // Set the transition to linear
        className={`${gilroy.variable} ${georgia.variable}`}
      >
        <CssVarsProvider
          theme={extendTheme({
            typography: { fontFamily: `${georgia.variable}` },
          })}
        >
          <Component {...pageProps} />
          <Analytics />
        </CssVarsProvider>
      </motion.div>
    </AnimatePresence>
  );
}
