import '@styles/globals.css';

export const metadata = {
  title: '',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='font-worksans text-textcolor bg-background flex-wrap'>
      <body> { children } </body>
    </html>
  )
}

