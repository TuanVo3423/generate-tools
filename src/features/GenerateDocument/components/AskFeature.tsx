import React, { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Box, Text } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';
import { ReceiveContent } from './ChatMessage';

export type AskFeatureProps = {
  form: UseFormReturn<any>;
  data?: any;
};

export const AskFeature = ({ form, data }: AskFeatureProps) => {
  const { watch } = form;
  const [step] = watch(['step']);
  const [features] = watch(['features']);
  const [temp, setTemp] = useState(0);
  const [currentFeatureSelected] = watch(['currentFeatureSelected']);
  const [featuresSelected] = watch(['featuresSelected']);
  console.log(step, features, currentFeatureSelected, featuresSelected);
  return (
    <>
      {step === 'askFeature' && features.length === 0 && (
        <Box>
          <ReceiveContent>
            Ok good name. Now I give you list of questions, please select
            options which you want
            <Spinner />
          </ReceiveContent>
        </Box>
      )}

      {/* o day se cho hien thi option da chon! */}
      {(step === 'askFeature' || features) &&
        features.map((feat: any, idx: number) => (
          <ReceiveContent>
            <Text key={idx}>
              {idx}: {feat.content}
            </Text>
          </ReceiveContent>
        ))}

      {step === 'askOptions' &&
        currentFeatureSelected &&
        currentFeatureSelected?.options.map((option: any, idx: number) => (
          <Text key={idx}>
            {idx}: {option.content}
          </Text>
        ))}
    </>
  );
};

export type askOptionsProps = {
  features: any;
  form: UseFormReturn<any>;
};
const askOptions = ({ form, features }: askOptionsProps) => {};
