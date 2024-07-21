import Header from "@/components/Header";
import Features from "@/components/Features";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <Header/>
            <Features/>
            <Projects/>
            <Contact/>
            <iframe src="https://www.easierform.com/viewform/getaquotedemo" width="100%" height="1000px" frameBorder="0"></iframe>
            <Footer/>
        </main>
    );
}
