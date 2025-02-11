/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

export async function createChallenge(formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const deadline = formData.get("deadline") as string;
    const duration = formData.get("duration") as string;
    const moneyPrize = formData.get("moneyPrize") as string;
    const contactEmail = formData.get("contactEmail") as string;
    const projectBrief = formData.get("projectBrief") as string;
    const projectDescription = formData.get("projectDescription") as string;
    const projectRequirements = formData.get("projectRequirements") as string;
    const deliverables = formData.get("deliverables") as string;

    if (
      !title ||
      !deadline ||
      !duration ||
      !moneyPrize ||
      !contactEmail ||
      !projectBrief
    ) {
      return {
        error: "Please fill in all required fields",
      };
    }

    return {
      success: true,
      message: "Challenge created successfully",
    };
  } catch (error) {
    return {
      error: "Something went wrong. Please try again.",
    };
  }
}
