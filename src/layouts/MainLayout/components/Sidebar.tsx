import { TooltipDocumentRecently, TooltipWhatIsCoin } from '@/components';
import { PlusIcon, ShareIcon, UserPlusIcon } from '@/icons';
import { hoverTapMotion } from '@/motion';
import { AIButton, AIImage, AILink, AIText } from '@/ui-kit';
import { Box, Flex, Icon, Progress, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { INavigationProps, NAVIGATIONS } from '../data';
import { LocalStorage } from '@/services/localStorage';

const Nav = ({ navigation }: { navigation: INavigationProps }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { asPath } = router;
  const isActive = asPath.startsWith(navigation.feature);
  const isBeta = navigation.status === 'beta';
  const isNew = navigation.isNew;

  const renderColor = () => {
    if (navigation.status === 'beta') return 'text.400';
    if (isActive) return 'text.50';
    return 'text.200';
  };

  return (
    <AILink
      href={navigation.href}
      w="100%"
      h="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={2}
      fontWeight="medium"
      p="6px 10px"
      borderRadius="6"
      color={renderColor()}
      bg={isActive ? 'text.600' : 'transparent'}
      outline={isActive ? '1px solid' : 'none'}
      outlineColor={isActive ? 'text.500' : 'none'}
      outlineOffset="0"
      _hover={{
        bg: 'text.600',
        outline: '1px solid',
        outlineColor: 'text.500',
        color: 'text.50',
      }}
      pointerEvents={isBeta ? 'none' : 'initial'}
      onClick={() => LocalStorage.set('isNewDocument', false)}
    >
      <Flex align="center" gap={2}>
        <Icon as={navigation.icon} w="18px" h="18px" />
        <AIText fontSize="sx">{t(navigation.title)}</AIText>
      </Flex>
      {isBeta && (
        <Flex
          bg="text.500"
          borderRadius="4"
          w="33px"
          h="16px"
          justify="center"
          align="center"
        >
          <AIText color="text.400" fontSize="xxs" textTransform="uppercase">
            {t('beta')}
          </AIText>
        </Flex>
      )}

      {isNew && LocalStorage.get('isNewDocument') === true && (
        <TooltipDocumentRecently />
      )}
    </AILink>
  );
};

export const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <Flex
      direction="column"
      h="100vh"
      w="100%"
      bg="text.700"
      justify="space-between"
      borderRight="1px solid"
      borderColor="text.600"
    >
      <Stack
        w="100%"
        h="100%"
        p={{ base: '14px 10px' }}
        spacing={7.5}
        align="flex-start"
      >
        <AIImage url="/logo-no-bg.svg" h={{ base: '30px' }} />

        <Stack spacing={2} w="100%" h="100%">
          <Stack spacing={2}>
            {NAVIGATIONS.map((navigation, idx) => (
              <Nav key={idx} navigation={navigation} />
            ))}
          </Stack>

          <Stack flex="1" justify="flex-end">
            <Box p="10px" bg="text.500" borderRadius="6">
              <Box w="100%">
                <Flex color="text.200" align="center" gap="4px">
                  <AIImage url="/coin.svg" w="20px" h="20px" alt="coin" />
                  <AIText fontSize="xs">{t('your_coins')}</AIText>
                  <TooltipWhatIsCoin
                    iconProps={{
                      width: '16px',
                      height: '16px',
                      color: 'text.200',
                    }}
                  />
                  <AIText fontSize="xs" flex="1" textAlign="right">
                    2/3
                  </AIText>
                </Flex>

                <Progress
                  value={30}
                  h="3px"
                  mt="8px"
                  borderRadius="30px"
                  sx={{ div: { bgColor: 'pri.1' } }}
                />
              </Box>

              <Flex align="center" justify="space-between" mt="10px">
                <AIText fontWeight="medium" fontSize="sx">
                  {t('free_plan')}
                </AIText>
                <AIButton maxW="80px" h="31px">
                  {t('upgrade')}
                </AIButton>
              </Flex>
            </Box>

            <Flex p="6px" gap={2} align="center" bg="text.500" borderRadius="6">
              <Flex
                w="36px"
                h="36px"
                background="radial-gradient(89.29% 89.29% at 50% 89.29%, rgba(255, 255, 255, 0) 0%, rgba(176, 162, 255, 0.2) 100%), #373543"
                boxShadow="0px 2px 0px #3A3751, 0px 4px 4px rgba(0, 0, 0, 0.3), inset 0px 2px 1px #5F5A82"
                borderRadius="4"
                justify="center"
                align="center"
              >
                <AIImage url="/short-logo-no-bg.svg" alt="logo" h="22px" />
              </Flex>

              <Box flex="1">
                <AIText fontSize="sx" fontWeight="medium" color="text.50">
                  {t('desktop_app')}
                </AIText>
                <AIText fontSize="xxs" color="text.300">
                  {t('install_now')}
                </AIText>
              </Box>

              <Flex
                as={motion.div}
                cursor="pointer"
                {...hoverTapMotion}
                initial={{ rotate: '45deg' }}
                transform="rotate(45deg)"
              >
                <Icon as={PlusIcon} />
              </Flex>
            </Flex>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        spacing={1}
        p={{ base: '14px 10px' }}
        borderTop="1px solid"
        borderColor="text.600"
      >
        <Flex
          color="text.200"
          fontSize="sx"
          p="6px 10px"
          align="center"
          gap={2}
        >
          <Icon as={ShareIcon} w="18px" h="18px" />
          <AIText>{t('share_feedback')}</AIText>
        </Flex>

        <Flex
          color="text.200"
          fontSize="sx"
          p="6px 10px"
          align="center"
          gap={2}
        >
          <Icon as={UserPlusIcon} w="18px" h="18px" />
          <AIText>{t('invite_people')}</AIText>
        </Flex>
      </Stack>
    </Flex>
  );
};
