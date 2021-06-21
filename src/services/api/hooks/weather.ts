import React from 'react'

import { ANIMATION_BY_TYPE } from '@constants/weather'
import { useLocationStore } from '@services/store'
import { getDefaultLanguage } from '@services/locale'
import { useFetch } from './base'

export const useWeatherInfo = () => {
  const { location } = useLocationStore()
  const { data, loading, refetch } = useFetch(
    `&lat=${location?.latitude}&lon=${
      location?.longitude
    }&units=metric&lang=${getDefaultLanguage()}`
  )

  const currentAnimation = React.useMemo(() => {
    const isNight = new Date()?.getHours() >= 18 ? 'night' : 'day'

    if (!data || !data?.weather?.length)
      return ANIMATION_BY_TYPE?.clear[isNight ? 'night' : 'day']

    const result = ANIMATION_BY_TYPE?.[data?.weather[0]?.main?.toLowerCase()]

    if (result?.day) {
      return result[isNight ? 'night' : 'day']
    }
    return result
  }, [data])

  return { data, loading, refetch, currentAnimation }
}
