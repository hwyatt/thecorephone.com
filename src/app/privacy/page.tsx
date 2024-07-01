// Import Tailwind CSS classes
import React from "react";

export default function Privacy() {
  return (
    <div className="p-6 text-gray-800 main-bg min-h-screen">
      <h1 className="text-3xl font-semibold text-brand mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Your privacy is important to us. This Privacy Policy explains how we
        collect, use, disclose, and safeguard your information when you use our
        mobile application The Core Phone.
      </p>
      <p className="mb-4">
        We may collect certain information automatically, including, but not
        limited to, the type of mobile device you use, your mobile operating
        system, and information about the way you use the application.
      </p>
      <p className="mb-4">
        We do not collect any personal information from our users. However, we
        may collect non-personal information about your device and usage
        patterns to improve our application.
      </p>
      <p className="mb-4">
        By using The Core Phone, you consent to the collection and use of
        information in accordance with this policy.
      </p>
      <p className="mb-12">
        If you have any questions about this Privacy Policy, please contact us
        at hello@thecorephone.com.
      </p>
      <a href="/" className="hover:underline text-brand font-semibold">
        Go back to The Core Phone
      </a>
    </div>
  );
}
