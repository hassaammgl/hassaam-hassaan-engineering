import "../../styles/_utils.scss";

export const metadata = {
  title: "Hassaam Hassaan Engineering",
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
