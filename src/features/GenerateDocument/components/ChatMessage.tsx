import { Box, BoxProps, Flex } from '@chakra-ui/react';
import { UseFormReturn } from 'react-hook-form';
import { IOptions } from '../data';

interface Props extends BoxProps {
  isTriangle?: boolean;
}

export const ReceiveContent = ({
  children,
  isTriangle = false,
  ...rest
}: Props) => {
  return (
    <Flex>
      <Box
        bg="rgba(136, 135, 143, 0.7)"
        borderRadius={isTriangle ? '6px 6px 6px 0px' : '6px'}
        p="10px 18px"
        position="relative"
        w="fit-content"
        maxW="400px"
        mb={isTriangle ? '15px' : '0px'}
        fontSize="14px"
        _before={{
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: '-11px',
          w: '11px',
          h: '11px',
          background: 'url(/triangle.png) center no-repeat',
          bgSize: 'contain',
          display: isTriangle ? 'block' : 'none',
        }}
        {...rest}
      >
        {children}
      </Box>
    </Flex>
  );
};

export const ReplyContent = ({
  children,
  isTriangle = false,
  ...rest
}: Props) => {
  return (
    <Flex justify="flex-end">
      <Box
        bg="text.0"
        borderRadius={isTriangle ? '6px 6px 0px 6px' : '6px'}
        p="10px 18px"
        position="relative"
        w="fit-content"
        maxW="400px"
        color="text.900"
        fontSize="14px"
        _before={{
          content: '""',
          position: 'absolute',
          right: 0,
          bottom: '-11px',
          w: '11px',
          h: '11px',
          background: 'url(/triangle-right.png) center no-repeat',
          bgSize: 'contain',
          display: isTriangle ? 'block' : 'none',
        }}
        {...rest}
      >
        {children}
      </Box>
    </Flex>
  );
};

export type askTypeProps = {
  form: UseFormReturn<any>;
};
export const AskType = ({ form }: askTypeProps) => {
  const { control, handleSubmit, watch } = form;
  const [step] = watch(['step']);
  const [type] = watch(['type']);
  return (
    <>
      <ReceiveContent isTriangle>what type?</ReceiveContent>
      {type && <ReplyContent isTriangle>{type}</ReplyContent>}
    </>
  );
};

export type askNameProps = {
  form: UseFormReturn<any>;
};
export const askName = ({ form }: askNameProps) => {
  const { control, handleSubmit, watch } = form;
  const [name] = watch(['name']);
  const [step] = watch(['step']);
  const [type] = watch(['type']);
  return (
    <>
      {(step === 'askName' || name) && (
        <ReceiveContent isTriangle>what name?</ReceiveContent>
      )}
      {name && <ReplyContent isTriangle>{name}</ReplyContent>}
    </>
  );
};

// no la 1 feature, ben trong chua nhieu lis options
export type askFeatureProps = {
  option: IOptions;
};
// options.map() => askFeature(option)
// 2 case
// case next: dua vao options de list
// neu next thi no se loai bo ra khoi options
// case back: neu back thi no se them lai vao options
// se co 1 bien luu cac history cua tin nhan
// chi can luu option da chon la dc

export const askFeature = () => {};
