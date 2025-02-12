import { HeroSection } from '../../component/aiAgent/heroSection';
import { HowItWorks } from '../../component/aiAgent/how_it_works';
import { PainPoints } from '../../component/aiAgent/pain_points';
import { AssistantSection } from '../../component/aiAgent/assistants';
import { IntegrationSection } from '../../component/aiAgent/integration_section';
import { Booking } from '../../component/aiAgent/booking';
import { Footer } from '../../component/aiAgent/footer';
import { Testimonials } from '../../component/aiAgent/testimonySection';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-gray-100 font-inter">
            {/* Hero Section */}
            <HeroSection />

            {/* Pain Points Section */}
            <PainPoints />

            {/* How It Works Section */}
            <HowItWorks />

            {/* AI Assistants Section */}
            <AssistantSection />

            {/* Integrations Section */}
            <IntegrationSection />

            {/* Testimonials Section */}
            <Testimonials />
            {/* Final CTA Section */}
            <Booking />

            {/* Footer */}
            <Footer />
        </div>
    );
}
