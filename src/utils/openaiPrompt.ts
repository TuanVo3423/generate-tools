export const chatGPTPrompt = (type: string, name: string): string => {
  const prompt = `I'm a programmer, I want to create an app of type ${type}, named ${name}. Please list me 3 functions, for each function, list 3 options about that function. Note that the return result must be like this:
    type option = {
      id: number;
      content: string;
    };
    export interface IFeature {
      id: number;
      content: string;
      options: Array<option>;
    }, where id is the number in ascending order from 1 -> n
    , without the opening and ending sentences!
    this is output example:+1: Events
    -1: Allow users to create and manage events such as birthday parties or weddings
    -2: Allow users to see upcoming events in their area
    -3: Allow
    Note that don't response the spacing character before + and -
    `;

  return prompt;
};
