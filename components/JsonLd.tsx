// Renders a JSON-LD <script> tag. Next.js allows this via
// dangerouslySetInnerHTML for structured data; the payload is our own
// serialized object, so there is no user-injection risk.

export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
