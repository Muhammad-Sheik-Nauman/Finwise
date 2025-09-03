"use client";

import Link from "next/link";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="pb-20 px-4"> 
    <h1>Manage Your Finances <br />with Intelligence</h1>
    <p>AI-powered financial management platform that helps you track,analyze,and optimize your spending with real time insights</p>

    <div>
        <Link href="/dashboard">
        <Button size="lg" className="px-8">Get Started</Button>
        </Link>
       
         
    </div>


    </div>
  )
}

export default HeroSection;