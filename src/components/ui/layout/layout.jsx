import Header from "@/components/departments/header/header";
import Sidebar from "@/components/departments/sidebar/sidebar";
import Navigation from "@/components/departments/navigation/navigation";
import HeroSection from "@/components/sections/hero-sections";
import AboutSection from "@/components/sections/about-section";
import ResumeSection from "@/components/sections/resume-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import ContactSection from "@/components/sections/contact-section";

export default function Layout() {
    return (
        <section className="h-full p-4 xl:p-8 relative z-10">
            <Header />
            <div className="h-full max-w-335 mx-auto">
                <div className="h-full grid grid-cols-12 gap-4 xl:gap-6">
                    <aside className="col-span-12 lg:col-span-3 glass p-6 overflow-scroll scrollbar-none hidden lg:block">
                        <Sidebar />
                    </aside>
                    <main className="col-span-12 lg:col-span-8 glass border px-8 md:px-16 overflow-scroll scrollbar-none">
                        <HeroSection />
                        <AboutSection />
                        <ResumeSection />
                        <PortfolioSection />
                        <ContactSection />
                    </main>
                    <nav className="col-span-12 lg:col-span-1 flex items-center justify-center glass py-2 lg:py-0">
                        <Navigation />
                    </nav>
                </div>
            </div>
        </section>
    );
};