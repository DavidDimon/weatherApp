import React from 'react'
import { Platform } from 'react-native'
import GetLocation from 'react-native-get-location'
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions'

import { useLocationStore } from '@services/store'

const permissionKey = {
  ios: 'LOCATION_WHEN_IN_USE',
  android: 'ACCESS_FINE_LOCATION',
}

export const useGetLocation = () => {
  const [loading, setLoading] = React.useState(true)
  const [statusPermission, setStatusPermission] = React.useState<
    string | boolean
  >(false)
  const { setLocation, location } = useLocationStore()

  const permission = React.useMemo(() => {
    const OS = Platform?.OS
    const permission = PERMISSIONS[OS?.toUpperCase()][permissionKey[OS]]
    return permission
  }, [])

  const checkPermission = async () => {
    const status = await check(permission)
    const blocked = status === RESULTS.BLOCKED
    if (blocked) {
      setStatusPermission('blocked')
      return
    }

    setStatusPermission(status === RESULTS.GRANTED)

    if (status === RESULTS.GRANTED) {
      loadLocation()
      return
    }
    setLoading(false)
  }

  const requestPermission = async () => {
    const result = await request(permission)
    if (result === RESULTS.GRANTED) {
      loadLocation()
      return
    }

    setLoading(false)
  }

  const loadLocation = React.useCallback(async () => {
    try {
      setLoading(true)
      const location = await GetLocation?.getCurrentPosition({
        timeout: 5000,
        enableHighAccuracy: false,
      })

      setLocation(location)
    } catch (error) {
      console.warn('Failed to get location', error)
    }
    setLoading(false)
  }, [])

  React.useEffect(() => {
    checkPermission()
  }, [])

  return {
    location,
    loading,
    loadLocation,
    statusPermission,
    requestPermission,
  }
}
