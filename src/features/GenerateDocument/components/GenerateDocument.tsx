import { OpenAIRequest } from '@/services/openai';
import { useGenerateDocumentPrompt } from '@/services/openai/prompt';
import { Button, HStack, Stack } from '@chakra-ui/react';
import { Editor } from '@tinymce/tinymce-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { convertOptionToString } from '../data';
import { movePage } from '@/motion';
import { motion } from 'framer-motion';

type GenerateDocumentCompProps = {
  form: UseFormReturn<any>;
};

const GenerateDocumentComp = ({ form }: GenerateDocumentCompProps) => {
  const { watch } = form;
  const [name, description, options, questions] = watch([
    'name',
    'description',
    'options',
    'questions',
  ]);
  const [documentText, setDocumentText] = useState('');

  const { DocumentChain } = useMemo(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { chatPrompt: DocumentPrompt } = useGenerateDocumentPrompt();
    const { chain: DocumentChain } = OpenAIRequest({
      prompt: DocumentPrompt,
      handleStream: (token: string) => {
        setDocumentText((prev) => (prev += token));
      },
    });

    return { DocumentChain };
  }, []);
  useEffect(() => {
    async function Render() {
      await DocumentChain._call({
        name,
        description,
        convertOptionsToString: convertOptionToString(options, questions),
      });
    }
    Render();
  }, [DocumentChain]);

  const init = {
    height: 'calc(100vh - 121px)',
    menubar: true,
    statusbar: false,
    plugins: [
      'advlist',
      'autolink',
      'lists',
      'link',
      'image',
      'charmap',
      'preview',
      'anchor',
      'searchreplace',
      'visualblocks',
      'code',
      'fullscreen',
      'insertdatetime',
      'media',
      'table',
      'code',
      'help',
      'wordcount',
    ],
    toolbar:
      'undo redo | blocks | ' +
      'bold italic forecolor | alignleft aligncenter ' +
      'alignright alignjustify | bullist numlist outdent indent | ' +
      'link image ' +
      'removeformat | help',
    content_style:
      'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
  };

  const editorRef = useRef(null);

  return (
    <Stack as={motion.div} {...movePage} gap="10px">
      <Editor
        apiKey="3i24ep9fb80783h0vk72wzbl5te77104r1qvryzt3f23rqwf"
        //@ts-ignore
        onInit={(evt, editor) => (editorRef.current = editor)}
        init={init}
        value={documentText}
      />

      <HStack justify="center" align="center">
        <Button variant="primary-v2" maxW="200px">
          Continue
        </Button>
        <Button variant="secondary-v2" maxW="200px">
          Save
        </Button>
      </HStack>
    </Stack>
  );
};

export default GenerateDocumentComp;
