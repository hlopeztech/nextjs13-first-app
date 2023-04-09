// import './globals.css'
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "My First Next.js App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <head>
          <link
            rel="stylesheet"
            href="https://bootswatch.com/5/flatly/bootstrap.min.css"
          />
        </head>
        <Navigation />
        <div className="container p-4">{children}</div>
      </body>
    </html>
  );
}
