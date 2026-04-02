import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';

const TermsOfService = () => {
    useSEO({
        title: 'Terms of Service | Z-Co Development',
        description: "Understand the terms and conditions for using Z-Co Development's website and real estate investment platform services."
    });

    return (
        <div className="pt-32 pb-20 lg:pt-48 lg:pb-36 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-12"
            >
                <div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8">
                        Terms of Service
                    </h1>
                    <p className="text-xl text-slate-400 font-light leading-relaxed">
                        Last updated: March 2024
                    </p>
                </div>

                <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                    <p>
                        Welcome to Z-Co Development Group. By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully before using our platform.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. Acceptance of Terms</h2>
                    <p>
                        By accessing this website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website or services.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. Use of Services</h2>
                    <p>
                        Our website and its content are provided for informational purposes only. You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. Intellectual Property Rights</h2>
                    <p>
                        The content, layout, design, data, databases, and graphics on this website are protected by United States and international intellectual property laws and are owned by Z-Co Development Group. Unless expressly permitted in writing, you may not copy, distribute, or otherwise use these materials.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. Limitation of Liability</h2>
                    <p>
                        Z-Co Development Group provides the website and its contents on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied, regarding the operation of this website or the information, content, materials, or products included on it. Under no circumstances shall Z-Co Development Group be liable for any direct, indirect, incidental, punitive, or consequential damages arising from the use of this website.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">5. Forward-Looking Statements</h2>
                    <p>
                        Our website may contain forward-looking statements regarding future events or the future financial performance of the company. These statements are only predictions and actual events or results may differ materially. Nothing on this website should be construed as an offer to sell or the solicitation of an offer to purchase any security or investment product.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">6. Modifications to Terms</h2>
                    <p>
                        We reserve the right to revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these Terms of Service.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">7. Governing Law</h2>
                    <p>
                        These terms and conditions are governed by and construed in accordance with the laws of the State of Texas, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">Contact Us</h2>
                    <p>
                        If you have any questions or concerns regarding these Terms of Service, please contact us at:
                        <br />
                        <br />
                        <strong>Email:</strong> info@z-co.info<br />
                        <strong>Address:</strong> Houston, TX
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default TermsOfService;
