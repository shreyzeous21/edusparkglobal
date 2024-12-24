"use client";

import { Card } from "@/components/ui/card";
import React from "react";

const OcCostTable = () => {
  return (
    <div className="flex flex-col gap-10">
      <Card className="max-w-6xl w-full mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">
          <span className="text-green-700">
            OKCU tuition, fees and scholarships
          </span>
        </h1>
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="p-4 text-left"> </th>
              <th className="p-4 text-center">GPA 3.6 and up</th>
              <th className="p-4 text-center">GPA 3.3 to 3.59</th>
              <th className="p-4 text-center">GPA 3.0 to 3.29</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="p-4 font-medium">Block Tuition</td>
              <td className="p-4 text-center">$26,250</td>
              <td className="p-4 text-center">$26,250</td>
              <td className="p-4 text-center">$26,250</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-4 font-medium">University Fees</td>
              <td className="p-4 text-center">$9,240</td>
              <td className="p-4 text-center">$9,240</td>
              <td className="p-4 text-center">$9,240</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-4 font-medium">Nursing Fees</td>
              <td className="p-4 text-center">$5,320</td>
              <td className="p-4 text-center">$5,320</td>
              <td className="p-4 text-center">$5,320</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-4 font-medium">
                Academic and Departmental Merit Scholarships
              </td>
              <td className="p-4 text-center">$17,250</td>
              <td className="p-4 text-center">$13,500</td>
              <td className="p-4 text-center">$9,750</td>
            </tr>
            <tr className="bg-green-700 text-white font-semibold">
              <td className="p-4">Total Tuition and Fees You Pay</td>
              <td className="p-4 text-center">$23,560</td>
              <td className="p-4 text-center">$27,310</td>
              <td className="p-4 text-center">$31,060</td>
            </tr>
          </tbody>
        </table>
      </Card>

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
              <td className="p-4 text-right">$41,000</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-4 font-medium">
                Estimated living expenses – (Housing, meals, vehicle, insurance)
              </td>
              <td className="p-4 text-right">$20,000-$25,000</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-4 font-medium">Scholarships</td>
              <td className="p-4 text-right">$9,750-17,250</td>
            </tr>
            <tr className="bg-green-700 text-white">
              <td className="p-4 font-semibold">
                Estimated total out of pocket funds required for one year after
                scholarships
              </td>
              <td className="p-4 text-right font-semibold">$44,000-$57,000</td>
            </tr>
          </tbody>
        </table>
      </Card>

      <Card className="max-w-6xl w-full mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">
          <span className="text-green-700 underline">Online</span> pre-requisite
          courses (OKCU){" "}
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
              <td className="p-4">MATH 101: College Algebra (3 credits)</td>
              <td className="p-4 text-right">$669</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-4">
                BIOD 171: Essential Microbiology with Lab (4 credits)
              </td>
              <td className="p-4 text-right">$892</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-4">
                CHEM 103: General Chemistry 1 with lab (4 credits)
              </td>
              <td className="p-4 text-right">$892</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-4">PSYC 101: General Psychology (3 credits)</td>
              <td className="p-4 text-right">$669</td>
            </tr>
            <tr className="bg-green-700 text-white font-semibold">
              <td className="p-4">
                Total Potential Cost (before scholarships)
              </td>
              <td className="p-4 text-right">$4,906</td>
            </tr>
            <tr className="bg-green-700 text-white font-semibold">
              <td className="p-4">
                Total Potential Cost (no prior Bachelors Degree)
              </td>
              <td className="p-4 text-right">$5,575</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default OcCostTable;
