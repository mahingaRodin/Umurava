/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Header } from "../../components/ui/header";
import { createChallenge } from "../actions";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function newChall() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(event.currentTarget);

    try {
      const result = await createChallenge(formData);

      if (result.error) {
        setError(result.error);
        return;
      }

      router.push("/challenge");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="px-6 py-2 bg-white border-b shadow-sm">
        <div className="flex gap-2 items-center text-sm text-gray-600">
          <button
            className="flex gap-1 items-center text-black font-semi-bold hover:underline"
            onClick={() => router.back()}
          >
            <ChevronLeft className="w-4 h-4" />
            Go Back
          </button>
          <span>/</span>
          <span>Challenges & Hackathons</span>
          <span>/</span>
          <span className="font-medium text-blue-600 hover:underline">
            Create New Challenge
          </span>
        </div>
      </div>

      <div className="px-6 pt-6"></div>

      <div className="flex items-center justify-center min-h-[calc(100vh-160px)] px-4">
        <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-4xl">
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <p className="mb-4 text-sm text-center text-gray-600">
                  Fill out these details to build your broadcast
                </p>

                <Label htmlFor="title" className="text-black">
                  Challenge/Hackathon Title
                </Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Enter title"
                  required
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="deadline" className="text-black">
                    Deadline
                  </Label>
                  <Input
                    id="deadline"
                    name="deadline"
                    placeholder="Date"
                    type="date"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="duration" className="text-black">
                    Duration
                  </Label>
                  <Input
                    id="duration"
                    name="duration"
                    placeholder="Duration"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="moneyPrize" className="text-black">
                    Money Prize
                  </Label>
                  <Input
                    id="moneyPrize"
                    name="moneyPrize"
                    placeholder="Prize"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="contactEmail" className="text-black">
                    Contact Email
                  </Label>
                  <Input
                    id="contactEmail"
                    name="contactEmail"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="projectDescription" className="text-black">
                  Project Description
                </Label>
                <Textarea
                  id="projectDescription"
                  name="projectDescription"
                  placeholder="Enter text here..."
                  className="min-h-[100px]"
                  maxLength={150}
                  required
                />
                <p className="mt-1 text-xs text-black">
                  Keep this simple of 250 characters
                </p>
              </div>

              <div>
                <Label htmlFor="projectBrief" className="text-black">
                  Project Brief
                </Label>
                <Textarea
                  id="projectBrief"
                  name="projectBrief"
                  placeholder="Enter text here..."
                  className="min-h-[100px]"
                />
                <p className="mt-1 text-xs text-black">
                  Keep this simple of 50 characters
                </p>
              </div>

              <div>
                <Label htmlFor="projectRequirements" className="text-black">
                  Project Description & Tasks
                </Label>
                <Textarea
                  id="projectRequirements"
                  name="projectRequirements"
                  placeholder="Enter text here..."
                  className="min-h-[100px]"
                />
                <p className="mt-1 text-xs text-black">
                  Keep this simple of 500 characters
                </p>
              </div>
            </div>
          </Card>

          {error && <div className="text-sm text-red-500">{error}</div>}
          <div className="flex gap-4 justify-center mb-4">
            <Button
              variant="outline"
              asChild
              className="px-4 py-2 text-lg text-blue-500 border-blue-500"
            >
              <Link href="/challenge">Cancel</Link>
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 text-lg text-white bg-blue-500 hover:bg-blue-600"
            >
              <Link href="/challenge/edit">
                {" "}
                {isSubmitting ? "Creating..." : "Create Challenge"}{" "}
              </Link>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
