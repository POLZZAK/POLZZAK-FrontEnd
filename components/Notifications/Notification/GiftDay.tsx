import { Circle, Flex, Text, VStack } from '@chakra-ui/react';

const GiftDayNotification = () => (
  <VStack
    w="100%"
    p="16px"
    bg="white"
    border="1px solid"
    borderColor="gray.200"
    borderRadius="8px"
    spacing="16px"
  >
    <VStack w="100%" spacing="8px" align="flex-start">
      <Flex w="100%" gap="7px" justify="flex-start" align="center">
        <Text layerStyle="subtitle16Bd">
          <Text as="span" mr="4px">
            ⏱️️️
          </Text>
          선물 약속 날짜 D-1
        </Text>
        <Circle size="4px" bg="gray.300" />
        <Text layerStyle="caption12Md" color="gray.500">
          05.03
        </Text>
      </Flex>
      <Text layerStyle="body14Md" wordBreak="keep-all">
        잊지 마세요!
        <Text as="span" layerStyle="body14Sbd">
          ‘올리브영 기프티콘 5만원권’{' '}
        </Text>
        선물을 주기로 한 날짜가 하루 남았어요
      </Text>
    </VStack>
    <Flex w="100%" gap="4px" justify="flex-start" align="center">
      <Circle size="24px" bg="gray.300" />
      <Text layerStyle="caption12Md" color="gray.500">
        죽음의 ASMR
      </Text>
    </Flex>
  </VStack>
);

export default GiftDayNotification;
