import { ErrorPage } from "@/components/shared";

export default function NotFound() {
  return (
    <ErrorPage
      code="404"
      title="Page Not Found"
      message="The page you're looking for doesn't exist or has been moved."
      links={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/#services" },
        { label: "Drug Testing", href: "/drug-testing" },
        { label: "Contact", href: "/contact" },
      ]}
    />
  );
}
