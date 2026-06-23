import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';

const PrivacyPolicy = () => {
    useSEO({
        title: 'Privacy Policy | Z-Co Development',
        description: "Read Z-Co Development's privacy policy regarding data collection, usage, and security for our integrated real estate development platform."
    });

    return (
        <div className="pt-32 pb-20 lg:pt-48 lg:pb-36 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-12"
            >
                <div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink mb-8">
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-mid font-light leading-relaxed">
                        Last updated: March 2024
                    </p>
                </div>

                <div className="prose prose-invert prose-lg max-w-none text-ink">
                    <p>
                        At Z-Co Development Group, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us through our website.
                    </p>

                    <h2 className="text-2xl font-bold text-ink mt-12 mb-6">Information We Collect</h2>
                    <p>
                        We may collect personal information such as your name, email address, phone number, and any other details you voluntarily provide when submitting inquiries, subscribing to our newsletter, or requesting investor access packets.
                    </p>

                    <h2 className="text-2xl font-bold text-ink mt-12 mb-6">How We Use Your Information</h2>
                    <p>
                        The information we collect is used to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 my-6">
                        <li>Respond to your inquiries and provide customer support</li>
                        <li>Send you relevant updates, newsletters, and marketing communications</li>
                        <li>Process investor access requests and evaluate potential partnerships</li>
                        <li>Improve our website, services, and user experience</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-ink mt-12 mb-6">Data Security</h2>
                    <p>
                        We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
                    </p>

                    <h2 className="text-2xl font-bold text-ink mt-12 mb-6">Third-Party Disclosure</h2>
                    <p>
                        We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except as required by law or to trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
                    </p>

                    <h2 className="text-2xl font-bold text-ink mt-12 mb-6">Changes to This Policy</h2>
                    <p>
                        We reserve the right to update or modify this Privacy Policy at any time. Any changes will be reflected on this page with an updated revision date.
                    </p>

                    <h2 className="text-2xl font-bold text-ink mt-12 mb-6">Contact Us</h2>
                    <p>
                        If you have any questions or concerns regarding this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
