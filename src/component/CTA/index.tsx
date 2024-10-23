import { useNavigate } from 'react-router-dom';

const BackBtn = () => {
    const navigate = useNavigate();
    return (
        <button
            onClick={() => navigate('/')}
            className="bg-gray-800 mt-16 text-gray-300 font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-700 transition duration-200"
        >
            Back
        </button>
    );
};

export default BackBtn;

export const BookBtn = () => {
    return (
        <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200">
            <a href="https://calendly.com/ronicksamuel/naetechween-client-consultation">Book a Call</a>
        </button>
    );
};
