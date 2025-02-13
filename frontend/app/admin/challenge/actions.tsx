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

    // Validate required fields
    if (
      !title ||
      !deadline ||
      !duration ||
      !moneyPrize ||
      !contactEmail ||
      !projectBrief
    ) {
      return { error: "Please fill in all required fields" };
    }

    // Send data to the backend API
    const response = await fetch("/api/challenges/v1/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        deadline,
        duration,
        moneyPrize,
        contactEmail,
        projectBrief,
        projectDescription,
        projectRequirements,
        deliverables,
      }),
    });

    if (!response.ok) {
      return { error: "Failed to create challenge. Try again later." };
    }

    return await response.json();
  } catch (error) {
    return { error: "Something went wrong. Please try again." };
  }
}

export async function getAllChallenges() {
  const response = await fetch("/api/challenges/v1/get-all");
  return response.json();
}

export async function getChallengeById(id: string) {
  const response = await fetch(`/api/challenges/v1/get-single-challenge/${id}`);
  return response.json();
}

export async function updateChallenge(id: string, formData: any) {
  const response = await fetch(`/api/challenges/v1/update-challenge/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  return response.json();
}

export async function deleteChallenge(id: string) {
  const response = await fetch(`/api/challenges/v1/delete-challenge/${id}`, {
    method: "DELETE",
  });

  return response.json();
}
