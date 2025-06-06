export const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 bg-white shadow-lg rounded-lg mt-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Privacy Policy
            </h1>
            <p className="text-sm text-gray-500 mb-6">
                Last Updated: <span className="font-semibold">04/06/2025</span>
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">
                1. Introduction
            </h2>
            <p className="mt-2 text-gray-700">
                Welcome to <strong>Naetechween</strong>. This Privacy Policy
                explains how we collect, use, and protect information when you
                use our app, which interacts with Facebook Pages to retrieve
                public metadata such as Page IDs.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">
                2. Information We Collect
            </h2>
            <p className="mt-2 text-gray-700">
                We only collect <strong>publicly available data</strong> from
                Facebook Pages, such as:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Page ID</li>
                <li>Page Name (if applicable)</li>
                <li>Other public metadata permitted by Meta's APIs</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">
                3. How We Use Your Information
            </h2>
            <p className="mt-2 text-gray-700">
                The collected public data is used solely for:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>
                    Displaying public Facebook Page metadata within our app.
                </li>
                <li>
                    Enhancing the user experience by providing relevant business
                    information.
                </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">
                4. Data Sharing and Disclosure
            </h2>
            <p className="mt-2 text-gray-700">
                We do <strong>not</strong> share collected data with third
                parties except in the following cases:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>
                    <strong>Legal Requirements:</strong> If required by law or
                    government authorities.
                </li>
                <li>
                    <strong>Service Providers:</strong> If we use third-party
                    services (e.g., hosting, analytics), they may process public
                    metadata on our behalf.
                </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">
                5. Data Security
            </h2>
            <p className="mt-2 text-gray-700">
                We take reasonable steps to protect the data collected through
                our app, including:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Secure API requests.</li>
                <li>Access control measures to prevent unauthorized use.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">
                6. User Rights & Data Access
            </h2>
            <p className="mt-2 text-gray-700">
                Since we only collect public metadata, there is no private user
                data to modify or delete. However, if Facebook updates its
                policies or a Page owner removes their content, our app will
                reflect those changes.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">
                7. Changes to This Privacy Policy
            </h2>
            <p className="mt-2 text-gray-700">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with a revised{' '}
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6">
                8. Contact Us
            </h2>
            <p className="mt-2 text-gray-700">
                If you have any questions about this Privacy Policy, you can
                contact us at:
            </p>
            <p className="mt-2 text-gray-700">
                📧 <strong>ronicksamuel@gmail.com</strong>
            </p>
            <p className="mt-2 text-gray-700">
                🌐{' '}
                <a href="htts://naetechween.netlify.app" className="text-blue-500 hover:underline">
                    naetechween
                </a>
            </p>
        </div>
    );
};
