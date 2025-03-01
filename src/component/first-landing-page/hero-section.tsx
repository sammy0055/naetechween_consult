import { BookBtn } from '../CTA';

// import heroImage from '../assets/Mysvg.svg';
function HeroSection() {
    return (
        <div className="w-full text-slate-100">
            <div className="font-sans mt-40 max-sm:mt-20 mb-10">
                <h1 className="text-4xl font-bold">Hello! 👋🏻</h1>
                <h1 className="mt-5 text-xl font-bold">
                    Optimize Your Platform, Solve Key Challenges ☀️
                </h1>
                <p className="text-zinc-400 mt-1 text-md">
                    We specialize in platform optimization and feature
                    expansion, delivering solutions that address your business’s
                    unique pain points and drive growth 💪
                </p>
                <div className="mt-12 flex justify-between max-sm:flex-col">
                    <h1 className=" text-xl font-bold">
                        Here’s what We bring to the table: 🤹‍♂️
                    </h1>
                    <span>
                        <BookBtn />
                    </span>
                </div>

                <ul className="text-zinc-400 mt-1 text-md text-justify">
                    <li className="mt-5">
                        <span className="font-bold">
                            Personalization and Client Engagement:
                        </span>
                        <span className="ml-1">
                            Many businesses struggle to engage customers
                            effectively. We solve this by integrating AI-driven
                            personalized solutions tailored to your industry.
                            Whether it’s recommending products in e-commerce,
                            matching patients with healthcare services, or
                            suggesting properties in real estate, our approach
                            boosts user engagement and helps convert more
                            visitors into loyal clients.
                        </span>
                    </li>
                    <li className="mt-3">
                        <span className="font-bold">
                            Easy Payment & Subscription Setup with Stripe:
                        </span>
                        <span className="ml-1">
                            We ensure your platform handles payments and
                            subscriptions seamlessly. Whether you’re offering
                            one-time purchases or recurring payments, we create
                            secure, user-friendly systems to make transactions
                            effortless for your clients.
                        </span>
                    </li>
                    <li className="mt-3">
                        <span className="font-bold">
                            Streamlined Automation for Efficiency:
                        </span>
                        <span className="ml-1">
                            We simplify your business operations with
                            automation. From reducing repetitive tasks to
                            improving workflow efficiency, we help you save time
                            and resources, letting you focus on growth.
                        </span>
                    </li>
                </ul>
                <p className="mt-5 font-bold">
                    🙋‍♂️ lets transform your ideas into powerful web solutions?
                    Let’s make it happen. 🤙🤳
                    <BookBtn />
                </p>
                <div className="mt-5 flex justify-between">
                    <h1 className=" text-xl font-bold">
                        Meet the founder 😁 😀{' '}
                    </h1>
                </div>

                <p className="text-zinc-400 mt-1 text-justify">
                    I’m Samuel, a seasoned AI and web development consultant
                    with over 5 years of experience helping businesses unlock
                    the full potential of their digital platforms. I started my
                    career as a full-stack developer, building high-performance
                    web applications and gradually shifted my focus to
                    AI-powered solutions and platform enhancements. My goal is
                    to make your platform smarter, faster, and more
                    efficient—helping you stay ahead in a competitive market
                    without the overhead of hiring an internal development team.
                </p>
                <a
                    href="https://ronicksamuel.netlify.app/"
                    className="underline mb-10"
                >
                    {' '}
                    my portfolio
                </a>
            </div>
        </div>
    );
}

export default HeroSection;
