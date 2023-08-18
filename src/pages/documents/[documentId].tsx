import { useGetDocument } from '@/api/documents';
import { useGlobalLoading } from '@/store';
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
  const toggleLoading = useGlobalLoading((state) => state.toggleLoading);
  const closeLoading = useGlobalLoading((state) => state.closeLoading);
  const { data, isLoading } = useGetDocument(documentId as string, {
    enabled: !!documentId,
  });

  //   get document by id
  // show here
  if (isLoading) return toggleLoading('Loading...');
  if (!isLoading) {
    closeLoading();
    return <DocumentEditor content={data.content} />;
  }
};

export default Document;
