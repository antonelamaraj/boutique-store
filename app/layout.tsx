import type { Metadata } from "next";
import { Inter} from "next/font/google";
import '@/assets/styles/global.css';
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";
import { ThemeProvider } from "next-themes";


const inter = Inter({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: `${APP_NAME}`,
  description: `${APP_DESCRIPTION}`,
  metadataBase: new URL(SERVER_URL)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body

        // ${inter.className} →  Applies the Inter font to the entire page.
        //antialiased → A Tailwind CSS class that improves font smoothing.
        className={`${inter.className} antialiased`}>
          <ThemeProvider 
            attribute='class'  // shton dark class/mode ne root element=> html or body
            defaultTheme="light" // by default eshte light
            enableSystem
            disableTransitionOnChange
          >
          {children}
          </ThemeProvider>
        
      </body>
    </html>
  );
}
