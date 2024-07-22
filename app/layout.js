// app/layout.js
import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="nav">
          <div className="container1">
            <h1 id="title">Portfolio</h1>
          </div>

          <div className="nav-links">
            <Link href="/" className="shine">Home</Link>
            <Link href="/about" className="shine">About</Link>
            <Link href="/skills" className="shine">Skills</Link>
            <Link href="/contact" className="shine">Contact</Link>
          </div>
          <div className="burger" id="burger">
            &#9776;
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
