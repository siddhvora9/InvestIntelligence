import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | SHC Growth Partners</title>
        <meta name="description" content="Read our privacy policy to understand how we collect, use, and protect your personal information." />
      </Helmet>
      <section className="py-20 min-h-screen bg-white flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
            <div className="h-2 w-full bg-gradient-to-r from-primary via-secondary to-accent rounded-t-2xl mb-8"></div>
            <div className="flex flex-col items-center mb-8">
              <h1 className="font-playfair font-bold text-4xl text-primary mb-2 text-center tracking-tight">Privacy Policy</h1>
              <p className="text-gray-500 text-center max-w-xl">Your privacy is important to us. Please read below to understand how we handle your information.</p>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p><strong>Startupholic Catalyst</strong> – Our startup community and incubator (“we”, “our”, “us”) understand the importance of privacy to our website visitors, startup members, and other stakeholders (“users”, “you”, “your”). This policy explains how we collect, use, protect and share the personal information that we collect through our website and our services.</p>
              <div className="border-t border-primary my-8"></div>
              <h2 className="font-playfair font-bold text-primary text-2xl mt-10 mb-2 tracking-tight">1. Personal Information We Collect</h2>
              <p>Personal information that you provide to us when you register or interact with our website or services. This may include your name, email address, phone number, address, company name, job title, and other information that you choose to provide.</p>
              <p>In addition, we may collect certain non-personally identifiable information about your use of our website or services, such as your IP address, browser type, and operating system.</p>
              <div className="border-t border-secondary my-8"></div>
              <h2 className="font-playfair font-bold text-primary text-2xl mt-10 mb-2 tracking-tight">2. Use of Personal Information</h2>
              <p>We use the personal information we collect to provide our services to you and to improve our website and services. This includes providing you with information about events, news, and other information related to our startup community and incubator.</p>
              <p>We may also use your personal information to analyze user behavior and preferences, and to improve our services and website.</p>
              <div className="border-t border-accent my-8"></div>
              <h2 className="font-playfair font-bold text-primary text-2xl mt-10 mb-2 tracking-tight">3. Sharing of Personal Information</h2>
              <p>We do not share your personal information with third parties, except as necessary to provide our services to you or as required by law.</p>
              <div className="border-t border-primary my-8"></div>
              <h2 className="font-playfair font-bold text-primary text-2xl mt-10 mb-2 tracking-tight">4. Security of Personal Information</h2>
              <p>We take reasonable measures to protect the personal information we collect from unauthorized access, disclosure, alteration, and destruction. However, no security measures are perfect or impenetrable, and we cannot guarantee the security of your personal information.</p>
              <div className="border-t border-secondary my-8"></div>
              <h2 className="font-playfair font-bold text-primary text-2xl mt-10 mb-2 tracking-tight">5. Privacy Choices</h2>
              <p>You have certain choices about how we use your personal information. You can choose not to receive marketing emails from us by following the instructions in any email you receive from us. Also, you can contact us using the contact information below to request access or corrections to your personal information.</p>
              <div className="border-t border-accent my-8"></div>
              <h2 className="font-playfair font-bold text-primary text-2xl mt-10 mb-2 tracking-tight">6. Changes to Policy</h2>
              <p>Startupholic Catalyst reserves the right to modify or update this policy at any time by posting a new version on our website. Your continued use of our website and services constitutes your acceptance of any changes.</p>
              <div className="border-t border-primary my-8"></div>
              <h2 className="font-playfair font-bold text-primary text-2xl mt-10 mb-2 tracking-tight">7. Contact Us</h2>
              <p>If you have any questions about this policy, please contact us at <a href="mailto:info@startupholiccatalyst.co">info@startupholiccatalyst.co</a></p>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
} 