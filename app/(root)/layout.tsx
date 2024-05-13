import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col bg-dotted-pattern bg-contain relative">
    <Header />
    <main className="flex-1 mt-24">{children}</main>
    <Footer />
  </div>
  );
}
