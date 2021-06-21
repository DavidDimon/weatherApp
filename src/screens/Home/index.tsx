import React from 'react'
import { ActivityIndicator } from 'react-native'
import { format } from 'date-fns'
import { useTheme } from 'styled-components'

import {
  Container,
  Box,
  Text,
  LottieWrapper,
  InfoItem,
  Pressable,
  Icon,
} from '@components'
import { IScreenDefault } from '@interfaces/screen'
import { useWeatherInfo } from '@services/api/hooks'
import { getDefaultLocale } from '@services/locale'

const Home: React.FC & IScreenDefault = () => {
  const { data, loading, currentAnimation, reload } = useWeatherInfo()
  const theme: any = useTheme()

  const date = React.useMemo(
    () => format(new Date(), 'EEEE, dd MMM', { locale: getDefaultLocale() }),
    []
  )

  const parseTemperature = React.useCallback(
    (temp: number) => `${Number(temp)?.toFixed(0)}ºc`,
    []
  )

  if (loading)
    return (
      <Container alignItems="center" justifyContent="center">
        <ActivityIndicator size="large" color={theme.colors.brand} />
      </Container>
    )

  return (
    <Container ph={6}>
      <Box flexDir="column" justifyContent="center" alignItems="center" mt={2}>
        <Box mb={2} flexDir="column">
          <Box flexDir="row">
            <Text
              fontSize={6}
              weight="bold"
              color="brand"
              translate={false}
              mr={2}
            >
              {data?.name}
            </Text>
            <Pressable
              onPress={reload}
              alignItems="center"
              justifyContent="center"
            >
              <Icon
                name="reload"
                strokeColor="grey.400"
                width={17}
                height={17}
              />
            </Pressable>
          </Box>
          <Text fontSize={5} color="grey.400" translate={false}>
            {date}
          </Text>
        </Box>

        <LottieWrapper
          width={50}
          height={25}
          name={currentAnimation}
          loop
          autoPlay
        />
        <Text translate={false} fontSize={16} color="brand">
          {parseTemperature(data?.main?.temp)}
        </Text>

        <Text translate={false} fontSize={6} color="grey.400">
          {data?.weather[0]?.description}
        </Text>
      </Box>

      <Box mt={2} pv={4} ph={6} width="90%" radius={14} bgColor="brand">
        <Box
          flexDir="row"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <InfoItem icon="temperatureLow" description="temp_min" fillColor>
            {parseTemperature(data?.main?.temp_min)}
          </InfoItem>

          <InfoItem icon="temperature" description="feels_like" fillColor>
            {parseTemperature(data?.main?.feels_like)}
          </InfoItem>

          <InfoItem icon="temperatureHigh" description="temp_max" fillColor>
            {parseTemperature(data?.main?.temp_max)}
          </InfoItem>
        </Box>

        <Box flexDir="row" justifyContent="space-between" alignItems="center">
          <InfoItem icon="humidity" description="humidity" strokeColor>
            {`${Number(data?.main?.humidity).toFixed(1)}mm`}
          </InfoItem>

          <InfoItem icon="pressure" description="pressure" fillColor>
            {`${Number(data?.main?.pressure).toFixed(0)}hpa`}
          </InfoItem>

          <InfoItem icon="wind" description="wind" strokeColor>
            {`${Number(data?.wind?.speed).toFixed(1)}km/h`}
          </InfoItem>
        </Box>
      </Box>
    </Container>
  )
}

Home.routeName = 'Home'

export default Home
