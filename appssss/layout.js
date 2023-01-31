import '../styles/globals.css'
import Header from './Header'


export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
     
        <main>
          
          <div className="">{children}</div>
        </main>
       
      </body>
    </html>
  )
}
