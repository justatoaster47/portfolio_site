import '@styles/globals.css';

export const metadata = {
  title: '',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='font-worksans'>
      <body> { children } </body>
    </html>
  )
}
