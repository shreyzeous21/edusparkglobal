"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, ArrowRight } from "lucide-react";
import { VisuallyHidden } from "./ui/VisuallyHiddenEnroll";

export function EnrollmentModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    setIsOpen(false);
  };

  return (
    <>
      <Button
        className="bg-orange-500 hover:bg-orange-600 text-white"
        onClick={() => setIsOpen(true)}
      >
        Enroll Now
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[500px] p-0">
          <VisuallyHidden>
            <DialogTitle>Enrollment Form</DialogTitle>
          </VisuallyHidden>
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Enroll Now</h2>
              <Button
                variant="ghost"
                className="h-6 w-6 p-0 hover:bg-transparent"
                onClick={() => setIsOpen(false)}
              >
                {/* <X className="h-4 w-4" /> */}
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Enter Full Name"
                className="w-full border-gray-200"
                required
              />

              <Input
                type="email"
                placeholder="Enter Your Email"
                className="w-full border-gray-200"
                required
              />

              <Input
                type="tel"
                placeholder="Enter Mobile Number"
                className="w-full border-gray-200"
                required
              />

              <Select>
                <SelectTrigger className="w-full border-gray-200">
                  <SelectValue placeholder="Choose College" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="college1">UPES Online</SelectItem>
                  <SelectItem value="college2">Aimer B School</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full border-gray-200">
                  <SelectValue placeholder="Select Programs..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="program1">Program 1</SelectItem>
                  <SelectItem value="program2">Program 2</SelectItem>
                  <SelectItem value="program3">Program 3</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full border-gray-200">
                  <SelectValue placeholder="Select Courses..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="course1">Course 1</SelectItem>
                  <SelectItem value="course2">Course 2</SelectItem>
                  <SelectItem value="course3">Course 3</SelectItem>
                </SelectContent>
              </Select>

              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-6 mt-6"
              >
                Submit Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
