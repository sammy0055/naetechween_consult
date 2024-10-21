import Heading from './component/heading';
import HeroSection from './component/hero-section';
import Navbar from './component/navbar';

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
