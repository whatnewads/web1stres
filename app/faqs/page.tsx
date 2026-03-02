import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/shared-client";
import JsonLd from "@/components/json-ld";
import { faqsSchema } from "@/lib/schema/faqs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | 1st Response Occupational Health",
  description:
    "Answers to common questions about drug testing, medical testing, telemedicine, onsite care, case management, emergency response, and more.",
};

const faqCategories = [
  {
    category: "Drug & Alcohol Testing",
    items: [
      { question: "What types of drug tests do you offer?", answer: "We offer DOT and non-DOT multi-panel urine drug screens, oral fluid testing, and breath alcohol testing. We support testing for suspicion, pre-employment, post-incident, and more." },
      { question: "How quickly can we get test results?", answer: "Negative rapid screening results are available within minutes. Non-negative results go through our Medical Review Officer and are typically finalized within 24 to 72 hours." },
      { question: "What happens with non-negative results?", answer: "Non-negative results are sent to our certified Medical Review Officer (MRO) for review. The MRO contacts the donor to determine if there is a legitimate medical explanation before finalizing the result." },
    ],
  },
  {
    category: "Medical Testing",
    items: [
      { question: "What preventive screening services do you offer?", answer: "Our preventive screening services include cardiovascular screening, diabetes screening, vision screening, and wellness programs designed to identify health risks before they impact the workforce." },
      { question: "What medical testing services are available?", answer: "We offer influenza testing, strep testing, respiratory illness screening, blood glucose testing, blood pressure monitoring, and EKG services." },
      { question: "Can you perform testing at our worksite?", answer: "Yes. Most medical testing services can be performed onsite through our workplace clinic model." },
    ],
  },
  {
    category: "Onsite Care & EMTs/Paramedics",
    items: [
      { question: "What's the difference between onsite care and onsite EMTs & Paramedics?", answer: "Onsite medical care provides clinical services like drug testing and return-to-work evaluations at your site. Onsite EMTs & Paramedics places certified EMTs or paramedics at your location for emergency standby, immediate injury response, and daily medical support — including solar and wind energy deployments." },
      { question: "How long does it take to set up onsite services?", answer: "Setup timelines vary by scope. Simple medic staffing can be arranged within days. Full onsite clinic programs typically take 1 to 2 weeks to coordinate." },
    ],
  },
  {
    category: "Telemedicine",
    items: [
      { question: "How does telemedicine work with 1st Response?", answer: "Employees register, then connect with our occupational physician via a compliant video consultation. If indicated, documentation and medical orders are provided. We supply all necessary equipment for the telehealth visit." },
      { question: "How quickly can employees be seen?", answer: "99% of telemedicine appointments are seen within one hour of scheduling." },
      { question: "What industries do you serve with telemedicine?", answer: "We serve construction, oil & gas, distribution, solar, wind energy, and other industrial sectors where remote access to occupational health care is essential." },
    ],
  },
  {
    category: "Medical Referrals",
    items: [
      { question: "How do medical referrals work?", answer: "Our licensed occupational physician evaluates each case and refers to any indicated specialist when clearly needed. We help bridge the gap from the initial injury to the company's workers' compensation process." },
    ],
  },
  {
    category: "CPR & AED Training",
    items: [
      { question: "What training programs do you offer?", answer: "We offer CPR/AED certification, AED deployment guidance, and refresher courses." },
      { question: "What class formats are available?", answer: "We provide onsite group training at your facility, nationwide clinic locations, and custom scheduling to fit your team's needs." },
    ],
  },
  {
    category: "Case Management",
    items: [
      { question: "What does case management include?", answer: "Our case management focuses on specialist referral management coordinated by our occupational physician when clearly indicated, return-to-work planning, injury tracking, and regular status reporting to employers." },
    ],
  },
  {
    category: "Safety Coordination & Incident Support",
    items: [
      { question: "Are you a safety management company?", answer: "No. We work with your existing safety teams to provide case management support and incident coordination. We are not a safety management company and are not CHST-certified, though we follow those guidelines in our approach." },
      { question: "What industries do you support?", answer: "We support construction, oil & gas, manufacturing, distribution, solar, and wind energy operations nationwide." },
    ],
  },
  {
    category: "Emergency Response",
    items: [
      { question: "What is your average response time?", answer: "Our average response time is 7 to 10 minutes using pre-positioned EMTs and paramedics already on or near the worksite." },
      { question: "What emergencies do you respond to?", answer: "We respond to workplace injuries, medical emergencies, and any onsite injury or incident requiring immediate medical intervention, and more." },
    ],
  },
  {
    category: "General / Billing",
    items: [
      { question: "Do you accept insurance?", answer: "We work with most workers' compensation carriers and can bill directly. For employer-paid services, we offer competitive flat-rate pricing and volume discounts." },
      { question: "How do I get started?", answer: "Schedule a consultation and we will assess your needs, recommend services, and provide a pricing proposal — usually within 1 business day." },
    ],
  },
];

export default function FAQsPage() {
  return (
    <>
      <JsonLd data={faqsSchema} />
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <h1 className="text-[#0A1628] mb-10" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700 }}>
          Frequently Asked Questions
        </h1>
        <div className="max-w-3xl space-y-10">
          {faqCategories.map((cat) => (
            <div key={cat.category}>
              <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "22px", fontWeight: 700 }}>{cat.category}</h2>
              <FAQAccordion items={cat.items} />
            </div>
          ))}
        </div>
        <div className="mt-12 bg-[#F5F6F8] rounded-xl p-6 text-center max-w-3xl">
          <p className="text-[#0A1628] mb-4" style={{ fontSize: "16px", fontWeight: 600 }}>
            Still have questions?
          </p>
          <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-[#0A1628] text-white rounded-lg hover:bg-[#0A1628]/90 transition-colors" style={{ fontSize: "15px", fontWeight: 600 }}>
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
