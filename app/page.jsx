
import HeroSection from "@/components/hero";
import { featuresData, statsData } from "@/data/landing";
import { Feather } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className=" items-center pt-40">
      <HeroSection />
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((statsData, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{statsData.value}</div>
                <div className="text-gray-600">{statsData.label}</div>
              </div>
            )

            )}
          </div>
        </div>

      </section>
      <section className="py-20">
        <div>
          <h2>Evertthing You Need to manage your Finances</h2>
          <div>
            {featuresData.map((feature, index) => (

              <Card>
                
                <CardContent>
                  {feature.icon}
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </CardContent>
                
              </Card>
            ))}
          </div>
        </div>

      </section>
    </div>


  );
}
