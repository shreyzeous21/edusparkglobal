import React from "react";
import { Separator } from "./ui/separator";
import { Building, GraduationCap, TrendingUp, Users } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const FooterUpper = () => {
  return (
    <div className=" py-10">
      <div className="mx-auto max-w-6xl px-4 ">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Partner Section */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-6">
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">
                  Partner with EduSpark Global
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Join forces with us to shape the future of education.
                  Together, we can create innovative learning experiences and
                  expand our reach.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Building className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-blue-900">
                    Access to cutting-edge educational resources
                  </span>
                </div>

                <div className="flex items-center gap-4 p-3 bg-green-50 rounded-lg">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-green-900">
                    Expand your market reach and visibility
                  </span>
                </div>

                <div className="flex items-center gap-4 p-3 bg-purple-50 rounded-lg">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <span className="text-purple-900">
                    Collaborate with industry-leading experts
                  </span>
                </div>
              </div>

              <Button
                variant="default"
                asChild
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Link href="/contact">Become a Partner</Link>
              </Button>
            </div>
          </div>

          {/* Refer Section */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-6">
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">
                  Refer and Earn Rewards
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Share the gift of learning with others. Refer students to
                  EduSpark Global and earn exciting rewards while helping them
                  succeed.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-orange-50 rounded-lg">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <GraduationCap className="h-5 w-5 text-orange-600" />
                  </div>
                  <span className="text-orange-900">
                    Get rewards for successful referrals
                  </span>
                </div>

                <div className="flex items-center gap-4 p-3 bg-teal-50 rounded-lg">
                  <div className="bg-teal-100 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-teal-600" />
                  </div>
                  <span className="text-teal-900">
                    Help others access quality education
                  </span>
                </div>

                <div className="flex items-center gap-4 p-3 bg-rose-50 rounded-lg">
                  <div className="bg-rose-100 p-2 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-rose-600" />
                  </div>
                  <span className="text-rose-900">
                    Track your referral progress easily
                  </span>
                </div>
              </div>

              <Button
                variant="default"
                asChild
                className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white"
              >
                <Link href="/contact">Start Referring</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterUpper;
