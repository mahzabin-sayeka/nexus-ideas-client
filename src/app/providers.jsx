



// 'use client'

// export function Providers({ children }) {
//   return (
//     <>
//       {children}
//     </>
//   );
// }


'use client'
import { ThemeProvider } from 'next-themes'

export function Providers({ children }) {
  return <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    {children}
  </ThemeProvider>
}