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
import format from 'date-fns/format';
import { ReadMore } from './ReadMore';
// import format from 'date-fns/format';

export type TDocumentCardProps = {
  _id: any;
  name_project: string;
  description_project: string;
  content: string;
  user_id: any;
  createdAt: any;
};

export const DocumentCard = ({
  _id,
  content,
  description_project,
  name_project,
  user_id,
  createdAt,
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
          <Heading mr="auto" display="inline-block" size="md">
            {name_project}
          </Heading>
          <Heading color="#f1f0ff" ml="auto" size="md" display="inline-block">
            {/* {new Date(createdAt)} */}
            {format(new Date(createdAt), 'dd MMM yyyy')}
          </Heading>
        </Flex>
      </CardHeader>
      <CardBody>
        <ReadMore
          onClick={(e) => {
            e.stopPropagation();
          }}
          numberOfChars={200}
          text={description_project}
        />
      </CardBody>
    </Card>
  );
};
