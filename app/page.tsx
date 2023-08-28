import Header from "@/components/layout/Header";
import Projects from "@/components/layout/Projects";

export default function Home() {
  return (
    <main className="container flex flex-col gap-20 py-5">
      <Header />
      <Projects />
    </main>
  );
}
