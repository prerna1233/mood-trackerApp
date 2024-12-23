// // aiGenerator.js


import { GoogleGenerativeAI } from "@google/generative-ai";

export async function generateAIContent(prompt) {
    try {
        const API_KEY = "AIzaSyA62S6MOA4x3KT4hmd3yUfq6vN0IYLktno";
        const MODEL_TYPE = "gemini-1.5-flash";

        // Initialize the GoogleGenerativeAI client
        const genAI = new GoogleGenerativeAI({ apiKey: API_KEY });

        // Fetch the model
        const model = genAI.getGenerativeModel({ model: MODEL_TYPE });

        // Generate content
        const result = await model.generateContent({ prompt });
        // npm install @google/generative-ai

        // Log and return the result
        console.log(result);
        return result.response.text;
    } catch (error) {
        console.error("Error generating AI content:", error.message);
        throw new Error(error.message);
    }
}





// export async function generateAIContent(prompt) {
//   const API_KEY = "AIzaSyA62S6MOA4x3KT4hmd3yUfq6vN0IYLktno"; // Replace with a valid API key
//   const MODEL_TYPE = "models/text-bison-001"; // Use the correct model endpoint

//   try {
//       const response = await fetch(
//           `https://generativelanguage.googleapis.com/v1beta2/${MODEL_TYPE}:generateText?key=${API_KEY}`,
//           {
//               method: "POST",
//               headers: {
//                   "Content-Type": "application/json",
//               },
//               body: JSON.stringify({
//                   prompt: { text: prompt },
//               }),
//           }
//       );

//       if (!response.ok) {
//           throw new Error(`API error: ${response.status} ${response.statusText}`);
//       }

//       const data = await response.json();
//       console.log("AI Response:", data);
//       return data.candidates?.[0]?.output || "No response from AI."; // Adjust based on API response structure
//   } catch (error) {
//       console.error("Error generating AI content:", error);
//       return "Error generating AI content.";
//   }
// }

















