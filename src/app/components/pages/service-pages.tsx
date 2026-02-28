import { ServicePageLayout, CTABanner } from "../shared";
import { Link } from "react-router";
import { Phone, AlertTriangle, CheckCircle } from "lucide-react";

/* ── Shared section component ── */
function ContentSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "22px", fontWeight: 700 }}>
        {title}
      </h2>
      {children}
    </div>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#5A6178] mb-4" style={{ fontSize: "15px", lineHeight: 1.7 }}>
      {children}
    </p>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mb-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <CheckCircle className="w-4 h-4 text-[#E8621A] shrink-0 mt-1" />
          <span className="text-[#5A6178]" style={{ fontSize: "15px", lineHeight: 1.6 }}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ComplianceCallout({ text }: { text: string }) {
  return (
    <div className="bg-[#E8621A]/5 border-l-4 border-[#E8621A] p-4 rounded-r-lg mb-8">
      <p className="text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 600 }}>{text}</p>
    </div>
  );
}

/* ══════════════════════════════════════════════════ */
/* FIRST AID, BLS & ALS                              */
/* ══════════════════════════════════════════════════ */
export function FirstAidPage() {
  return (
    <ServicePageLayout
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }, { label: "First Aid, BLS & ALS" }]}
      title="First Aid, BLS & ALS Services"
      faqs={[
        { question: "What is the difference between BLS and ALS?", answer: "Basic Life Support (BLS) covers CPR, AED use, and basic airway management. Advanced Life Support (ALS) includes IV access, cardiac monitoring, medication administration, and advanced airway management by certified paramedics." },
        { question: "Do you provide coverage at construction sites?", answer: "Yes. Most construction sites utilize first aid to BLS level of care from our certified providers. ALS coverage is optional and available if the client requires it. We deploy to construction sites, oilfield locations, and industrial facilities nationwide on a contract basis." },
        { question: "Are your providers OSHA-compliant?", answer: "All of our BLS and ALS providers meet or exceed OSHA general duty clause requirements, are licensed at the EMT level and above including paramedic level licensure." },
      ]}
    >
      <ContentSection title="What We Provide">
        <Paragraph>
          Our First Aid, BLS & ALS services ensure your worksite has immediate access to
          trained medical professionals capable of responding to injuries and medical
          emergencies. From basic wound care and first aid to advanced cardiac life support,
          we scale our response to match your site's risk profile.
        </Paragraph>
      </ContentSection>
      <ContentSection title="Who Needs This Service">
        <BulletList items={[
          "Construction companies with high-risk jobsites",
          "Oil & gas operations in remote locations",
          "Manufacturing facilities with heavy machinery",
        ]} />
      </ContentSection>
      <ComplianceCallout text="All services meet OSHA 29 CFR 1910.151 and 1926.50 requirements for workplace first aid and medical services." />
    </ServicePageLayout>
  );
}

/* ══════════════════════════════════════════════════ */
/* TELEMEDICINE                                       */
/* ══════════════════════════════════════════ */
export function TelemedicinePage() {
  return (
    <ServicePageLayout
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }, { label: "Telemedicine" }]}
      title="Occupational Telemedicine Services"
      faqs={[
        { question: "Is telemedicine OSHA-compliant for occupational health?", answer: "Yes. OSHA permits telemedicine for many occupational health evaluations. We ensure all remote consultations meet applicable regulatory requirements." },
        { question: "What equipment do we need on our end?", answer: "None — we provide everything. Our onsite clinics are fully equipped for telemedicine visits, so your team doesn't need to set up any technology." },
        { question: "How fast can we schedule a telemedicine appointment?", answer: "99% of appointments are seen in an hour or less from time of visit to clinic." },
      ]}
    >
      <ContentSection title="How It Works">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {["Register and make an appointment with our occupational physician", "Connect via compliant video medicine services", "Receive documentation and next steps — including imaging and other orders if clearly indicated"].map((step, i) => (
            <div key={i} className="bg-[#F5F6F8] rounded-lg p-4 text-center">
              <div className="w-8 h-8 bg-[#E8621A] text-white rounded-full flex items-center justify-center mx-auto mb-2" style={{ fontSize: "14px", fontWeight: 700 }}>
                {i + 1}
              </div>
              <p className="text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 500 }}>{step}</p>
            </div>
          ))}
        </div>
      </ContentSection>
      <ContentSection title="Industries Served">
        <BulletList items={[
          "Remote oilfield and pipeline crews",
          "Distributed construction teams nationwide",
          "Solar and wind energy projects",
          "Small businesses without onsite medical staff",
          "Companies needing rapid post-incident evaluations",
        ]} />
      </ContentSection>
      <ComplianceCallout text="All telemedicine consultations are conducted by licensed providers and meet OSHA regulatory standards for occupational health evaluations." />
    </ServicePageLayout>
  );
}

/* ══════════════════════════════════════════════════ */
/* ONSITE CARE                                        */
/* ══════════════════════════════════════════════════ */
export function OnsiteCarePage() {
  return (
    <ServicePageLayout
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }, { label: "Onsite Medical Care" }]}
      title="Onsite Medical Care for Industrial Worksites"
      faqs={[
        { question: "How is onsite care different from onsite medics?", answer: "Onsite medical care provides clinical services like drug testing and return-to-work evaluations at your worksite. Onsite EMTs & Paramedics focuses on staffing certified EMTs and paramedics for ongoing emergency standby and medical consultation." },
        { question: "Can you set up a temporary clinic at our jobsite?", answer: "Yes. We deploy fully equipped mobile medical units and can establish temporary clinics for projects lasting from a few days to several months." },
        { question: "What services are available onsite?", answer: "Drug and alcohol testing (DOT and non-DOT) and return-to-work evaluations. We bring these services directly to your worksite so your team stays on the job." },
      ]}
    >
      <ContentSection title="What's Included">
        <Paragraph>
          Onsite Medical Care brings the clinic to your worksite. Our mobile medical
          units and trained providers deliver drug testing and return-to-work
          evaluations — without pulling your workers off the job.
        </Paragraph>
        <BulletList items={[
          "Drug and alcohol testing (DOT and non-DOT)",
          "Return-to-work evaluations",
        ]} />
      </ContentSection>
      <ContentSection title="Who Needs This">
        <Paragraph>
          Companies running large-scale construction projects, oilfield operations, or
          manufacturing plants benefit most from onsite medical care. If your workers
          lose hours traveling to a clinic, we eliminate that downtime.
        </Paragraph>
      </ContentSection>
      <div className="mt-6">
        <Link
          to="/start-site"
          className="inline-flex items-center px-6 py-3 bg-[#E8621A] text-white rounded-lg hover:bg-[#d4571a] transition-colors"
          style={{ fontSize: "15px", fontWeight: 600 }}
        >
          Start a Site
        </Link>
      </div>
    </ServicePageLayout>
  );
}

/* ══════════════════════════════════════════════════ */
/* ONSITE MEDICS                                      */
/* ══════════════════════════════════════════════════ */
export function OnsiteMedicsPage() {
  return (
    <ServicePageLayout
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }, { label: "Onsite EMTs & Paramedics" }]}
      title="Onsite EMTs & Paramedics for Industrial Sites"
      faqs={[
        { question: "What qualifications do your onsite providers have?", answer: "All providers hold current EMT-Basic or Paramedic certifications. Many have additional OSHA safety training, wilderness medicine certifications, and industrial experience." },
        { question: "Can you staff medics for short-term projects?", answer: "Yes. We provide medic staffing for projects ranging from a single day to multi-year assignments." },
        { question: "Do your medics carry their own equipment?", answer: "Yes. Our medics arrive fully equipped with BLS/ALS gear, first aid supplies, and communication equipment appropriate for your worksite environment." },
      ]}
    >
      <ContentSection title="What We Provide">
        <Paragraph>
          Onsite EMTs & Paramedics places certified emergency medical professionals
          directly at your job site as medical consultants and providers. Unlike onsite
          clinical care, this service focuses on having a trained responder present and
          ready for immediate action or for any medical consultation needs — available
          at any point during operating hours.
        </Paragraph>
      </ContentSection>
      <ContentSection title="Deployment Scenarios">
        <BulletList items={[
          "Oilfield drilling and completion operations",
          "Pipeline construction and maintenance projects",
          "Solar and wind energy installations",
          "Manufacturing plant shifts with elevated injury risk",
          "Large-scale construction projects",
        ]} />
      </ContentSection>
      <div className="mt-6">
        <Link
          to="/start-site"
          className="inline-flex items-center px-6 py-3 bg-[#E8621A] text-white rounded-lg hover:bg-[#d4571a] transition-colors"
          style={{ fontSize: "15px", fontWeight: 600 }}
        >
          Request Onsite Medic Staffing
        </Link>
      </div>
    </ServicePageLayout>
  );
}

/* ══════════════════════════════════════════════════ */
/* REFERRALS                                          */
/* ══════════════════════════════════════════════════ */
export function ReferralsPage() {
  return (
    <ServicePageLayout
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }, { label: "Medical Referrals" }]}
      title="Occupational Medical Referral Services"
      faqs={[
        { question: "What types of specialists do you refer to?", answer: "Our licensed occupational physician refers patients to any indicated specialist based on the clinical findings and needs of the case. We do not limit referrals to a predetermined list — the physician recommends or refers to whichever specialist is clearly indicated." },
        { question: "How does this work with our workers' compensation carrier?", answer: "We bridge the gap from the initial injury to your company's workers' compensation process. Our occupational physician follows all doctors' orders for treatments, follow-ups, and care, but we do not direct the direction of your company's workers' compensation case." },
        { question: "How do referrals reduce our liability?", answer: "When a licensed occupational physician manages the referral process, injured workers receive appropriate care quickly. This improves outcomes, reduces claim duration, and demonstrates your company's duty of care." },
      ]}
    >
      <ContentSection title="How Referral Coordination Works">
        <Paragraph>
          When an employee needs care beyond what our onsite or clinic-based services
          provide, our licensed occupational physician evaluates the case and refers the
          patient to any indicated specialist. We bridge the gap from initial injury to
          your company's workers' compensation process — following all doctors' orders
          for treatments, follow-ups, and care.
        </Paragraph>
      </ContentSection>
      <ContentSection title="Why This Matters for Employers">
        <BulletList items={[
          "Faster return-to-work timelines through physician-directed specialist referrals",
          "Seamless bridge from initial injury to your workers' compensation process",
          "Complete documentation trail for compliance and liability protection",
        ]} />
      </ContentSection>
    </ServicePageLayout>
  );
}

/* ══════════════════════════════════════════════════ */
/* MANAGE CASES                                       */
/* ══════════════════════════════════════════════════ */
export function ManageCasesPage() {
  return (
    <ServicePageLayout
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Case Management" }, { label: "Manage Cases" }]}
      title="Occupational Case Management Services"
      faqs={[
        { question: "What does case management include?", answer: "Case management includes return-to-work planning, injury tracking and reporting, specialist referral management when clearly indicated by our occupational physician, and ongoing communication between all parties." },
        { question: "When should a company use case management?", answer: "Any time an employee is injured on the job and the case involves specialist care or a modified duty return-to-work program, professional case management helps reduce costs and improve outcomes." },
        { question: "How does specialist referral management work?", answer: "When our licensed occupational physician determines that a specialist is clearly indicated, we coordinate the referral, track the case through treatment, and keep your team informed with ongoing status updates throughout the process." },
      ]}
    >
      <ContentSection title="What Case Management Covers">
        <Paragraph>
          Our case management service acts as the single coordination point for
          workplace injury cases — from the initial incident through full return to
          work. We handle the complexity so your HR and safety teams can focus on
          prevention.
        </Paragraph>
        <BulletList items={[
          "Return-to-work program design and management",
          "Injury tracking, trending, and OSHA recordkeeping",
          "Specialist referral management — coordinated by our occupational physician when clearly indicated",
          "Ongoing status reporting to employers",
        ]} />
      </ContentSection>
      <ContentSection title="Process">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {["Incident reported", "Case opened & documented", "Treatment coordinated", "Return-to-work achieved"].map((step, i) => (
            <div key={i} className="bg-[#F5F6F8] rounded-lg p-4 text-center">
              <div className="w-8 h-8 bg-[#0A1628] text-white rounded-full flex items-center justify-center mx-auto mb-2" style={{ fontSize: "14px", fontWeight: 700 }}>
                {i + 1}
              </div>
              <p className="text-[#0A1628]" style={{ fontSize: "13px", fontWeight: 500 }}>{step}</p>
            </div>
          ))}
        </div>
      </ContentSection>
    </ServicePageLayout>
  );
}

/* ═════════════════════════════════════════════════ */
/* SAFETY SUPPORT                                     */
/* ══════════════════════════════════════════════════ */
export function SafetySupportPage() {
  return (
    <ServicePageLayout
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Case Management" }, { label: "Safety Support" }]}
      title="Safety Coordination & Incident Support Nationwide"
      faqs={[
        { question: "What does safety coordination include?", answer: "We work alongside your site safety team to support case management when incidents occur — including injury documentation, incident response coordination, and communication between medical providers and your safety personnel." },
        { question: "Do you replace our site safety team?", answer: "No. We are not a safety management company. We work with your existing safety team to ensure that when incidents happen onsite, the medical response and case management process is seamless." },
        { question: "What happens when an incident occurs onsite?", answer: "Our team coordinates with your safety personnel to document the incident, provide or arrange appropriate medical care, and manage the case from injury through return to work." },
      ]}
    >
      <ContentSection title="How We Work With Your Safety Team">
        <Paragraph>
          We are not a safety management company — we partner with your existing site
          safety team to provide medical support when incidents happen. When a workplace
          injury or incident occurs, our team steps in to coordinate the medical response,
          document the case, and manage it through resolution.
        </Paragraph>
        <BulletList items={[
          "Incident response coordination with your onsite safety personnel",
          "Injury documentation and case management from incident through return to work",
          "Communication bridge between medical providers and your safety team",
          "Support for post-incident reporting and OSHA recordkeeping",
        ]} />
      </ContentSection>
      <ContentSection title="Industries Served">
        <BulletList items={[
          "Construction and general contractors",
          "Oil and gas exploration and production",
          "Solar energy projects",
          "Wind energy installations",
          "Manufacturing and heavy industry",
          "Energy and utilities",
          "Logistics and transportation",
        ]} />
      </ContentSection>
    </ServicePageLayout>
  );
}

/* ══════════════════════════════════════════════════ */
/* EMERGENCY RESPONSE                                 */
/* ══════════════════════════════════════════════════ */
export function EmergencyResponsePage() {
  return (
    <ServicePageLayout
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Case Management" }, { label: "Emergency Response" }]}
      title="Industrial Emergency Response Services"
      faqs={[
        { question: "What types of emergencies do you respond to?", answer: "We respond to workplace injuries, medical emergencies, hazardous material incidents, confined space rescues, and any other onsite injury or incident requiring immediate medical intervention." },
        { question: "What is your typical response time?", answer: "Our average response time is 7 to 10 minutes. With our EMTs and paramedics pre-positioned at your worksite, help arrives fast — no waiting on outside ambulance services." },
        { question: "Can we pre-position emergency responders at our site?", answer: "Yes. We offer dedicated onsite emergency response staffing for high-risk operations. Contact us to discuss a staffing plan tailored to your site." },
      ]}
    >
      <ContentSection title="What's Covered">
        <Paragraph>
          When an industrial emergency happens, response time and provider capability
          determine outcomes. Our emergency response services place trained, equipped
          responders at or near your worksite so help arrives immediately — not after
          a 30-minute ambulance drive.
        </Paragraph>
        <BulletList items={[
          "Immediate medical response to workplace injuries and emergencies",
          "BLS and ALS interventions by certified providers",
          "Hazmat incident medical support",
          "Confined space rescue medical standby",
          "Post-incident documentation and reporting",
          "And more — we respond to any onsite injury or incident",
        ]} />
      </ContentSection>
      <ComplianceCallout text="Our emergency response capabilities meet OSHA 29 CFR 1910.120 (HAZWOPER) and 29 CFR 1926.65 requirements for emergency medical services at industrial worksites." />
    </ServicePageLayout>
  );
}

/* ══════════════════════════════════════════════════ */
/* DRUG TESTING                                       */
/* ═════════════════════════════════════════════════ */
export function DrugTestingPage() {
  return (
    <ServicePageLayout
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Testing" }, { label: "Drug Testing" }]}
      title="DOT & Non-DOT Drug Testing Services"
      faqs={[
        { question: "What is the difference between DOT and non-DOT testing?", answer: "DOT testing follows strict federal protocols mandated by the Department of Transportation for safety-sensitive positions. Non-DOT testing follows your company's own drug-free workplace policy and can be customized in terms of panel type and procedures." },
        { question: "How quickly do we get results?", answer: "Rapid screening results are typically available within minutes for negative results. Non-negative results are sent to a Medical Review Officer (MRO) and finalized within 24 to 72 hours." },
        { question: "Do you provide MRO services?", answer: "Yes. Our Medical Review Officer reviews all non-negative results, contacts the donor for verification, and provides a final determination to your company." },
      ]}
    >
      <ContentSection title="Our Drug Testing Services">
        <Paragraph>
          We provide comprehensive drug and alcohol testing services that meet DOT,
          FMCSA, and OSHA requirements. Whether you need pre-employment screening,
          random testing programs, or post-accident testing, we handle the entire
          chain of custody with precision.
        </Paragraph>
        <BulletList items={[
          "DOT and non-DOT multi-panel urine drug screens",
          "Oral fluid testing",
          "Breath alcohol testing (BAT)",
          "Support for suspicion, pre-employment, post-incident, and more",
          "MRO (Medical Review Officer) services",
        ]} />
      </ContentSection>
      <ComplianceCallout text="All drug testing services comply with DOT 49 CFR Part 40, FMCSA regulations, and OSHA drug-free workplace standards." />
    </ServicePageLayout>
  );
}

/* ══════════════════════════════════════════════════ */
/* MEDICAL TESTING                                    */
/* ═════════════════════════════════════════════════ */
export function MedicalTestingPage() {
  return (
    <ServicePageLayout
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Testing" }, { label: "Medical Testing" }]}
      title="Occupational Medical Testing Services"
      faqs={[
        { question: "What preventive screenings do you offer?", answer: "We offer cardiovascular screening, diabetes screening, vision screening, and integrated wellness programs — all available at your occupational clinic." },
        { question: "Can testing be done at our worksite?", answer: "Yes. All of our medical testing and preventive screening services are available at your onsite occupational clinic staffed by our healthcare professionals." },
        { question: "What rapid diagnostic tests are available?", answer: "We provide rapid influenza testing, strep throat detection, respiratory illness screening, blood glucose testing, blood pressure monitoring, and EKG testing — all performed by trained professionals at your onsite clinic." },
      ]}
    >
      <ContentSection title="Preventive Screening at Your Occupational Clinic">
        <BulletList items={[
          "Cardiovascular Screening — blood pressure and heart health monitoring at workplace clinic",
          "Diabetes Screening — blood glucose testing at occupational clinic for early detection",
          "Vision Screening — basic eye health assessment at occupational clinic",
          "Wellness Programs — integrated health initiatives at workplace clinic",
        ]} />
      </ContentSection>
      <ContentSection title="Medical Testing Services at Your Occupational Clinic">
        <BulletList items={[
          "Influenza Testing — rapid flu screening at workplace clinics by healthcare professionals",
          "Strep Throat Testing — quick strep detection at occupational clinics for immediate treatment",
          "Respiratory Illness Screening — comprehensive testing at occupational clinics for workplace health",
          "Blood Glucose Testing — diabetes screening at workplace clinics",
          "Blood Pressure Monitoring — cardiovascular screening at occupational clinics for occupational health",
          "EKG Testing — trained professionals to take and interpret tests at onsite clinics for occupational health",
        ]} />
      </ContentSection>
    </ServicePageLayout>
  );
}

/* ══════════════════════════════════════════════════ */
/* CPR TRAINING                                       */
/* ═════════════════════════════════════════════════ */
export function CPRTrainingPage() {
  return (
    <ServicePageLayout
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Training" }, { label: "CPR & AED Training" }]}
      title="CPR, First Aid & AED Training — OSHA-Compliant Certification"
      faqs={[
        { question: "What certifications do participants receive?", answer: "Participants receive nationally recognized CPR, First Aid, and AED certifications valid for two years. Certifications are accepted by OSHA and meet workplace first aid requirements." },
        { question: "Can you train our team at our location?", answer: "Yes. We provide onsite training at your facility, jobsite, or office. Group training is available for teams of any size." },
        { question: "How long does the training take?", answer: "Standard CPR/AED/First Aid certification courses run approximately 4 to 6 hours depending on the curriculum and group size." },
      ]}
    >
      <ContentSection title="Training Programs">
        <Paragraph>
          Our OSHA-compliant CPR, First Aid, and AED training courses prepare your
          workforce to respond to medical emergencies with confidence. Training is
          available onsite wherever our 1st Response onsite clinics operate, nationwide.
        </Paragraph>
        <BulletList items={[
          "CPR/AED for adults, children, and infants",
          "AED deployment and maintenance guidance",
          "Refresher and recertification courses",
        ]} />
      </ContentSection>
      <ContentSection title="Class Formats">
        <BulletList items={[
          "Onsite group training at your facility (recommended for teams of 6+)",
          "Training available at any 1st Response onsite clinic location, nationwide",
          "Custom scheduling to minimize workforce disruption",
        ]} />
      </ContentSection>
      <div className="mt-6">
        <Link
          to="/schedule-consult"
          className="inline-flex items-center px-6 py-3 bg-[#E8621A] text-white rounded-lg hover:bg-[#d4571a] transition-colors"
          style={{ fontSize: "15px", fontWeight: 600 }}
        >
          Schedule Group Training
        </Link>
      </div>
    </ServicePageLayout>
  );
}