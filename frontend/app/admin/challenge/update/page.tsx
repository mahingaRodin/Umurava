/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import { Header } from "../../components/ui/header";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import Link from "next/link";

interface FormData {
  title: string;
  deadline: string;
  duration: string;
  moneyPrize: string;
  contactEmail: string;
  projectBrief: string;
  projectDescription: string;
  projectRequirements: string;
  deliverables: string;
}

const initialData: FormData = {
  title: "Design a Dashboard for SokoFund",
  deadline: "2024-12-24",
  duration: "7 Days",
  moneyPrize: "$150",
  contactEmail: "talent@umurava.africa",
  projectBrief:
    "A Fintech company that is developing a Digital Financial Platform designed for businesses and their workforce in Africa is partnering with Umurava to run a Skills Challenge for Product Design. This Fintech Company offers Payroll Management System to Employers and Embedded Financial services and products to Employees and Gig Workers across Africa.",
  projectDescription:
    "• User Interface Design for each step\n• Creating wireframes to outline the basic structure and layout of the web and mobile app\n• Designing visually appealing and user-friendly interfaces for the web and mobile apps focusing on usability and user experience\n• Ensuring the web application works seamlessly across web, mobile, and tablet devices\n• Provide a feedback session for in-development guidance",
  projectRequirements:
    "• UX research to understand Project Requirements\n• Understanding User Needs\n• Understanding Business Goals\n• Determine interaction between users\n• Requirements Catalog",
  deliverables:
    "The Product Designer will provide all documents and deliverables to the client before the review meetings",
};

export default function editChall() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push(`/challenge/${1}`);
    } catch (error) {
      console.error("Failed to update challenge:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-black bg-white">
      <Header />

      {/* Breadcrumb Navigation */}
      <nav className="flex gap-2 items-center px-6 py-4 text-sm text-gray-600">
        <Link href="/challenge" className="hover:underline">
          Go Back
        </Link>
        <span>/</span>
        <Link href="/challenge" className="hover:underline">
          Challenges & Hackathons
        </Link>
        <span>/</span>
        <span className="font-medium text-blue-600">Create New Challenge</span>
      </nav>

      {/* Main Content */}
      <main className="flex justify-center items-center px-6 py-8">
        <div className="p-6 w-full max-w-3xl bg-white rounded-lg shadow-md">
          <h1 className="mb-2 text-2xl font-bold text-center">
            Edit a Challenge
          </h1>
          <p className="mb-6 text-sm text-center text-gray-500">
            Fill out these details to build your broadcast
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium">
                Challenge/Hackathon Title
              </label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-2 w-full"
              />
            </div>

            {/* Deadline and Duration */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="deadline" className="block text-sm font-medium">
                  Deadline
                </label>
                <Input
                  id="deadline"
                  name="deadline"
                  type="date"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="mt-2 w-full"
                />
              </div>
              <div>
                <label htmlFor="duration" className="block text-sm font-medium">
                  Duration
                </label>
                <Input
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="mt-2 w-full"
                />
              </div>
            </div>

            {/* Money Prize and Contact Email */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="moneyPrize"
                  className="block text-sm font-medium"
                >
                  Money Prize
                </label>
                <Input
                  id="moneyPrize"
                  name="moneyPrize"
                  value={formData.moneyPrize}
                  onChange={handleChange}
                  className="mt-2 w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="contactEmail"
                  className="block text-sm font-medium"
                >
                  Contact Email
                </label>
                <Input
                  id="contactEmail"
                  name="contactEmail"
                  type="email"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  className="mt-2 w-full"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="projectBrief"
                className="block text-sm font-medium"
              >
                Project Brief
              </label>
              <Textarea
                id="projectBrief"
                name="projectBrief"
                value={formData.projectBrief}
                onChange={handleChange}
                className="overflow-hidden mt-2 w-full resize-none"
                rows={8}
              />
            </div>

            <div>
              <label
                htmlFor="projectDescription"
                className="block text-sm font-medium"
              >
                Project Description
              </label>
              <Textarea
                id="projectDescription"
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                className="overflow-hidden mt-2 w-full resize-none"
                rows={8}
              />
            </div>

            {/* Project Requirements */}
            <div>
              <label
                htmlFor="projectRequirements"
                className="block text-sm font-medium"
              >
                Project Requirements
              </label>
              <Textarea
                id="projectRequirements"
                name="projectRequirements"
                value={formData.projectRequirements}
                onChange={handleChange}
                className="overflow-hidden mt-2 w-full resize-none"
                rows={8}
              />
            </div>

            {/* Deliverables */}
            <div>
              <label
                htmlFor="deliverables"
                className="block text-sm font-medium"
              >
                Deliverables
              </label>
              <Textarea
                id="deliverables"
                name="deliverables"
                value={formData.deliverables}
                onChange={handleChange}
                className="mt-2 w-full"
                rows={8}
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 justify-end">
              <Button variant="outline" asChild>
                <Link href="/challenge">Cancel</Link>
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Updating..." : "Update Challenge"}
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
