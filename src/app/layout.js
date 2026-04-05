import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from '@/components/ui/topbarmenu';
import { Button } from '@/components/ui/button';
import Feed from '@/components/ui/feed';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Meu Projeto",
  description: "Layout com Menu e Botões fixos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="h-full">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          min-h-screen 
          bg-slate-50
        `}
      >
        {/* O Menu Superior agora é fixo para todas as páginas */}
        <TopBar />
        <Feed />

        <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full">
          {/* Cabeçalho fixo no layout */}
          <header>
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Esboço
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Este cabeçalho e os botões agora fazem parte do Layout global.
            </p>
          </header>

          {/* Botões fixos no layout */}
          <div className="mt-8 flex gap-4">
            <Button>Button 1</Button>
            <Button variant="outline">Button 2</Button>
          </div>

          {/* O conteúdo específico de cada página (page.js) entrará aqui */}
          <div className="mt-12">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}