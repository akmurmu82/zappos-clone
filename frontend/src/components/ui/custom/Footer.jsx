import React from "react";

const Footer = () => {
  const footerData = [
    {
      title: "About Zappos",
      links: [
        "About",
        "Zappos ONE",
        "Zappos for Good",
        "Zappos at Work",
        "Get the Zappos Mobile App",
        "Amazon Prime Benefits",
        "Zappos VIP Benefits",
        "Coupons & Sales",
        "Accessibility Statement",
      ],
    },
    {
      title: "Customer Service",
      links: [
        "FAQs",
        "Contact Info",
        "¿Ayuda en español?",
        "Shipping And Returns Policy",
        "About Proposition 65",
      ],
    },
    {
      title: "Resources",
      links: [
        "Measurement Guide",
        "Size Conversion Chart",
        "Measure Your Bra Size",
        "Associates Program",
        "Press Kit & Brand Inquiries",
        "Site Map",
        "Take Survey",
      ],
    },
    {
      title: "Explore Zappos",
      links: [
        "Brands",
        "Clothing",
        "The Style Room",
        "Eyewear",
        "New Arrivals",
        "Running",
        "Jackets",
        "Shoes",
        "Watches",
        "Zappos Adaptive",
        "All Departments",
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 text-gray-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerData.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx} className="text-sm hover:underline">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-200 mt-8 pt-4 text-sm text-gray-500 text-center">
          <p>© 2009–2025 - Zappos.com LLC or its affiliates</p>
          <p className="mt-1">
            <a href="#" className="hover:underline">
              Terms of Use
            </a>{" "}
            /{" "}
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>{" "}
            /{" "}
            <a href="#" className="hover:underline">
              Fur Policy
            </a>{" "}
            /{" "}
            Interest-Based Ads / 24/7 Customer Service (800) 927-7671
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
