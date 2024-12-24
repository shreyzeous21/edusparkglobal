"use client";

import { Card } from "@/components/ui/card";
import React from "react";

const CostTable = () => {
  return (
    <div className="flex flex-col gap-10">
      <Card className="max-w-6xl w-full mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">
          Estimated Costs <span className="text-green-600">DURING</span> your{" "}
          <span className="underline">in-person</span> degree,{" "}
          <span className="text-green-600">paid in installments</span>
        </h1>
        <table className="w-full table-auto border-collapse border border-gray-300">
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="p-4 font-medium">
                Tuition and fees (before scholarship)
              </td>
              <td className="p-4 text-right">$87,924</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-4 font-medium">
                Estimated living expenses – (Housing, meals, vehicle, insurance)
              </td>
              <td className="p-4 text-right">$15,000-$20,000</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-4 font-medium">Scholarships</td>
              <td className="p-4 text-right">$50,000</td>
            </tr>
            <tr className="bg-green-700 text-white">
              <td className="p-4 font-semibold">
                Estimated total out of pocket funds required for one year after
                scholarships
              </td>
              <td className="p-4 text-right font-semibold">$50,000-$60,000</td>
            </tr>
          </tbody>
        </table>
      </Card>
      <Card className="max-w-6xl w-full mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">
          <span className="text-green-700 underline">Online</span> pre-requisite
          courses (URMC){" "}
          <span className="text-green-700 underline">Paid in installments</span>
        </h1>
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="p-4 text-left">Name of course</th>
              <th className="p-4 text-right">Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="p-4">
                PSYC 140: Developmental (Lifespan) Psychology (3 credits)
              </td>
              <td className="p-4 text-right">$669</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-4">
                BIOD 121: Essentials in Nutrition (3 credits)
              </td>
              <td className="p-4 text-right">$669</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-4">
                BIOD 151: Essential Human Anatomy & Physiology I with Lab (4
                credits)
              </td>
              <td className="p-4 text-right">$892</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-4">
                BIOD 152: Essential Human Anatomy & Physiology II with Lab (4
                credits)
              </td>
              <td className="p-4 text-right">$892</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-4">
                MATH 110: Introduction to Statistics (3 credits)
              </td>
              <td className="p-4 text-right">$669</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-4">
                BIOD 171: Essential Microbiology with Lab (4 credits)
              </td>
              <td className="p-4 text-right">$892</td>
            </tr>
            <tr className="bg-green-700 text-white font-semibold">
              <td className="p-4">
                Total Potential Cost (before scholarships)
              </td>
              <td className="p-4 text-right">$4,683</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default CostTable;
