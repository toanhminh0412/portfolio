import Header from "@/components/Header";
import Features from "@/components/Features";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="lg:pt-20">
            <Header/>
            <Features/>
            <Projects/>
            <Contact/>
            <Footer/>
        </main>
    );
}
