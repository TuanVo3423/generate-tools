import { createDocuments } from '@/api/documents';
import { movePage } from '@/motion';
import { OpenAIRequest } from '@/services/openai';
import { useGenerateDocumentPrompt } from '@/services/openai/prompt';
import { Button, HStack, Stack, useToast } from '@chakra-ui/react';
import { Editor } from '@tinymce/tinymce-react';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { useMutation } from 'react-query';
import { convertOptionToString } from '../data';
import { saveAs } from 'file-saver';
// @ts-ignore
import htmlDocx from 'html-docx-js/dist/html-docx';

type GenerateDocumentCompProps = {
  form: UseFormReturn<any>;
};

const GenerateDocumentComp = ({ form }: GenerateDocumentCompProps) => {
  const { watch, setValue, formState } = form;
  const [isEdit, setIsEdit] = useState(false);
  const [name, description, options, questions] = watch([
    'name',
    'description',
    'options',
    'questions',
  ]);
  const [documentText, setDocumentText] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const toast = useToast();

  const { DocumentChain } = useMemo(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { chatPrompt: DocumentPrompt } = useGenerateDocumentPrompt();
    const { chain: DocumentChain } = OpenAIRequest({
      prompt: DocumentPrompt,
      handleStream: (token: string) => {
        setValue('htmlDocument', documentText);
        setDocumentText((prev) => (prev += token));
      },
      handleStreamEnd: (token: string) => {
        setIsDisabled(false);
      },
    });

    return { DocumentChain };
  }, []);

  const handleSaveDocumentation = useMutation({
    mutationFn: async () => {
      const rest = await createDocuments({
        name_project: name,
        description_project: description,
        content: documentText,
      });
      return rest;
    },
    onSuccess: async (data: any) => {
      toast({
        description: data.message,
        status: 'success',
      });
    },
    onError: (error: any) => {
      toast({
        description: error.message,
        status: 'error',
      });
    },
  });
  const handleExportToWord = () => {
    const converted = htmlDocx.asBlob(documentText);
    saveAs(converted, `${name}.docx`);
  };

  useEffect(() => {
    async function Render() {
      await DocumentChain._call({
        name,
        description,
        convertOptionsToString: convertOptionToString(options, questions),
      });
    }
    Render();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {/* 3i24ep9fb80783h0vk72wzbl5te77104r1qvryzt3f23rqwf */}
      <Editor
        apiKey="azo95xq4zkspyisl301b05fqpgp94r6z2ps7babdj3micl1r"
        //@ts-ignore
        onInit={(evt, editor) => (editorRef.current = editor)}
        init={init}
        disabled={isDisabled}
        value={documentText}
        onEditorChange={(newText) => {
          setDocumentText(newText);
        }}
      />

      <HStack justify="center" align="center">
        <Button onClick={handleExportToWord} variant="primary-v2" maxW="200px">
          Export to word
        </Button>
        <Button
          isDisabled={isDisabled}
          onClick={() => handleSaveDocumentation.mutate()}
          variant="secondary-v2"
          maxW="200px"
        >
          Save
        </Button>
      </HStack>
    </Stack>
  );
};
export default GenerateDocumentComp;
