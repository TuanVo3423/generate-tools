import { Configuration, OpenAIApi } from 'openai';
const configuration = new Configuration({
  apiKey: 'Bearer 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',
});
const openai = new OpenAIApi(configuration);

export default openai;
