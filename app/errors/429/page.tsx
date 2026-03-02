import { ErrorPage } from "@/components/shared";

export default function Error429() {
  return (
    <ErrorPage
      code="429"
      title="Too Many Requests"
      message="Please wait a moment before trying again. This limit resets automatically."
      links={[{ label: "Home", href: "/" }]}
    />
  );
}
