const { GoogleGenerativeAI } = require("@google/generative-ai");


const genAI = new GoogleGenerativeAI("AIzaSyA62S6MOA4x3KT4hmd3yUfq6vN0IYLktno");

async function analyzeData() {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = "Want to get fruit name .";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let summary = response.text();
    console.log(summary);
}

analyzeData();