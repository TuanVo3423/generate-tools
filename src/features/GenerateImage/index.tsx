import { ImagePrompt, chatGPTResquestImage } from '@/utils';
import { Box, Button, Image, Input, SimpleGrid, Stack } from '@chakra-ui/react';
import { saveAs } from 'file-saver';
import { useState } from 'react';
import { Skeleton } from '@chakra-ui/react';
type Props = {};

export const GenerateImage = (props: Props) => {
  const [input, setInput] = useState('');
  const [images, setImages] = useState<any[]>([]);
  const downloadImage = (url: string) => {
    saveAs(url, 'image.jpg'); // Put your image url here.
  };
  const handleSubmit = async () => {
    setImages([]);
    const request = await chatGPTResquestImage(ImagePrompt(input), 4);
    if (request.data) {
      setImages(request.data);
    }
  };
  return (
    <Stack gap={10} p={10} minW="full" minH="full" justify="center">
      <Input value={input} onChange={(e) => setInput(e.target.value)} />
      <Button onClick={handleSubmit} maxW="200px">
        Generate Image
      </Button>
      <SimpleGrid columns={3} spacing={4}>
        {images.length !== 0
          ? images.map((image, idx) => (
              <Stack>
                <Box key={idx}>
                  <Image objectFit="cover" w="full" h="full" src={image.url} />
                </Box>
                <Button onClick={() => downloadImage(image.url)}>
                  Download image!
                </Button>
              </Stack>
            ))
          : Array.from({ length: 3 }, (_, _idx) => (
              <Skeleton key={_idx} h="400px" />
            ))}
      </SimpleGrid>
    </Stack>
  );
};

export default GenerateImage;
