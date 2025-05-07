import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const PrivacyPolicy = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 md:px-8">
      <h1 className="text-3xl font-bold text-teachGrow-primary mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: May 6, {currentYear}</p>

      <div className="prose prose-gray max-w-none">
        <p className="mb-6">
          This Privacy Policy describes how Learn X, operated by Cybexonics IT Consultants ("we," "us," or "our"),
          collects, uses, and shares information about you when you register and use our online teaching platform.
          By registering on Learn X, you agree to the collection and use of information in accordance with this policy.
        </p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="data-collection">
            <AccordionTrigger className="text-xl font-semibold">Data Collection</AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-3">
              <p>We collect the following personal information when you register as a teacher:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full name and professional identity</li>
                <li>Email address and phone number</li>
                <li>Educational qualifications and teaching experience</li>
                <li>Subject expertise and teaching preferences</li>
                <li>Profile photo and optional teaching demo videos</li>
                <li>Bank account or UPI details for payment processing</li>
                <li>Teaching content, including videos, documents, and other materials you upload</li>
                <li>Communications between you, students, and our platform</li>
              </ul>
              <p>
                Additionally, we automatically collect certain information about your device,
                including IP address, browser type, referring/exit pages, operating system,
                date/time stamps, and clickstream data.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="use-of-information">
            <AccordionTrigger className="text-xl font-semibold">Use of Information</AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-3">
              <p>We use the collected information for various purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To verify your identity and create your teacher profile</li>
                <li>To facilitate payments between you and students</li>
                <li>To maintain and improve our platform&apos;s functionality</li>
                <li>To provide customer support and respond to inquiries</li>
                <li>To analyze usage patterns and optimize user experience</li>
                <li>To communicate updates, promotional offers, and relevant information</li>
                <li>To comply with legal obligations and resolve disputes</li>
              </ul>
              <p>
                We do not sell or share your personal information with third parties for marketing purposes.
                We may share your information with trusted service providers who assist us in operating our platform,
                conducting business, or servicing you, provided they agree to keep this information confidential.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="cookies">
            <AccordionTrigger className="text-xl font-semibold">Cookies and Tracking Technologies</AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-3">
              <p>
                We use cookies and similar tracking technologies to track activity on our platform and
                hold certain information. Cookies are files with a small amount of data which may include
                an anonymous unique identifier.
              </p>
              <p>
                These technologies are used to maintain your session, remember your preferences,
                analyze how you use the platform, and customize content based on your interests.
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
              <p>
                We use both session cookies (which expire once you close your web browser)
                and persistent cookies (which stay on your device until you delete them).
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="security">
            <AccordionTrigger className="text-xl font-semibold">Data Security</AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-3">
              <p>
                The security of your personal information is important to us. We implement appropriate
                security measures to protect against unauthorized access, alteration, disclosure,
                or destruction of your information.
              </p>
              <p>
                We use industry-standard encryption protocols to secure data transmission. However,
                no method of transmission over the Internet or electronic storage is 100% secure.
                While we strive to use commercially acceptable means to protect your personal information,
                we cannot guarantee its absolute security.
              </p>
              <p>
                It is your responsibility to maintain the confidentiality of your account credentials
                and to notify us immediately of any unauthorized use of your account.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="payment-terms">
            <AccordionTrigger className="text-xl font-semibold">Payment Terms</AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-3">
              <p>
                By registering on Learn X, you agree to pay a non-refundable annual fee of ₹999.
                This fee covers your access to our teaching platform and associated services for one year.
              </p>
              <p>
                For each student who subscribes to your courses or teaching services, Learn X will retain
                a 10% commission fee. The remaining 90% will be transferred to your designated bank account
                or UPI ID.
              </p>
              <p>
                Payment processing is handled through secure third-party payment processors.
                Your payment information is not stored on our servers but is processed directly
                by our payment processing partners in accordance with industry standards.
              </p>
              <p>
                Payments to teachers are processed every 15 days. Any taxes applicable as per
                Indian taxation laws will be your responsibility.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="data-retention">
            <AccordionTrigger className="text-xl font-semibold">Data Retention</AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-3">
              <p>
                We will retain your personal information for as long as your account is active or as needed
                to provide services to you. We will also retain and use your information as necessary to
                comply with our legal obligations, resolve disputes, and enforce our agreements.
              </p>
              <p>
                If you delete your account, we may still retain certain information for analytical purposes
                and record-keeping integrity, as well as to prevent fraud, enforce our terms and conditions,
                or take other actions permitted by law.
              </p>
              <p>
                Teaching content that has been shared with students may continue to be accessible to those
                students even after you delete your account, depending on the nature of the content and
                subscription agreements.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="user-rights">
            <AccordionTrigger className="text-xl font-semibold">Your Rights</AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-3">
              <p>
                You have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access and review your personal information</li>
                <li>The right to correct inaccurate or incomplete information</li>
                <li>The right to request deletion of your personal information (subject to certain exceptions)</li>
                <li>The right to object to or restrict certain processing activities</li>
                <li>The right to data portability in a structured, commonly used format</li>
                <li>The right to withdraw consent for future processing</li>
              </ul>
              <p>
                To exercise these rights, please contact us at applearnx@gmail.com. We will respond to your
                request within a reasonable timeframe and in accordance with applicable data protection laws.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="changes">
            <AccordionTrigger className="text-xl font-semibold">Changes to This Policy</AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-3">
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by
                posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this
                Privacy Policy are effective when they are posted on this page.
              </p>
              <p>
                Your continued use of the platform after we post any modifications to the Privacy Policy will
                constitute your acknowledgment of the modifications and your consent to abide and be bound
                by the modified Privacy Policy.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="contact">
            <AccordionTrigger className="text-xl font-semibold">Contact Us</AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-3">
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="font-medium">
                Learn X<br />
                Operated by Cybexonics IT Consultants<br />
                Email: applearnx@gmail.com<br />
                Phone: +91 9604902393
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-10 p-4 bg-gray-50 rounded-md border border-gray-200">
          <p className="text-sm text-gray-600">
            By registering on the Learn X platform, you acknowledge that you have read and understood this Privacy Policy
            and agree to its terms. If you do not agree with this policy, please do not register or use our services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
