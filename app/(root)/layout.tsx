import Footer from "@/components/footer";
import Header from "@/components/ui/shared/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="flex h-screen flex-col">
        <Header />
          <main className="flex-1 wrapper">
            {children}
          </main>

          <Footer />
      </div>
  );
}