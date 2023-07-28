import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import Swiper from 'swiper';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';

import { Coupon } from '@/apis/coupon';

import Card from '../Card/Card';

interface CouponSwiperVAProps {
  handleChangeSwiper: (swiper: Swiper) => void;
  nickname: string;
  currentBoard: number;
  totalCoupons: number;
  progressingCoupons: Coupon[];
}

const CouponSwiperView = ({
  handleChangeSwiper,
  nickname,
  currentBoard,
  totalCoupons,
  progressingCoupons,
}: CouponSwiperVAProps) => (
  <Box key={nickname}>
    <Flex align="center" p="0 7.5%" mb="16px" gap="8px">
      <Text as="span" layerStyle="subtitle16Bd" color="blue.500">
        To
      </Text>
      <Text layerStyle="subtitle18Sbd">{nickname}</Text>
    </Flex>
    {progressingCoupons.length > 0 ? (
      <SwiperComponent
        grabCursor
        slidesPerView={1.15}
        height={200}
        centeredSlides
        spaceBetween={10}
        coverflowEffect={{
          rotate: 10, // 회전각도
          stretch: 0,
          depth: 100, // 깊이감도
          modifier: 2, //
          slideShadows: false,
        }}
        style={{ marginBottom: '38px' }}
        onSlideChange={handleChangeSwiper}
      >
        {progressingCoupons.map(({ reward, rewardDate }) => (
          <SwiperSlide key={reward}>
            <Card reward={reward} rewardDate={rewardDate} />
          </SwiperSlide>
        ))}
        {progressingCoupons.length > 0 && (
          <Text
            pt="8px"
            w="100%"
            textAlign="center"
            layerStyle="body14Md"
            letterSpacing="tight"
          >
            {currentBoard}{' '}
            <Text as="span" color="gray.500">
              / {totalCoupons}
            </Text>
          </Text>
        )}
      </SwiperComponent>
    ) : (
      <VStack
        m="0 7%"
        mb="30px"
        bg="white"
        h="180px"
        border="1px dashed #DADAE7"
        borderRadius="8px"
        justifyContent="center"
      >
        <Text layerStyle="body14Md" textAlign="center" color="gray.700">
          쿠폰이 없어요
        </Text>
      </VStack>
    )}
  </Box>
);

export default CouponSwiperView;