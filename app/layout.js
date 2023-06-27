import './globals.css'


export const metadata = {
  title: 'Kilo Takip Uygulaması',
  description: 'Kilonuzu bu uygulamayla takip edebilirsiniz!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
