function Navbar() {
    return (
        <section className="w-full h-12 flex justify-center items-center bg-custom-radial text-slate-100 text-xl font-bold fixed top-0">
            <span className="max-sm:hidden">
                Hi 🙋‍♂️ thanks for stoping by send us a message📬{' '}
            </span>
            <span>
                <a href="https://wa.link/wlimfr"> WhatSapp</a>{' '}
                <a href="mailto:ronicksamuel@gmail.com">Email</a>{' '}
                <a href="https://www.linkedin.com/in/samuel-ronick-a4666a173/">
                    LinkedIn
                </a>{' '}
                <a href="https://github.com/sammy0055">Github</a>
            </span>
        </section>
    );
}

export default Navbar;
