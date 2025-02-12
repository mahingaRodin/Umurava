import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Header } from "../components/ui/header";
import Image from "next/image";

interface Stat {
  title: string;
  value: string;
  change: string;
}

const DashboardPage: React.FC = () => {
  const stats: Stat[] = [
    {
      title: "Total Challenge",
      value: "29,405",
      change: "+1.5%",
    },
    {
      title: "Total Participants",
      value: "29,405",
      change: "+1.8%",
    },
    {
      title: "Completed Challenges",
      value: "5,837",
      change: "+1.5%",
    },
    {
      title: "Open Challenges",
      value: "5,837",
      change: "+3.5%",
    },
    {
      title: "Ongoing Challenges",
      value: "5,837",
      change: "+1.5%",
    },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <Header />
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-black">
            Welcome back Hilaire,
          </h1>
          <p className="text-black">
            Build Work Experience through Skills Challenges
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-black">{stat.title}</p>
                  <h2 className="text-2xl font-bold mt-1 text-black">
                    {stat.value}
                  </h2>
                </div>
                <span className="text-sm text-green-600">{stat.change}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-black">
            Recent Challenges
          </h2>
          <Button variant="link">See all</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="relative h-32 mb-4 bg-blue-600 rounded-lg">
                  <div className="flex justify-center items-center h-full">
                    <Image
                      src="/images/logo.png"
                      alt="Umurava logo"
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                    <span className="text-xl font-bold text-white-800">
                      Umurava
                    </span>
                  </div>
                  <Badge className="absolute top-2 right-2 bg-green-500">
                    Open
                  </Badge>
                </div>
                <h3 className="font-semibold mb-2 text-black">
                  Design a Dashboard for SokoFund
                </h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-semibold text-black mb-1">
                      Skills Needed:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">UX/UI Design</Badge>
                      <Badge variant="secondary">User Research</Badge>
                      <Badge variant="secondary">User Research</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black mb-1">
                      Seniority Level:
                    </p>
                    <p className="text-sm text-black">
                      Junior, Intermediate, Senior
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black mb-1">
                      Timeline:
                    </p>
                    <p className="text-sm text-black">15 Days</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-48 bg-blue-600 text-white hover:bg-blue-700 ">
                  View Challenge
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
