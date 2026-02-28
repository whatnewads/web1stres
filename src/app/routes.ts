import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout";
import { HomePage } from "./components/pages/home";
import { ScheduleConsultPage } from "./components/pages/schedule-consult";
import { ScheduleConsultRedirect } from "./components/pages/schedule-consult-redirect";
import { ThanksPage } from "./components/pages/thanks";
import { AboutPage } from "./components/pages/about";
import {
  FirstAidPage,
  TelemedicinePage,
  OnsiteCarePage,
  OnsiteMedicsPage,
  ReferralsPage,
  ManageCasesPage,
  SafetySupportPage,
  EmergencyResponsePage,
  DrugTestingPage,
  MedicalTestingPage,
  CPRTrainingPage,
} from "./components/pages/service-pages";
import {
  TeamPage,
  ContactPage,
  FAQsPage,
  CasesIndexPage,
  HillCaseStudyPage,
  FightingJaysCaseStudyPage,
  BlogIndexPage,
  BlogPostPage,
  StartSitePage,
  FreeResourcesPage,
  ToolboxTalksPage,
  OSHAGuidePage,
  InjuryPreventionGuidePage,
  PrivacyPolicyPage,
  TermsPage,
  Error403Page,
  Error404Page,
  Error429Page,
  Error500Page,
} from "./components/pages/other-pages";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      // Core
      { path: "schedule-consult", Component: ScheduleConsultPage },
      { path: "schedule-consultation", Component: ScheduleConsultRedirect },
      { path: "thanks", Component: ThanksPage },
      { path: "start-site", Component: StartSitePage },
      // About
      { path: "about-us", Component: AboutPage },
      { path: "contact", Component: ContactPage },
      { path: "faqs", Component: FAQsPage },
      { path: "team", Component: TeamPage },
      // Medical Services
      { path: "firstaid-bls-als", Component: FirstAidPage },
      { path: "telemedicine", Component: TelemedicinePage },
      { path: "onsite-care", Component: OnsiteCarePage },
      { path: "onsite-medics", Component: OnsiteMedicsPage },
      { path: "referrals", Component: ReferralsPage },
      // Case Management
      { path: "manage-cases", Component: ManageCasesPage },
      { path: "safety-support", Component: SafetySupportPage },
      { path: "emergency-response", Component: EmergencyResponsePage },
      // Testing & Training
      { path: "drug-testing", Component: DrugTestingPage },
      { path: "medical-testing", Component: MedicalTestingPage },
      { path: "cpr-training", Component: CPRTrainingPage },
      // Case Studies
      { path: "cases", Component: CasesIndexPage },
      { path: "hill", Component: HillCaseStudyPage },
      { path: "fighting-jays", Component: FightingJaysCaseStudyPage },
      // Blog
      { path: "blog", Component: BlogIndexPage },
      { path: "blog/:slug", Component: BlogPostPage },
      // Free Resources
      { path: "free-resources", Component: FreeResourcesPage },
      { path: "toolbox-talks", Component: ToolboxTalksPage },
      { path: "osha-compliance-guide", Component: OSHAGuidePage },
      { path: "injury-prevention-guide", Component: InjuryPreventionGuidePage },
      // Legal
      { path: "privacy-policy", Component: PrivacyPolicyPage },
      { path: "terms-and-conditions", Component: TermsPage },
      // Errors
      { path: "errors/403", Component: Error403Page },
      { path: "errors/404", Component: Error404Page },
      { path: "errors/429", Component: Error429Page },
      { path: "errors/500", Component: Error500Page },
      // Catch-all
      { path: "*", Component: Error404Page },
    ],
  },
]);