import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export function TabsDemo() {
  const [formData, setFormData] = useState({
    weeks: "",
    juz: "",
  });
  const [hasil, setHasil] = useState([0]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sumWeeks = parseFloat(formData.weeks);
    const result = sumWeeks * 5;
    setHasil(result);
  };

  const handleSubmitJuz = (e) => {
    e.preventDefault();
    const sumWeeks = parseFloat(formData.juz);
    const result = sumWeeks /5;
    setHasil(result);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Tabs defaultValue="weeks" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="weeks">Count Weeks</TabsTrigger>
          <TabsTrigger value="juz">Count juz</TabsTrigger>
        </TabsList>
        <TabsContent value="weeks">
          <Card>
            <CardHeader>
              <CardTitle>How long does it take to memorize juz? </CardTitle>
              <CardDescription>To count weeks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <form onSubmit={handleSubmit}>
                <div className="space-y-1">
                  <Label htmlFor="weeks">Enter Juz sum</Label>
                  <Input type="number" min="1" max="30" name="weeks" onChange={handleChange} />
                </div>
                <Button type="submit" className="mt-2">
                  Submit
                </Button>
              </form>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="juz">
          <Card>
            <CardHeader>
              <CardTitle> How many juz do I have to memorize in that weeks?</CardTitle>
              <CardDescription>
                To count juz
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <form onSubmit={handleSubmitJuz}>
                <div className="space-y-1">
                  <Label htmlFor="current">Enter weeks</Label>
                  <Input
                    id="current"
                    name="juz"
                    onChange={handleChange}
                    type="number"
                    min="0"
                    max="150"
                  />
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      <p className="pt-5">hasilnya: {hasil}</p>
    </div>
  );
}
