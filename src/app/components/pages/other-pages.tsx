import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { useForm as useFormspree, ValidationError } from "@formspree/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  BreadcrumbNav,
  CTABanner,
  FAQAccordion,
  CaseStudyCard,
  BlogCard,
  ErrorPage as ErrorPageComponent,
} from "../shared";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  ArrowRight,
  Linkedin,
  Facebook,
  Twitter,
  BookOpen,
  FileText,
  HardHat,
  Shield,
} from "lucide-react";

/* ══════════════════════════════════════════════════ */
/* TEAM                                               */
/* ══════════════════════════════════════════════════ */
interface TeamMember {
  name: string;
  title: string;
  bio: string;
  initials: string;
  category: "leadership" | "medical" | "operations";
}

const teamMembers: TeamMember[] = [
  {
    name: "Daniel Hayes",
    title: "Co-Founder & Owner",
    initials: "DH",
    bio: "With decades of experience in emergency medical services and workplace safety, Daniel identified a pressing need for a modern approach to occupational health services across industrial sectors. He co-founded 1st Response Occupational to redefine the industry through innovative workplace clinic solutions.",
    category: "leadership",
  },
  {
    name: "Jeremy Layton",
    title: "Co-Founder & Owner",
    initials: "JL",
    bio: "An EMS professional turned occupational health business owner, Jeremy envisioned a flexible remote clinic model to solve the challenges businesses face in managing employee health and workplace medical care. His leadership drives 1st Response's mission to protect America's industrial workforce.",
    category: "leadership",
  },
  {
    name: "Dr. Kyle Jones, MD",
    title: "Contracted Occupational Physician",
    initials: "KJ",
    bio: "Dr. Jones brings over two decades of specialized experience in occupational medicine. A Texas A&M graduate who earned his medical degree from Texas Tech School of Medicine, he founded Texas and Oklahoma Occupational Medicine Services and has dedicated his career to industrial medicine, workplace injury management, and OSHA-compliant treatments.",
    category: "medical",
  },
  {
    name: "Michael Martinez, NRP",
    title: "Patient Lead",
    initials: "MM",
    bio: "A Nationally Registered Paramedic, Michael leads patient care operations across 1st Response's onsite and clinic programs. His clinical expertise and focus on patient outcomes ensure every worker receives timely, high-quality occupational health care.",
    category: "operations",
  },
  {
    name: "Wesley Yielding, NRP",
    title: "IT Lead",
    initials: "WY",
    bio: "A Nationally Registered Paramedic with a passion for technology, Wesley oversees 1st Response's IT infrastructure, telehealth systems, and digital workflows. His unique blend of clinical and technical knowledge keeps operations running efficiently across every worksite.",
    category: "operations",
  },
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden">
      <div className="h-48 bg-gradient-to-br from-[#0A1628] to-[#1a2d4a] flex items-center justify-center">
        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-white" style={{ fontSize: "28px", fontWeight: 700 }}>
          {member.initials}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-[#0A1628]" style={{ fontSize: "17px", fontWeight: 700 }}>{member.name}</h3>
        <p className="text-[#E8621A] mb-2" style={{ fontSize: "14px", fontWeight: 500 }}>{member.title}</p>
        <p className="text-[#5A6178]" style={{ fontSize: "14px", lineHeight: 1.6 }}>{member.bio}</p>
      </div>
    </div>
  );
}

export function TeamPage() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <BreadcrumbNav items={[{ label: "Home", to: "/" }, { label: "Our Team" }]} />
        <h1 className="text-[#0A1628] mb-4" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700 }}>
          Meet the 1st Response Team
        </h1>
        <p className="text-[#5A6178] max-w-2xl mb-12" style={{ fontSize: "16px", lineHeight: 1.6 }}>
          From EMS professionals to pioneering occupational health leaders — our team combines
          clinical expertise with industrial experience to deliver services that protect your workforce.
        </p>

        {/* Ownership */}
        <h2 className="text-[#E8621A] mb-6" style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
          Ownership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {teamMembers.filter(m => m.category === "leadership").map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>

        {/* Medical Direction */}
        <h2 className="text-[#E8621A] mb-6" style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
          Medical Direction
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {teamMembers.filter(m => m.category === "medical").map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>

        {/* Operations Leads */}
        <h2 className="text-[#E8621A] mb-6" style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
          Operations Leads
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.filter(m => m.category === "operations").map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
      <CTABanner title="Work with Our Team" primaryLabel="Schedule a Consult" primaryTo="/schedule-consult" />
    </>
  );
}

/* ══════════════════════════════════════════════════ */
/* CONTACT                                            */
/* ══════════════════════════════════════════════════ */
export function ContactPage() {
  const [activeTab, setActiveTab] = useState<"general" | "consult">("general");
  const [state, handleSubmit] = useFormspree("xwvnjedw");
  const navigate = useNavigate();

  useEffect(() => {
    if (state.succeeded) {
      navigate("/thanks");
    }
  }, [state.succeeded, navigate]);

  return (
    <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
      {/* Tabs */}
      <div className="flex flex-col sm:flex-row gap-3 mb-10 justify-center">
        <button
          onClick={() => setActiveTab("general")}
          className={`px-6 py-3 rounded-lg transition-colors ${
            activeTab === "general"
              ? "bg-[#E8621A] text-white"
              : "bg-white border border-border text-[#0A1628] hover:bg-[#F5F6F8]"
          }`}
          style={{ fontSize: "15px", fontWeight: 600 }}
        >
          General Contact
        </button>
        <button
          onClick={() => setActiveTab("consult")}
          className={`px-6 py-3 rounded-lg transition-colors ${
            activeTab === "consult"
              ? "bg-[#E8621A] text-white"
              : "bg-white border border-border text-[#0A1628] hover:bg-[#F5F6F8]"
          }`}
          style={{ fontSize: "15px", fontWeight: 600 }}
        >
          Free Occupational Health Consultation
        </button>
      </div>

      {activeTab === "consult" ? (
        <div className="text-center py-8">
          <p className="text-[#5A6178] mb-4" style={{ fontSize: "16px" }}>
            Ready for a tailored occupational health solution?
          </p>
          <Link
            to="/schedule-consult"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#E8621A] text-white rounded-lg hover:bg-[#d4571a] transition-colors"
            style={{ fontSize: "16px", fontWeight: 600 }}
          >
            Schedule a Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — Contact Info */}
          <div>
            <h2 className="text-[#0A1628] mb-6" style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 700 }}>
              Contact Our Occupational Health Team
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3" style={{ fontSize: "15px" }}>
                <div className="w-10 h-10 rounded-full bg-[#E8621A]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#E8621A]" />
                </div>
                <div>
                  <p className="text-[#5A6178]" style={{ fontSize: "13px" }}>Email:</p>
                  <a href="mailto:jeremy.layton@1stresponseoccupational.com" className="text-[#0A1628] hover:text-[#E8621A]">
                    jeremy.layton@1stresponseoccupational.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3" style={{ fontSize: "15px" }}>
                <div className="w-10 h-10 rounded-full bg-[#E8621A]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#E8621A]" />
                </div>
                <div>
                  <p className="text-[#5A6178]" style={{ fontSize: "13px" }}>Phone:</p>
                  <a href="tel:+19038691201" className="text-[#0A1628] hover:text-[#E8621A]">(903) 869-1201</a>
                </div>
              </li>
              <li className="flex items-center gap-3" style={{ fontSize: "15px" }}>
                <div className="w-10 h-10 rounded-full bg-[#E8621A]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#E8621A]" />
                </div>
                <span className="text-[#0A1628]">We provide nationwide construction site medical services</span>
              </li>
            </ul>

            <h3 className="text-[#0A1628] mb-4" style={{ fontSize: "20px", fontWeight: 700 }}>Business Hours</h3>
            <ul className="space-y-3">
              {[
                { day: "Monday - Friday: 8:00 AM - 6:00 PM" },
                { day: "Saturday: 8:00 AM - 5:00 PM" },
                { day: "Sunday: As Needed" },
              ].map((item) => (
                <li key={item.day} className="flex items-center gap-3" style={{ fontSize: "14px" }}>
                  <div className="w-8 h-8 rounded-full bg-[#E8621A]/10 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#E8621A]" />
                  </div>
                  <span className="text-[#5A6178]">{item.day}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Form */}
          <div>
            <h2 className="text-[#0A1628] mb-6" style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 700 }}>
              Send Us a Message About Occupational Health
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="hidden" aria-hidden="true">
                <input name="_gotcha" tabIndex={-1} autoComplete="off" />
              </div>

              <div>
                <label htmlFor="contact-name" className="block mb-1.5 text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 600 }}>
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-[#F5F6F8] border border-border rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-[#E8621A] outline-none transition-all"
                  autoComplete="name"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="contact-email" className="block mb-1.5 text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 600 }}>
                  Email Address *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-[#F5F6F8] border border-border rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-[#E8621A] outline-none transition-all"
                  autoComplete="email"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="contact-company" className="block mb-1.5 text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 600 }}>
                  Company Name
                </label>
                <input
                  id="contact-company"
                  type="text"
                  name="company"
                  placeholder="Enter your company name"
                  className="w-full px-4 py-3 bg-[#F5F6F8] border border-border rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-[#E8621A] outline-none transition-all"
                  autoComplete="organization"
                />
                <ValidationError prefix="Company" field="company" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="contact-message" className="block mb-1.5 text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 600 }}>
                  How can our occupational health services help you? *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your construction site medical needs or OSHA compliance questions"
                  className="w-full px-4 py-3 bg-[#F5F6F8] border border-border rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-[#E8621A] outline-none transition-all resize-y"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              {/* Information Collection Notice */}
              <div className="bg-[#FFF7ED] border-l-4 border-[#E8621A] p-4 rounded-r-lg">
                <p className="text-[#5A6178]" style={{ fontSize: "13px", lineHeight: 1.6 }}>
                  <span className="text-[#0A1628]" style={{ fontWeight: 600 }}>Information Collection Notice:</span>{" "}
                  By submitting this form, you consent to 1st Response Occupational collecting and processing
                  the information you provide. We will use this information solely to respond to your occupational
                  health inquiry and provide requested construction site medical services. We do not sell or share
                  your information with third parties.
                </p>
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full px-8 py-3.5 bg-[#E8621A] text-white rounded-lg hover:bg-[#d4571a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ fontSize: "16px", fontWeight: 600 }}
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════════ */
/* LOCATIONS                                          */
/* ══════════════════════════════════════════════════ */
export function LocationsPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
      <h1 className="text-[#0A1628] mb-10" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700 }}>
        1st Response Occupational Health Locations
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white border border-border rounded-xl p-6">
          <h3 className="text-[#0A1628] mb-1" style={{ fontSize: "18px", fontWeight: 700 }}>Main Office — Tyler</h3>
          <div className="space-y-2 mt-4">
            <p className="flex items-start gap-2 text-[#5A6178]" style={{ fontSize: "14px" }}>
              <MapPin className="w-4 h-4 text-[#E8621A] shrink-0 mt-0.5" /> Tyler, TX
            </p>
            <p className="flex items-center gap-2 text-[#5A6178]" style={{ fontSize: "14px" }}>
              <Phone className="w-4 h-4 text-[#E8621A] shrink-0" /> (903) 869-1201
            </p>
            <p className="flex items-center gap-2 text-[#5A6178]" style={{ fontSize: "14px" }}>
              <Clock className="w-4 h-4 text-[#E8621A] shrink-0" /> Mon–Fri: 8:00 AM – 5:00 PM
            </p>
          </div>
        </div>
        <div className="bg-white border border-border rounded-xl p-6">
          <h3 className="text-[#0A1628] mb-1" style={{ fontSize: "18px", fontWeight: 700 }}>Midland-Odessa Satellite</h3>
          <div className="space-y-2 mt-4">
            <p className="flex items-start gap-2 text-[#5A6178]" style={{ fontSize: "14px" }}>
              <MapPin className="w-4 h-4 text-[#E8621A] shrink-0 mt-0.5" /> 5678 Permian Way, Midland, TX 79701
            </p>
            <p className="flex items-center gap-2 text-[#5A6178]" style={{ fontSize: "14px" }}>
              <Phone className="w-4 h-4 text-[#E8621A] shrink-0" /> (432) 555-5678
            </p>
            <p className="flex items-center gap-2 text-[#5A6178]" style={{ fontSize: "14px" }}>
              <Clock className="w-4 h-4 text-[#E8621A] shrink-0" /> Mon–Fri: 7:00 AM – 4:00 PM
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#E8621A]/5 border border-[#E8621A]/20 rounded-xl p-6 text-center">
        <p className="text-[#0A1628] mb-4" style={{ fontSize: "16px", fontWeight: 600 }}>
          Don't see your area? Ask about our Onsite & Telemedicine options.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/onsite-care" className="text-[#E8621A] hover:underline" style={{ fontSize: "15px", fontWeight: 600 }}>Onsite Medical Care</Link>
          <span className="hidden sm:inline text-[#5A6178]">|</span>
          <Link to="/telemedicine" className="text-[#E8621A] hover:underline" style={{ fontSize: "15px", fontWeight: 600 }}>Telemedicine Services</Link>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════ */
/* FAQs                                               */
/* ══════════════════════════════════════════════════ */
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

export function FAQsPage() {
  return (
    <>
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
          <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-[#0A1628] text-white rounded-lg hover:bg-[#0A1628]/90 transition-colors" style={{ fontSize: "15px", fontWeight: 600 }}>
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}

/* ══════════════════════════════════════════════════ */
/* CASE STUDIES INDEX                                 */
/* ══════════════════════════════════════════════════ */
export function CasesIndexPage() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <h1 className="text-[#0A1628] mb-10" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700 }}>
          Client Case Studies
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CaseStudyCard title="Hill 1 & Hill 2" industry="Solar Construction" stat="800+ days zero incidents" to="/hill" />
          <CaseStudyCard title="Fighting Jays" industry="Solar Construction" stat="500+ days worked safe" to="/fighting-jays" />
        </div>
      </div>
      <CTABanner title="Want results like these?" primaryLabel="Schedule a Consult" primaryTo="/schedule-consult" />
    </>
  );
}

/* ══════════════════════════════════════════════════ */
/* CASE STUDY — HILL                                  */
/* ══════════════════════════════════════════════════ */
export function HillCaseStudyPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
      <BreadcrumbNav items={[{ label: "Home", to: "/" }, { label: "Case Studies", to: "/cases" }, { label: "Hill" }]} />
      <h1 className="text-[#0A1628] mb-6" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700 }}>
        Hill 1 & Hill 2: 800+ Days of Zero Incidents
      </h1>
      <div className="max-w-3xl space-y-10">
        <div>
          <h2 className="text-[#E8621A] mb-3" style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>The Project</h2>
          <p className="text-[#5A6178]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
            Hill 1 and Hill 2 is a two-phase solar construction project with large crews working across expansive jobsites. With the inherent risks of solar construction — heavy equipment, electrical work, and outdoor conditions — the project required dedicated onsite medical support from day one.
          </p>
        </div>
        <div>
          <h2 className="text-[#E8621A] mb-3" style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>The Solution</h2>
          <p className="text-[#5A6178]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
            1st Response deployed dedicated onsite EMTs and paramedics across both phases of the project, providing immediate medical response, injury treatment, and case management. Our team worked alongside the site safety personnel to ensure every incident was documented and managed from start to finish.
          </p>
        </div>
        <div className="bg-[#0A1628] rounded-xl p-8 text-center">
          <p className="text-[#E8621A]" style={{ fontSize: "48px", fontWeight: 800 }}>800+</p>
          <p className="text-white" style={{ fontSize: "18px", fontWeight: 600 }}>Days of zero incidents across Hill 1 & Hill 2</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-12">
        <Link to="/fighting-jays" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A1628] text-white rounded-lg hover:bg-[#0A1628]/90" style={{ fontSize: "15px", fontWeight: 600 }}>
          Read Next Case Study <ArrowRight className="w-4 h-4" />
        </Link>
        <Link to="/schedule-consult" className="inline-flex items-center px-6 py-3 bg-[#E8621A] text-white rounded-lg hover:bg-[#d4571a]" style={{ fontSize: "15px", fontWeight: 600 }}>
          Schedule a Consult
        </Link>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════��══════════ */
/* CASE STUDY — FIGHTING JAYS                         */
/* ══════════════════════════════════════════════════ */
export function FightingJaysCaseStudyPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
      <BreadcrumbNav items={[{ label: "Home", to: "/" }, { label: "Case Studies", to: "/cases" }, { label: "Fighting Jays" }]} />
      <h1 className="text-[#0A1628] mb-6" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700 }}>
        Fighting Jays: Zero Incidents Over 500+ Days Worked Safe
      </h1>
      <div className="max-w-3xl space-y-10">
        <div>
          <h2 className="text-[#E8621A] mb-3" style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>The Project</h2>
          <p className="text-[#5A6178]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
            Fighting Jays is a solar construction project spanning an 18-month duration with large crews on site daily. The project required consistent onsite medical coverage to support the workforce through the full construction lifecycle.
          </p>
        </div>
        <div>
          <h2 className="text-[#E8621A] mb-3" style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>The Solution</h2>
          <p className="text-[#5A6178]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
            1st Response placed dedicated onsite EMTs and paramedics for the full 18-month project duration. Our team provided immediate medical response, injury treatment, and case management — working alongside site safety personnel to keep the project running safely from start to finish.
          </p>
        </div>
        <div className="bg-[#0A1628] rounded-xl p-8 text-center">
          <p className="text-[#E8621A]" style={{ fontSize: "48px", fontWeight: 800 }}>0</p>
          <p className="text-white" style={{ fontSize: "18px", fontWeight: 600 }}>Incidents over 500+ days worked safe across an 18-month project</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-12">
        <Link to="/hill" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A1628] text-white rounded-lg hover:bg-[#0A1628]/90" style={{ fontSize: "15px", fontWeight: 600 }}>
          Read Previous Case Study
        </Link>
        <Link to="/schedule-consult" className="inline-flex items-center px-6 py-3 bg-[#E8621A] text-white rounded-lg hover:bg-[#d4571a]" style={{ fontSize: "15px", fontWeight: 600 }}>
          Schedule a Consult
        </Link>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════ */
/* BLOG INDEX                                         */
/* ══════════════════════════════════════════════════ */
const blogPosts = [
  { slug: "dot-drug-testing-guide-2025", title: "The Employer's Guide to DOT Drug Testing in 2025", excerpt: "Everything you need to know about DOT drug testing requirements, panel types, and how to set up a compliant program.", date: "Feb 15, 2026", category: "Drug Testing", imageUrl: "https://images.unsplash.com/photo-1766297246958-b6ca17b56fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcnVnJTIwdGVzdGluZyUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzcyMjg5MzI1fDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { slug: "osha-recordkeeping-mistakes", title: "5 OSHA Recordkeeping Mistakes That Cost Employers Thousands", excerpt: "Common OSHA 300 log errors and how to avoid the fines and audit issues that come with them.", date: "Feb 8, 2026", category: "Safety Compliance", imageUrl: "https://images.unsplash.com/photo-1553946550-4b8f3eea5451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBzYWZldHklMjB2ZXN0fGVufDF8fHx8MTc3MjIyOTE4N3ww&ixlib=rb-4.1.0&q=80&w=1080" },
  { slug: "telemedicine-remote-worksites", title: "How Telemedicine Is Changing Occupational Health for Remote Worksites", excerpt: "Remote worksites no longer need to choose between compliance and convenience.", date: "Jan 28, 2026", category: "Telemedicine", imageUrl: "https://images.unsplash.com/photo-1758691462848-31a39258dbd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlbWVkaWNpbmUlMjBkb2N0b3IlMjBsYXB0b3B8ZW58MXx8fHwxNzcyMjg5MzI1fDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { slug: "return-to-work-best-practices", title: "Return-to-Work Programs: Best Practices for Industrial Employers", excerpt: "How to design a return-to-work program that reduces claim costs and gets employees back on the job safely.", date: "Jan 20, 2026", category: "Case Management", imageUrl: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBtZWV0aW5nJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyMjg5MzI1fDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { slug: "cpr-training-why-it-matters", title: "Why Every Industrial Worksite Needs CPR-Trained Employees", excerpt: "The case for CPR training as a fundamental part of your workplace safety program.", date: "Jan 12, 2026", category: "Training", imageUrl: "https://images.unsplash.com/photo-1643227991784-fabfe0cf4470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDUFIlMjB0cmFpbmluZyUyMGZpcnN0JTIwYWlkJTIwY2xhc3N8ZW58MXx8fHwxNzcyMjg5MzI1fDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { slug: "oil-gas-safety-trends-2025", title: "Oil & Gas Safety Trends to Watch in 2025", excerpt: "Industry shifts in technology, regulation, and workforce safety that affect your operations.", date: "Jan 5, 2026", category: "Industry News", imageUrl: "https://images.unsplash.com/photo-1646227655718-dd721b681d91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBnYXMlMjB3b3JrZXIlMjBzYWZldHklMjBoZWxtZXR8ZW58MXx8fHwxNzcyMjg5MzI1fDA&ixlib=rb-4.1.0&q=80&w=1080" },
];

const categories = ["All", "Drug Testing", "Safety Compliance", "Case Management", "Training", "Telemedicine", "Industry News"];

export function BlogIndexPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? blogPosts : blogPosts.filter((p) => p.category === filter);

  return (
    <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
      <h1 className="text-[#0A1628] mb-4" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700 }}>
        Occupational Health Resources & Insights
      </h1>
      <p className="text-[#5A6178] mb-8" style={{ fontSize: "16px", lineHeight: 1.6 }}>
        Practical guidance on drug testing, safety compliance, case management, and more.
      </p>
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border transition-colors ${
              filter === cat ? "bg-[#E8621A] text-white border-[#E8621A]" : "border-border text-[#5A6178] hover:border-[#E8621A]"
            }`}
            style={{ fontSize: "13px", fontWeight: 600 }}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((post) => (
          <BlogCard key={post.slug} {...post} to={`/blog/${post.slug}`} />
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════ */
/* BLOG POST                                          */
/* ══════════════════════════════════════════════════ */
export function BlogPostPage() {
  const post = blogPosts[0]; // Default to first post for template
  return (
    <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
      <BreadcrumbNav items={[{ label: "Home", to: "/" }, { label: "Blog", to: "/blog" }, { label: post.title }]} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <article className="lg:col-span-2">
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-block px-3 py-1 bg-[#E8621A]/10 text-[#E8621A] rounded-full" style={{ fontSize: "12px", fontWeight: 600 }}>{post.category}</span>
            <span className="text-[#5A6178]" style={{ fontSize: "13px" }}>{post.date}</span>
            <span className="text-[#5A6178]" style={{ fontSize: "13px" }}>5 min read</span>
          </div>
          <h1 className="text-[#0A1628] mb-6" style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 700 }}>{post.title}</h1>
          <div className="aspect-video rounded-xl overflow-hidden mb-8">
            <ImageWithFallback src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
          </div>
          <div className="prose max-w-none space-y-4">
            <p className="text-[#5A6178]" style={{ fontSize: "16px", lineHeight: 1.8 }}>
              Drug testing is a critical component of workplace safety programs, especially for companies operating in safety-sensitive industries like construction, oil and gas, and transportation. Understanding the differences between DOT and non-DOT testing is the first step toward building a compliant program.
            </p>
            <h2 className="text-[#0A1628]" style={{ fontSize: "22px", fontWeight: 700 }}>DOT vs. Non-DOT Testing</h2>
            <p className="text-[#5A6178]" style={{ fontSize: "16px", lineHeight: 1.8 }}>
              DOT drug testing follows strict federal protocols established by the Department of Transportation. These tests are required for employees in safety-sensitive positions such as commercial drivers, pipeline workers, and aviation personnel. Non-DOT testing, by contrast, follows your company's own drug-free workplace policy and can be customized based on your needs.
            </p>
            <h2 className="text-[#0A1628]" style={{ fontSize: "22px", fontWeight: 700 }}>Setting Up Your Program</h2>
            <p className="text-[#5A6178]" style={{ fontSize: "16px", lineHeight: 1.8 }}>
              A compliant drug testing program requires a written policy, designated collection sites, a Medical Review Officer, and a system for random selection. Working with an experienced occupational health provider ensures your program meets all regulatory requirements from day one.
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#0A1628] rounded-full flex items-center justify-center text-white" style={{ fontSize: "16px", fontWeight: 700 }}>RH</div>
              <div>
                <p className="text-[#0A1628]" style={{ fontSize: "15px", fontWeight: 600 }}>Dr. Robert Hernandez</p>
                <p className="text-[#5A6178]" style={{ fontSize: "13px" }}>Medical Director, 1st Response Occupational Health</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#5A6178]" style={{ fontSize: "13px" }}>Share:</span>
              <a href="#" className="w-8 h-8 bg-[#F5F6F8] rounded flex items-center justify-center hover:bg-[#E8621A]/10 transition-colors"><Linkedin className="w-4 h-4 text-[#5A6178]" /></a>
              <a href="#" className="w-8 h-8 bg-[#F5F6F8] rounded flex items-center justify-center hover:bg-[#E8621A]/10 transition-colors"><Facebook className="w-4 h-4 text-[#5A6178]" /></a>
              <a href="#" className="w-8 h-8 bg-[#F5F6F8] rounded flex items-center justify-center hover:bg-[#E8621A]/10 transition-colors"><Twitter className="w-4 h-4 text-[#5A6178]" /></a>
            </div>
          </div>
        </article>
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <div className="bg-[#0A1628] rounded-xl p-6 text-white">
              <h3 className="mb-3" style={{ fontSize: "18px", fontWeight: 700 }}>Need Help?</h3>
              <p className="text-gray-400 mb-4" style={{ fontSize: "14px", lineHeight: 1.6 }}>Talk to our team about building a compliant occupational health program.</p>
              <Link to="/schedule-consult" className="block text-center py-3 bg-[#E8621A] rounded-lg hover:bg-[#d4571a] transition-colors" style={{ fontSize: "15px", fontWeight: 600 }}>Schedule a Consult</Link>
            </div>
            <div className="bg-[#F5F6F8] rounded-xl p-6">
              <h3 className="text-[#0A1628] mb-4" style={{ fontSize: "16px", fontWeight: 700 }}>Related Posts</h3>
              <div className="space-y-3">
                {blogPosts.slice(1, 4).map((p) => (
                  <Link key={p.slug} to={`/blog/${p.slug}`} className="block hover:text-[#E8621A] transition-colors">
                    <p className="text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 500 }}>{p.title}</p>
                    <p className="text-[#5A6178]" style={{ fontSize: "12px" }}>{p.date}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════ */
/* START A SITE                                       */
/* ══════════════════════════════════════════════════ */
export function StartSitePage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ company: "", contact: "", phone: "", email: "", size: "", location: "", message: "", honeypot: "" });

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <CheckCircle className="w-16 h-16 text-[#E8621A] mx-auto mb-4" />
          <h1 className="text-[#0A1628] mb-3" style={{ fontSize: "28px", fontWeight: 700 }}>Assessment Requested</h1>
          <p className="text-[#5A6178]" style={{ fontSize: "16px", lineHeight: 1.6 }}>Our team will contact you to discuss setting up an onsite program.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
      <h1 className="text-[#0A1628] mb-4" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700 }}>
        Start an Onsite Occupational Health Program
      </h1>
      <p className="text-[#5A6178] max-w-2xl mb-12" style={{ fontSize: "16px", lineHeight: 1.6 }}>
        Bring a full occupational health program directly to your worksite. We deploy medical providers, equipment, and protocols tailored to your operation.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "22px", fontWeight: 700 }}>What is an Onsite Program?</h2>
          <p className="text-[#5A6178] mb-6" style={{ fontSize: "15px", lineHeight: 1.7 }}>
            An onsite occupational health program places medical professionals, equipment, and compliance protocols at your worksite. This means faster injury response, less downtime, and no driving employees to off-site clinics.
          </p>
          <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "22px", fontWeight: 700 }}>Who Is This For?</h2>
          <ul className="space-y-2 mb-6">
            {["Construction crews managing 50+ workers", "Oilfield operations in remote locations", "Manufacturing plants with multi-shift workforces", "Energy projects requiring sustained medical coverage"].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#E8621A] shrink-0 mt-1" />
                <span className="text-[#5A6178]" style={{ fontSize: "15px" }}>{item}</span>
              </li>
            ))}
          </ul>
          <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "22px", fontWeight: 700 }}>How It Works</h2>
          <div className="space-y-4">
            {["Site assessment and needs analysis", "Custom program design", "Provider deployment and equipment setup", "Ongoing service delivery and reporting", "Regular program review and optimization"].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-7 h-7 bg-[#E8621A] text-white rounded-full flex items-center justify-center shrink-0" style={{ fontSize: "13px", fontWeight: 700 }}>{i + 1}</div>
                <p className="text-[#5A6178] pt-0.5" style={{ fontSize: "15px" }}>{step}</p>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); if (!form.honeypot) setSubmitted(true); }} className="bg-[#F5F6F8] rounded-xl p-6 lg:p-8 space-y-5 h-fit">
          <h3 className="text-[#0A1628]" style={{ fontSize: "20px", fontWeight: 700 }}>Request a Site Assessment</h3>
          <div className="hidden" aria-hidden="true">
            <input name="website" tabIndex={-1} autoComplete="off" value={form.honeypot} onChange={(e) => setForm({ ...form, honeypot: e.target.value })} />
          </div>
          {[
            { id: "company", label: "Company Name", type: "text" },
            { id: "contact", label: "Contact Name", type: "text" },
            { id: "phone", label: "Phone", type: "tel" },
            { id: "email", label: "Email", type: "email" },
            { id: "size", label: "Workforce Size", type: "text" },
            { id: "location", label: "Site Location", type: "text" },
          ].map((field) => (
            <div key={field.id}>
              <label htmlFor={`start-${field.id}`} className="block mb-1.5 text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 600 }}>{field.label} *</label>
              <input id={`start-${field.id}`} type={field.type} required value={(form as any)[field.id]} onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-[#E8621A] outline-none" />
            </div>
          ))}
          <div>
            <label htmlFor="start-msg" className="block mb-1.5 text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 600 }}>Message</label>
            <textarea id="start-msg" rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-[#E8621A] outline-none resize-y" />
          </div>
          <button type="submit" className="w-full py-3.5 bg-[#E8621A] text-white rounded-lg hover:bg-[#d4571a] transition-colors" style={{ fontSize: "16px", fontWeight: 600 }}>
            Request a Site Assessment
          </button>
        </form>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════ */
/* FREE RESOURCES HUB                                 */
/* ══════════════════════════════════════════════════ */
export function FreeResourcesPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
      <h1 className="text-[#0A1628] mb-4" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700 }}>
        Free Safety Resources for Employers
      </h1>
      <p className="text-[#5A6178] max-w-2xl mb-12" style={{ fontSize: "16px", lineHeight: 1.6 }}>
        Download practical tools and guides to improve your workplace safety program.
        No sales pitch — just actionable resources from our team.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: BookOpen, title: "Free Toolbox Talks Bundle", desc: "Pre-built safety talk scripts covering the most common industrial hazards.", to: "/toolbox-talks" },
          { icon: FileText, title: "Free OSHA Compliance Guide", desc: "A practical checklist to keep your worksite compliant and audit-ready.", to: "/osha-compliance-guide" },
          { icon: HardHat, title: "Free Injury Prevention Guide", desc: "Actionable strategies to reduce workplace injuries and lower insurance costs.", to: "/injury-prevention-guide" },
        ].map((resource) => (
          <Link key={resource.to} to={resource.to} className="group block bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-[#0A1628]/5 rounded-lg flex items-center justify-center mb-4">
              <resource.icon className="w-6 h-6 text-[#0A1628]" />
            </div>
            <h3 className="text-[#0A1628] mb-2" style={{ fontSize: "18px", fontWeight: 600 }}>{resource.title}</h3>
            <p className="text-[#5A6178] mb-4" style={{ fontSize: "14px", lineHeight: 1.6 }}>{resource.desc}</p>
            <span className="inline-flex items-center gap-1 text-[#E8621A] group-hover:gap-2 transition-all" style={{ fontSize: "14px", fontWeight: 600 }}>
              Download Free <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════ */
/* RESOURCE LEAD CAPTURE (Toolbox, OSHA, Injury)      */
/* ══════════════════════════════════════════════════ */
function ResourceLeadCapturePage({ title, description, topics }: { title: string; description: string; topics: string[] }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", honeypot: "" });

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <CheckCircle className="w-16 h-16 text-[#E8621A] mx-auto mb-4" />
          <h1 className="text-[#0A1628] mb-3" style={{ fontSize: "28px", fontWeight: 700 }}>Check Your Inbox</h1>
          <p className="text-[#5A6178]" style={{ fontSize: "16px", lineHeight: 1.6 }}>We've sent the download link to your email.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-[#0A1628] mb-4" style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 700 }}>{title}</h1>
        <p className="text-[#5A6178] mb-8" style={{ fontSize: "16px", lineHeight: 1.7 }}>{description}</p>
        <div className="mb-8">
          <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "20px", fontWeight: 700 }}>What's Included</h2>
          <ul className="space-y-2">
            {topics.map((topic) => (
              <li key={topic} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#E8621A] shrink-0 mt-1" />
                <span className="text-[#5A6178]" style={{ fontSize: "15px" }}>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); if (!form.honeypot) setSubmitted(true); }} className="bg-[#F5F6F8] rounded-xl p-6 space-y-4">
          <div className="hidden" aria-hidden="true">
            <input name="website" tabIndex={-1} autoComplete="off" value={form.honeypot} onChange={(e) => setForm({ ...form, honeypot: e.target.value })} />
          </div>
          <div>
            <label htmlFor="res-name" className="block mb-1.5 text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 600 }}>Name *</label>
            <input id="res-name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:ring-2 focus:ring-[#E8621A] outline-none" autoComplete="name" />
          </div>
          <div>
            <label htmlFor="res-email" className="block mb-1.5 text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 600 }}>Company Email *</label>
            <input id="res-email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:ring-2 focus:ring-[#E8621A] outline-none" autoComplete="email" />
          </div>
          <button type="submit" className="w-full py-3.5 bg-[#E8621A] text-white rounded-lg hover:bg-[#d4571a] transition-colors" style={{ fontSize: "16px", fontWeight: 600 }}>
            Send Me the Free Bundle
          </button>
          <p className="text-[#5A6178] text-center" style={{ fontSize: "12px" }}>We'll never share your email. Unsubscribe anytime.</p>
        </form>
      </div>
    </div>
  );
}

export function ToolboxTalksPage() {
  return <ResourceLeadCapturePage title="Free Toolbox Talks Bundle" description="Download ready-to-use toolbox talk scripts that cover the most common industrial safety topics. Print them, share them with your foremen, and run better morning safety meetings." topics={["Fall protection and working at heights", "Heat illness prevention", "Personal protective equipment (PPE)", "Hazard communication", "Lockout/tagout procedures", "Confined space safety", "Hand and power tool safety", "Electrical safety basics"]} />;
}

export function OSHAGuidePage() {
  return <ResourceLeadCapturePage title="Free OSHA Compliance Guide" description="A practical, no-nonsense checklist to help you identify compliance gaps and prepare for OSHA inspections. Built for safety managers and HR professionals in industrial settings." topics={["OSHA 300 log recordkeeping requirements", "Required safety training by industry", "PPE program compliance checklist", "Hazard communication program essentials", "Emergency action plan requirements", "Common citation categories and how to avoid them"]} />;
}

export function InjuryPreventionGuidePage() {
  return <ResourceLeadCapturePage title="Free Workplace Injury Prevention Guide" description="Practical strategies your safety team can implement this week to reduce workplace injuries, lower workers' comp costs, and build a stronger safety culture." topics={["Job hazard analysis (JHA) templates", "Pre-shift stretching and warm-up programs", "Near-miss reporting system setup", "Modified duty and return-to-work protocols", "Safety incentive program design", "Leading vs. lagging indicator tracking"]} />;
}

/* ══════════════════════════════════════════════════ */
/* LEGAL PAGES                                        */
/* ══════════════════════════════════════════════════ */
export function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 lg:px-6 py-12 lg:py-16">
      <h1 className="text-[#0A1628] mb-2" style={{ fontSize: "32px", fontWeight: 700 }}>Privacy Policy</h1>
      <p className="text-[#5A6178] mb-8" style={{ fontSize: "14px" }}>Last updated: February 1, 2026</p>
      <div className="space-y-6">
        {[
          { title: "Information We Collect", content: "We collect information you provide directly to us, such as when you fill out a contact form, schedule a consultation, or download a resource. This may include your name, company name, email address, phone number, and the nature of your inquiry." },
          { title: "How We Use Your Information", content: "We use the information we collect to respond to your inquiries, provide our services, send you requested resources, and communicate with you about our services. We do not sell your personal information to third parties." },
          { title: "Data Security", content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction." },
          { title: "Cookies", content: "This website does not use cookies." },
          { title: "Your Rights", content: "You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at jeremy.layton@1stresponseoccupational.com." },
          { title: "Contact Us", content: "If you have questions about this Privacy Policy, please contact us at jeremy.layton@1stresponseoccupational.com or call (903) 869-1201." },
        ].map((section) => (
          <div key={section.title}>
            <h2 className="text-[#0A1628] mb-2" style={{ fontSize: "20px", fontWeight: 700 }}>{section.title}</h2>
            <p className="text-[#5A6178]" style={{ fontSize: "15px", lineHeight: 1.7 }}>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 lg:px-6 py-12 lg:py-16">
      <h1 className="text-[#0A1628] mb-2" style={{ fontSize: "32px", fontWeight: 700 }}>Terms and Conditions</h1>
      <p className="text-[#5A6178] mb-8" style={{ fontSize: "14px" }}>Last updated: February 1, 2026</p>
      <div className="space-y-6">
        {[
          { title: "Acceptance of Terms", content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement." },
          { title: "Use of Website", content: "This website is intended to provide information about 1st Response Occupational Health services. The content is for informational purposes only and does not constitute medical advice." },
          { title: "Intellectual Property", content: "All content on this website, including text, graphics, logos, and images, is the property of 1st Response Occupational Health and is protected by applicable intellectual property laws." },
          { title: "Limitation of Liability", content: "1st Response Occupational Health shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of this website." },
          { title: "Governing Law", content: "These terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions." },
          { title: "Contact", content: "Questions about these Terms should be directed to jeremy.layton@1stresponseoccupational.com." },
        ].map((section) => (
          <div key={section.title}>
            <h2 className="text-[#0A1628] mb-2" style={{ fontSize: "20px", fontWeight: 700 }}>{section.title}</h2>
            <p className="text-[#5A6178]" style={{ fontSize: "15px", lineHeight: 1.7 }}>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════ */
/* ERROR PAGES                                        */
/* ══════════════════════════════════════════════════ */
export function Error403Page() {
  return <ErrorPageComponent code="403" title="Access Denied" message="You don't have permission to access this page." links={[{ label: "Home", to: "/" }, { label: "Contact Us", to: "/contact" }, { label: "Schedule a Consult", to: "/schedule-consult" }]} />;
}

export function Error404Page() {
  return <ErrorPageComponent code="404" title="Page Not Found" message="The page you're looking for doesn't exist or has been moved." links={[{ label: "Home", to: "/" }, { label: "Services", to: "/#services" }, { label: "Drug Testing", to: "/drug-testing" }, { label: "Contact", to: "/contact" }]} />;
}

export function Error429Page() {
  return <ErrorPageComponent code="429" title="Too Many Requests" message="Please wait a moment before trying again. This limit resets automatically." links={[{ label: "Home", to: "/" }]} />;
}

export function Error500Page() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-[#E8621A] mb-4" style={{ fontSize: "72px", fontWeight: 800 }}>500</p>
        <h1 className="text-[#0A1628] mb-4" style={{ fontSize: "28px", fontWeight: 700 }}>Something Went Wrong</h1>
        <p className="text-[#5A6178] mb-4" style={{ fontSize: "16px", lineHeight: 1.6 }}>We're experiencing a temporary issue. Please try again in a moment.</p>
        <p className="text-[#0A1628] mb-8" style={{ fontSize: "18px", fontWeight: 700 }}>
          Need help now? Call <a href="tel:+19038691201" className="text-[#E8621A] underline">(903) 869-1201</a>
        </p>
        <Link to="/" className="inline-flex items-center px-6 py-3 bg-[#0A1628] text-white rounded-lg" style={{ fontSize: "15px", fontWeight: 600 }}>
          Go Home
        </Link>
      </div>
    </div>
  );
}
