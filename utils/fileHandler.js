// utils/fileHandler.js
export const fileHandler = async (file) => {
  if (!file) return "";

  try {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/resume", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Resume parsing failed");
    }

    return data.text || "";
  } catch (error) {
    console.error("File handler error:", error);
    throw error;
  }
};