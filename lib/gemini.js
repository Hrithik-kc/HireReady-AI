// Simple wrapper / stub for an LLM-like analysis. Replace with real Gemini/LLM calls.
export async function analyzeText(resumeText, jobDescription = '') {
  // For now return a very small analysis object
  const score = Math.min(100, 50 + Math.round((resumeText.length / 100) + (jobDescription.length / 200)))
  return {
    summary: `Detected ${resumeText.split('\n').length} lines in resume.`,
    matchScore: score,
    tips: ['Highlight relevant keywords', 'Quantify achievements']
  }
}

export async function generateQuestions(jobDescription) {
  // Produce 5 simple QA prompts based on JD length
  const base = jobDescription ? jobDescription.slice(0, 120) : 'Role description'
  const questions = [
    `Tell me about a project where you used skills relevant to: ${base}`,
    'How do you approach debugging a hard production issue?',
    'Describe a time you improved performance in a system.',
    'Explain a complex technical concept to a non-technical stakeholder.',
    'What questions do you have for the hiring team?'
  ]
  return questions
}
