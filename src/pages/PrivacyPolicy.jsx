import './Page.css'

function PrivacyPolicy() {
  return (
    <div className="page-container">
      <h1>Privacy Policy</h1>
      <div className="page-content">
        <p className="last-updated">Last updated: November 18, 2024</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to Garden of Eden. We respect your privacy and are committed to protecting your personal data.
            This privacy policy will inform you about how we look after your personal data and tell you about your
            privacy rights and how the law protects you.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you:</p>
          <ul>
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier</li>
            <li><strong>Contact Data:</strong> includes email address and telephone numbers</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version,
            time zone setting and location, browser plug-in types and versions, operating system and platform</li>
            <li><strong>Usage Data:</strong> includes information about how you use our website and services</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use your personal data for the following purposes:</p>
          <ul>
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information to improve our service</li>
            <li>To monitor the usage of our service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Security</h2>
          <p>
            We have implemented appropriate security measures to prevent your personal data from being accidentally
            lost, used or accessed in an unauthorized way, altered or disclosed. We limit access to your personal
            data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>
        </section>

        <section>
          <h2>5. Your Legal Rights</h2>
          <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
          <ul>
            <li>Request access to your personal data</li>
            <li>Request correction of your personal data</li>
            <li>Request erasure of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
            <li>Request transfer of your personal data</li>
            <li>Right to withdraw consent</li>
          </ul>
        </section>

        <section>
          <h2>6. Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our service and hold certain information.
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </section>

        <section>
          <h2>7. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
            new Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section>
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@gardenofeden.com
          </p>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicy
