import About from "@/components/layout/About";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Projects from "@/components/layout/Projects";
import Skills from "@/components/layout/Skills";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 pt-5">
      <Header />
      <Skills />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
