import "@/app/globals.css";
import AppNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import { Toaster } from 'react-hot-toast'; // Toaster ইম্পোর্ট

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
        <Providers>
          <Toaster position="top-right" reverseOrder={false} /> {/* Toaster কম্পোনেন্ট */}
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