export function parseResume(text) {
  const emailMatch = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)
  const nameMatch = text.split('\n')[0]
  return {
    name: nameMatch ? nameMatch.trim() : null,
    email: emailMatch ? emailMatch[0] : null,
    raw: text
  }
}
