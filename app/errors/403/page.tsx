import { ErrorPage } from "@/components/shared";

export default function Error403() {
  return (
    <ErrorPage
      code="403"
      title="Access Denied"
      message="You don't have permission to access this page."
      links={[
        { label: "Home", href: "/" },
        { label: "Contact Us", href: "/contact" },
        { label: "Schedule a Consult", href: "/schedule-consult" },
      ]}
    />
  );
}
