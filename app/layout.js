import '@styles/globals.css';

export const metadata = {
  title: '',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='flex-wrap font-worksans text-textcolor bg-background '>
      <body> { children } </body>
    </html>
  )
}

