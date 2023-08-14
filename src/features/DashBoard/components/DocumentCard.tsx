import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  HStack,
  Heading,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { PopoverComp } from '@/components/Popover';
// import format from 'date-fns/format';

export type TDocumentCardProps = {
  _id: any;
  name_project: string;
  description_project: string;
  content: string;
  user_id: any;
};

export const DocumentCard = ({
  _id,
  content,
  description_project,
  name_project,
  user_id,
}: TDocumentCardProps) => {
  const router = useRouter();

  return (
    <Card
      p={4}
      borderRadius={12}
      cursor="pointer"
      fontWeight="bold"
      _hover={{
        bg: 'rgba(255,255,255,.4)',
      }}
      bg="rgba(255,255,255,.2)"
      onClick={() => {
        router.push(`/documents/${_id}`);
      }}
      borderWidth="2px"
      borderColor="#b1a6fc"
      key={_id}
    >
      <CardHeader>
        <HStack w="full" justify="flex-end">
          <PopoverComp document_id={_id} />
        </HStack>
        <Flex>
          <Heading color="#f1f0ff" mr="auto" display="inline-block" size="md">
            {name_project}
          </Heading>
          <Heading ml="auto" display="inline-block" size="md">
            {/* {new Date(selection.createdAt)} */}
          </Heading>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text
          color="#f1f0ff"
          fontSize="md"
          lineHeight="normal"
          fontWeight="400"
        >
          {description_project}
        </Text>
      </CardBody>
    </Card>
  );
};
