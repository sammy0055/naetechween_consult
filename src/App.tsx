import Heading from './component/first-landing-page/heading';
import HeroSection from './component/first-landing-page/hero-section';
import Navbar from './component/first-landing-page/navbar';

function App() {
    return (
        <main className="">
            <Navbar />
            <section className="mx-auto max-w-screen-md max-sm:mx-5">
                <Heading />
                <HeroSection />
            </section>
        </main>
    );
}

export default App;
