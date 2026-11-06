import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Hobbies() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Hobbies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card><CardHeader><CardTitle>Gaming</CardTitle></CardHeader></Card>
        <Card><CardHeader><CardTitle>Music</CardTitle></CardHeader></Card>
        <Card><CardHeader><CardTitle>Reading</CardTitle></CardHeader></Card>
        <Card><CardHeader><CardTitle>Coding</CardTitle></CardHeader></Card>
      </div>
    </div>
  );
}