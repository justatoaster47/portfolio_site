import '@styles/globals.css';
import Nav from '@components/Nav';

export const metadata = {
  title: '',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body> { children } </body>
    </html>
  )
}
