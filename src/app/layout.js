import "@/app/globals.css";
import AppNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
        <Providers>
          <div className="flex flex-col min-h-screen">
            <AppNavbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}