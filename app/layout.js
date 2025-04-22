import './globals.css'

export const metadata = {
  title: {
    default: 'Shin Jie - Software Engineer',
    template: '%s | Shin Jie'
  },
  description: 'Tan Shin Jie - Software Engineer based in Singapore building modern web applications',
  keywords: ['Software Engineer', 'Web Developer', 'Frontend Developer', 'Singapore', 'Tan Shin Jie'],
  authors: [{ name: 'Tan Shin Jie' }],
  creator: 'Tan Shin Jie',
  icons: {
    icon: [
      { url: '/images/shinjie.jpg' }
    ],
    apple: [
      { url: '/images/shinjie.jpg' }
    ]
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tanshinjie.com',
    siteName: 'Tan Shin Jie',
    title: 'Shin Jie - Software Engineer',
    description: 'Tan Shin Jie - Software Engineer based in Singapore building modern web applications',
    images: [
      {
        url: '/images/shinjie.jpg',
        width: 800,
        height: 800,
        alt: 'Tan Shin Jie'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shin Jie - Software Engineer',
    description: 'Tan Shin Jie - Software Engineer based in Singapore building modern web applications',
    images: ['/images/shinjie.jpg']
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer className="text-center text-sm opacity-50 my-5">
          © 2020-{new Date().getFullYear()} Tan Shin Jie. Site built with ❤️ by yours truly.
        </footer>
      </body>
    </html>
  )
} 