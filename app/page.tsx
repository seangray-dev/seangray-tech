import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Projects from "@/components/layout/Projects";
import Particles from "@/components/particles";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 pt-5">
      <Header />
      <Projects />
      <Footer />
    </main>
  );
}
