import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";
import React from "react";

const ContactForm = () => {
  return (
    <div className="flex justify-center mx-auto items-center px-4">
      <div className="flex justify-between lg:flex-row flex-col gap-4 h-full items-center max-w-6xl w-full mx-auto">
        <div className="lg:w-1/2 h-auto flex flex-col gap-2 ">
          <Card className="flex bg-slate-100 h-full w-full p-4 items-center shadow-md">
            <div className="flex flex-col gap-2">
              <h4 className="text-lg flex items-center font-semibold">
                <MapPin />
                Address
              </h4>
              <Separator />
              <p className="text-sm ml-2 text-gray-600">
                <strong>Banglore:</strong> Chikkagubbi Main Rd, Chikkagubbi
                Village, Bengaluru, Karnataka 560077
                <br />
                <strong>Noida:</strong> 338, Tower C, Bhutani Cyber Park, Sec
                62, Noida, U.P 201301
              </p>
            </div>
          </Card>
          <Card className="flex bg-slate-100 h-full w-full p-4 items-center shadow-md flex-row">
            <div className="flex flex-col w-full gap-2">
              <h4 className="text-lg flex gap-1 items-center font-semibold">
                <PhoneCall /> Phone
              </h4>
              <Separator />

              <Link
                href={"tel:+918073719330"}
                className="text-sm ml-2 transition duration-300 hover:text-orange-500 text-gray-600"
              >
                +91-8073719330
              </Link>
            </div>
          </Card>
          <Card className="flex bg-slate-100 h-full w-full p-4 items-center shadow-md flex-row">
            <div className="flex flex-col w-full gap-2">
              <h4 className="text-lg flex gap-1 items-center font-semibold">
                {" "}
                <Mail />
                Email
              </h4>
              <Separator />
              <Link
                href={"mailto:info@edusparkglobal.com"}
                className="text-sm ml-2 transition duration-300 hover:text-orange-500 text-gray-600"
              >
                info@edusparkglobal.com
              </Link>
            </div>
          </Card>
        </div>
        <div className="w-full flex flex-col h-auto p-6 bg-slate-100 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Send Us Message</h2>
          <p className="text-sm text-gray-500 mb-6">
            Your email address will not be published. Required fields are marked
            *
          </p>
          <form className="space-y-4 w-full">
            <Textarea
              placeholder="Comment"
              rows={5}
              className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                type="text"
                placeholder="Name *"
                className="border border-gray-300 rounded-md"
              />
              <Input
                type="email"
                placeholder="E-mail *"
                className="border border-gray-300 rounded-md"
              />
              <Input
                type="text"
                placeholder="Website *"
                className="border border-gray-300 rounded-md"
              />
            </div>
            <Button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md shadow-md w-fit"
            >
              Submit Now →
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
