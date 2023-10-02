import "./globals.css";
import { Providers } from "../../components/providers";
import Header from "../../components/hearder";
import Footer from "../../components/footer";

export const metadata = {
  title: "NEXT.js Template",
  description: "Created by Chris Kim",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body>
        {" "}
        <Providers>
          <div className="bg-primary">
            <Header />
            <main className="grow py-3">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
