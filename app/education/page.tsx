import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Education() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Education</h1>
      <Card>
        <CardHeader>
          <CardTitle>Bachelor of Science in Computer Science / IT</CardTitle>
        </CardHeader>
        <CardContent>
          <p>2023 - Present</p>
        </CardContent>
      </Card>
    </div>
  );
}