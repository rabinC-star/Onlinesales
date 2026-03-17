import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProfilePage() {
  return (
    <section className="mx-auto max-w-3xl space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Profile Placeholder</CardTitle>
          <p className="text-sm text-slate-500">
            This section is intentionally UI-only and ready for backend profile data integration.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <Badge>UI Placeholder</Badge>
            <Badge variant="secondary">Spring Boot Ready</Badge>
          </div>
          <p className="text-slate-600">
            Future backend endpoints can populate user metadata, saved listings, and listing management history.
          </p>
          <ul className="list-inside list-disc space-y-1 text-sm text-slate-500">
            <li>{"// TODO: connect profile summary endpoint"}</li>
            <li>{"// TODO: connect seller listings endpoint"}</li>
            <li>{"// TODO: connect saved favorites endpoint"}</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
