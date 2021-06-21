import React from 'react'

import { ANIMATION_BY_TYPE } from '@constants/weather'
import { getDefaultLanguage } from '@services/locale'
import { useGetLocation } from './location'
import { useFetch } from './base'

export const useWeatherInfo = () => {
  const { location, loadLocation } = useGetLocation()
  const { data, loading, refetch } = useFetch(
    `&lat=${location?.latitude}&lon=${
      location?.longitude
    }&units=metric&lang=${getDefaultLanguage()}`
  )

  const currentAnimation = React.useMemo(() => {
    const timeOfDay = new Date()?.getHours() >= 18 ? 'night' : 'day'

    if (!data || !data?.weather?.length)
      return ANIMATION_BY_TYPE?.clear[timeOfDay]

    const result = ANIMATION_BY_TYPE?.[data?.weather[0]?.main?.toLowerCase()]
    if (result?.day) {
      return result[timeOfDay]
    }
    return result
  }, [data])

  const reload = async () => {
    await loadLocation()
    refetch()
  }

  return { data, loading, refetch, currentAnimation, reload }
}
