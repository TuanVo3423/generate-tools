import { NotificationOutlineIcon, SearchOutlineIcon } from '@/icons';
import { AIAvatar, AIBoxIcon, AIButton, AIHeading1 } from '@/ui-kit';
import { Flex, Icon } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export const Header = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <Flex align="center" justify="space-between" w="100%">
      <AIHeading1 color="text.0" fontWeight="bold">
        Foodie App Dashboard
      </AIHeading1>

      <Flex gap={6} align="center">
        <AIAvatar name="Hello Jimmy" />

        <Flex gap={2.5} align="center">
          <AIButton
            h="32px"
            fontSize="xs"
            onClick={() => router.push('/create-project')}
          >
            {t('new_project')}
          </AIButton>
          <AIBoxIcon>
            <Icon as={SearchOutlineIcon} w="16px" h="16px" />
          </AIBoxIcon>
          <AIBoxIcon>
            <Icon as={NotificationOutlineIcon} w="16px" h="16px" />
          </AIBoxIcon>
        </Flex>
      </Flex>
    </Flex>
  );
};
