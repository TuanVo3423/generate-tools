import { deleteDocument } from '@/api/documents';
import { DeleteIcon } from '@chakra-ui/icons';
import {
  Button,
  ButtonGroup,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { useMutation, useQueryClient } from 'react-query';

export type TPopoverComp = {
  document_id: string;
};
export function PopoverComp({ document_id }: TPopoverComp) {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const toast = useToast();
  const queryClient = useQueryClient();

  const handleDelete = useMutation(
    async () => {
      const res = await deleteDocument(document_id);
      return res;
    },
    {
      onSuccess: async (data: any) => {
        queryClient.invalidateQueries({ queryKey: ['getDocumentOfUser'] });
        toast({
          description: data.message,
          status: 'success',
        });
      },
    }
  );

  return (
    <>
      <DeleteIcon
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
      />
      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        closeOnBlur={false}
      >
        <PopoverContent
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            Are you sure you want to delete this document ?
          </PopoverBody>
          <PopoverFooter display="flex" justifyContent="flex-end">
            <ButtonGroup size="sm">
              <Button variant="outline">No</Button>
              <Button
                variant="secondary-v2"
                onClick={() => handleDelete.mutate()}
                colorScheme="red"
              >
                Yes
              </Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </>
  );
}
