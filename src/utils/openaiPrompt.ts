export const NUMBER_OPTIONS = 4;
export const QuestionsPrompt = (description: string, name: string): string => {
  const prompt = `The new client project is called ${name}.The project description is: ${description}. 
  List 5 questions necessary for writing a detailed and complete Project Specifications document for this project.
  Write in a clear and concise style.
    `;
  return prompt;
};

export const OptionsPrompt = (question: string) => {
  const prompt = `Provide list answers for question: ${question}. Write in a clear and concise style.`;
  return prompt;
};

export const DocumentPrompt = (
  name: string,
  description: string,
  options: any[]
) => {
  const convertOptionsToString = options
    .map((option) => `Question: ${option.content} Answer: ${option.options}`)
    .join('\n');
  const prompt = `Using the information I provide, you should generate a proposal document in a word-processing format with the following sections:

  1. Introduction: Provide a brief description of the software's purpose and its intended audience.
  2. Project Overview: Describe the features of the software, the programming language and operating system it will use, and the methodology that will be used to develop the project.
  3. Functional Objectives: Divide provided features into small subsection and describe them in detail matching on current software, including specific use cases or scenarios.
  4. Non-functional Objectives: Outline the non-functional objectives of the software, such as performance or security requirements.
  5. Project Scope: Define the scope of the project, including any constraints or limitations that may impact the development or delivery of the software.
  6. Project Plan: Detail the timeline and milestones for the project, including the phases of development and testing.
  7. Budget: Provide a breakdown of the estimated costs for developing and delivering the software, including any resources or tools required.
  8. Conclusion: Summarize the key details and objectives of the software, and express confidence in delivering the project according to the specified objectives and requirements.
  
  This is software information I provide:
  + Software name: ${name}
  + Description: ${description}
  +A list of questions with corresponding answers describing the characteristics of the application:\n
  ${convertOptionsToString}
  
  The document should be written in a clear and concise style, formatted like a standard business proposal, and include any specific terminology or language you provide. The final document should be provided in a word processing format and be a minimum of 3 pages in length. The generated document is marked using markdown.`;
  return prompt;
};

export const ImagePrompt = (description: string) => {
  const prompt = `${description}`;
  return prompt;
};
