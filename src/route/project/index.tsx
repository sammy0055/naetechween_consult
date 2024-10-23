import BackBtn from '../../component/CTA';
import Heading from '../../component/heading';
import Project1 from '../../component/kindroom-project';
import Navbar from '../../component/navbar';

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
