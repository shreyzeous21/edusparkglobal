import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send } from "lucide-react"; // Import icons
import React from "react";

const EmailBanner = () => {
  return (
    <div className="flex lg:h-[50vh] h-[30vh] justify-center items-center mx-auto px-4 w-full bg-gradient-to-r from-orange-500 via-slate-800 to-gray-900">
      <div className="max-w-6xl w-full mx-auto lg:justify-between justify-center lg:flex-row flex-col flex items-center h-full">
        {/* Left Section */}
        <div className="lg:w-1/3 hidden lg:block bg-[url('/emailBanner.png')] bg-center bg-contain bg-no-repeat h-full"></div>

        {/* Right Section */}
        <div className="flex flex-col justify-center gap-6 lg:w-1/2 mx-auto text-center lg:text-left">
          <h2 className="text-4xl text-white font-bold leading-tight">
            Stay Updated with the Latest Courses & Insights!
          </h2>
          <div className="flex flex-row gap-4 items-center">
            <Input
              placeholder="Enter Your Email"
              className="text-white bg-gray-800/50 placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500 rounded-md"
            />
            <Button
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md shadow-lg"
              variant="outline"
            >
              <Send className="w-5 h-5" />
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailBanner;
