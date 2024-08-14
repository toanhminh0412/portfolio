import Header from "@/components/Header";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <Header/>
            <Services/>
            <Features/>
            <Projects/>
            <Contact/>
            <Footer/>
        </main>
    );
}
