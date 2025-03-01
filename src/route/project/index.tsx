import BackBtn from '../../component/CTA';
import Heading from '../../component/first-landing-page/heading';
import Project1 from '../../component/first-landing-page/kindroom-project';
import Navbar from '../../component/first-landing-page/navbar';

const Projects = () => {
    return (
        <main>
            <Navbar />
            <section className="mx-auto max-w-screen-md max-sm:mx-5">
                <BackBtn />
                <Heading />
                <Project1 />
            </section>
        </main>
    );
};

export default Projects;
