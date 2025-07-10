
import "./globals.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export const metadata = {
  title: "Ankur's portfolio",
  description: "Made by Ankur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
