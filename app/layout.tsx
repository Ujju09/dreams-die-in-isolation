import "./global.css";


export const metadata = {
  title: 'Dreams',
  description: 'Dreams die in isolation. Share your dreams and someone will help you.',
  openGraph: {
    title: 'Dreams',
    description: 'Dreams die in isolation. Share your dreams and someone will help you.',
  
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>    
        {children}
        
        </body>
    </html>
  )
}
