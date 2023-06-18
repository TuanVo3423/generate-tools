import { Button, HStack, Skeleton, Stack } from '@chakra-ui/react';
import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';
import { UseFormReturn } from 'react-hook-form';

type GenerateDocumentCompProps = {
  form: UseFormReturn<any>;
};

const GenerateDocumentComp = ({ form }: GenerateDocumentCompProps) => {
  const { watch } = form;
  const [htmlDocument] = watch(['htmlDocument']);

  const init = {
    height: 'calc(100vh - 121px)',
    menubar: true,
    statusbar: false,
    // promotion: true,
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
    text_patterns: [
      { start: '*', end: '*', format: 'italic' },
      { start: '**', end: '**', format: 'bold' },
      { start: '# ', format: 'h1' },
      { start: '##', format: 'h2' },
      { start: '###', format: 'h3' },
      { start: '####', format: 'h4' },
      { start: '#####', format: 'h5' },
      { start: '######', format: 'h6' },
    ],
  };
  const editorRef = useRef(null);

  return (
    <Stack gap="10px">
      {htmlDocument ? (
        <Editor
          apiKey="3i24ep9fb80783h0vk72wzbl5te77104r1qvryzt3f23rqwf"
          //@ts-ignore
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue={htmlDocument}
          init={init}
        />
      ) : (
        <Skeleton w="100vw" h="calc(100vh - 121px)" />
      )}

      <HStack justify="center" align="center">
        <Button maxW="200px">Continue</Button>
        <Button maxW="200px">Save</Button>
      </HStack>
    </Stack>
  );
};

export default GenerateDocumentComp;
