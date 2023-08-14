import { useGetDocument } from '@/api/documents';
import { Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';
const DocumentEditor = dynamic(() => import('@/components/DocumentEditor'), {
  ssr: false,
});

type Props = {};

const Document = (props: Props) => {
  const router = useRouter();
  const documentId = router.query.documentId;
  const { data, isLoading } = useGetDocument(documentId as string, {
    // The query will not execute until the userId exists
    // onSuccess: async (data: any) => {},
    enabled: !!documentId,
  });

  //   get document by id
  // show here
  if (isLoading) return <Text>Loading</Text>;
  return <DocumentEditor content={data.content} />;
};

export default Document;
