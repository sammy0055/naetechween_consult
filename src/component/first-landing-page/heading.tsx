import { Link } from 'react-router-dom';
function Heading() {
    return (
        <div className="mt-16 text-xl font-bold text-slate-100 flex justify-between">
            <div className="flex">
                <img src="/logo.jpg" alt="logo" className="w-7" />{' '}
                <span className="ml-2">Naetechween</span>
            </div>
            <Link to={'/projects'} className="underline">
                Our Work
            </Link>
        </div>
    );
}

export default Heading;
