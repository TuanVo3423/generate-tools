import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  PromptTemplate,
  SystemMessagePromptTemplate,
} from 'langchain/prompts';
import { NUMBER_QUESTIONS } from '@/constants';
export const useGenerateQuestionWithNoAnswerPrompt = () => {
  const chatPrompt = ChatPromptTemplate.fromPromptMessages([
    SystemMessagePromptTemplate.fromTemplate('You are a project manager.'),
    HumanMessagePromptTemplate.fromTemplate(
      `The new client project is called {name}.The project description is: {description} (can be based on the above details).List ${NUMBER_QUESTIONS} questions necessary for writing a detailed and complete Project Specifications document for this project, delete question about timelines, milestones. Write in a clear and concise style.`
    ),
  ]);
  return {
    chatPrompt,
  };
};

export const useGenerateQuestionWithAnswerPrompt = () => {
  const chatPrompt = ChatPromptTemplate.fromPromptMessages([
    SystemMessagePromptTemplate.fromTemplate('You are a project manager.'),
    HumanMessagePromptTemplate.fromTemplate(
      '{QASelectedPrompt}. Provide list answers for question: ${question}. Write in a clear and concise style. Each answer corresponds to the number at the beginning.Go to the main content, first line is the answers!'
    ),
  ]);
  return {
    chatPrompt,
  };
};

export const useGenerateDocumentPrompt = () => {
  const chatPrompt = ChatPromptTemplate.fromPromptMessages([
    SystemMessagePromptTemplate.fromTemplate('You are a project manager.'),
    HumanMessagePromptTemplate.fromTemplate(
      `Using the information I provide, you should generate a proposal document in a word-processing format with the following sections:

      1. Introduction: Provide a brief description of the software's purpose and its intended audience.
      2. Project Overview: Describe the features of the software, the programming language and operating system it will use, and the methodology that will be used to develop the project.
      3. Functional Objectives: Divide provided features into small subsection and describe them in detail matching on current software, including specific use cases or scenarios.
      4. Non-functional Objectives: Outline the non-functional objectives of the software, such as performance or security requirements.
      5. Project Scope: Define the scope of the project, including any constraints or limitations that may impact the development or delivery of the software.
      6. Project Plan: Detail the timeline and milestones for the project, including the phases of development and testing.
      7. Conclusion: Summarize the key details and objectives of the software, and express confidence in delivering the project according to the specified objectives and requirements.
      This is software information I provide:
      + Software name: {name}
      + Description: {description}
      +A list of questions with corresponding answers describing the characteristics of the application:
      {convertOptionsToString}
      The document should be written in a clear and concise style, formatted like a standard business proposal, and include any specific terminology or language you provide. Please generate an HTML code snippet that contains the content.The generated HTML code should be valid and well-formatted. Please exclude any content outside the <body> tag.`
    ),
  ]);
  return {
    chatPrompt,
  };
};

export const useGenerateQuestionWithNoAnswerPromptV2 = () => {
  const chatPrompt =
    PromptTemplate.fromTemplate(`The following is a friendly conversation between a human and an AI. Write in a clear and concise style.Each answer corresponds to the number at the beginning. Go to the main content, first line is the answers!

  Current conversation:
  {chat_history}
  Human: Provide list answers for question: {input}.
  AI:`);
  return {
    chatPrompt,
  };
};
