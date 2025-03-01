const Project1 = () => {
    return (
        <div className="mt-16 w-full text-slate-100 text-justify">
            <div className="flex justify-between align-middle max-sm:flex-col">
                <h1 className="text-lg font-bold">
                    Kindroom - A Skill-Based Approach to Affordable Housing
                </h1>
                <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200">
                    <a href="https://kindroom.com/">Check it out</a>
                </button>
            </div>

            <p className="mt-4">
                Kindroom is a platform that allows tenants to exchange their
                skills for accommodation instead of paying traditional rent. My
                role involved building seamless booking experience with a focus
                on performance optimization, security, and user experience.
            </p>
            <ul className="mt-4 ml-5">
                <li className="mt-1">
                    <strong>Easy Booking</strong>: I created a simple and
                    user-friendly interface that made it super easy for users to
                    book their stay, leading to more sign-ups and happy tenants.
                </li>
                <li className="mt-1">
                    <strong>Fast Performance</strong>: I optimized the system to
                    load quickly, which kept users engaged and coming back for
                    more.
                </li>
                <li className="mt-1">
                    <strong>Strong Security</strong>: I added secure payment
                    options and authentication, helping to build trust with
                    users and keep things safe from fraud.
                </li>
                <li className="mt-1">
                    <strong>Great User Experience</strong>: By focusing on what
                    users want, we saw a boost in successful bookings and tons
                    of positive feedback.
                </li>
            </ul>
            <p className="mt-5 mb-5">
                Overall, Kindroom didn’t just help tenants find places to stay;
                it built a community where skills matter and helped the business
                grow
            </p>
        </div>
    );
};

export default Project1;
