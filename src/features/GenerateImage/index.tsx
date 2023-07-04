import { NUMBER_OF_IMAGE_GENERATED } from '@/constants';
import { ImagePrompt, chatGPTResquestImage } from '@/utils';
import {
  Box,
  Button,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Skeleton,
  Text,
} from '@chakra-ui/react';
import { saveAs } from 'file-saver';
import { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-types

export const GenerateImage = () => {
  const [input, setInput] = useState('');
  const [images, setImages] = useState<any[]>([]);
  const downloadImage = (url: string) => {
    saveAs(url, 'image.jpg');
  };

  const renderImage = () => {
    if (images.length !== 0)
      return (
        <>
          {images.map((image, idx) => (
            <Stack key={idx}>
              <Box key={idx}>
                <Image objectFit="cover" w="full" h="full" src={image.url} />
              </Box>
              <Button
                variant="primary-v2"
                onClick={() => downloadImage(image.url)}
              >
                Download image!
              </Button>
            </Stack>
          ))}
        </>
      );
    return Array.from({ length: 3 }, (_, _idx) => (
      <Skeleton key={_idx} h="400px" />
    ));
  };
  const handleSubmit = async () => {
    setImages([]);
    const request = await chatGPTResquestImage(
      ImagePrompt(input),
      NUMBER_OF_IMAGE_GENERATED
    );
    if (request.data) {
      setImages(request.data);
    }
  };
  return (
    <Stack
      textAlign="center"
      gap={10}
      p={10}
      minW="full"
      minH="full"
      justify="center"
    >
      <Text fontSize="2xl" fontWeight="bold">
        Generate Image with your description
      </Text>
      <Input value={input} onChange={(e) => setInput(e.target.value)} />
      <Button variant="primary-v2" onClick={handleSubmit} maxW="200px">
        Generate Image
      </Button>
      <SimpleGrid columns={3} spacing={4}>
        {renderImage()}
        {/* {images.length !== 0
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
            ))} */}
      </SimpleGrid>
    </Stack>
  );
};

export default GenerateImage;
