import React from 'react'
import * as Ramda from 'ramda'
// @ts-ignore
import { API_TOKEN } from 'react-native-dotenv'

import api from '@services/api/config'

const initialState = {
  data: null,
  loading: false,
}

interface IReducerAction {
  type: 'add_data' | 'change_loading'
  loading: boolean
  data: any
}

interface IFetchParams {
  url: string
  method: 'post' | 'get' | 'delete' | 'put'
  body: any
  dispatch: Function
  onCompleted: Function
  onError: Function
}

interface IHandleFetch {
  method: 'post' | 'get' | 'delete' | 'put'
  body: any
  onCompleted: Function
  onError: Function
}

const onFetch = async ({
  url,
  method,
  body,
  dispatch,
  onCompleted,
  onError,
}: IFetchParams) =>
  new Promise(async (resolve, reject) => {
    dispatch({ type: 'change_loading', loading: true })
    try {
      const parsedUrl = `${url}${
        url?.includes('?') ? `&appid=${API_TOKEN}` : `?appid=${API_TOKEN}`
      }`
      console.log(
        'url ->',
        `${parsedUrl} [${method || 'get'}]`,
        'body ->',
        body
      )
      const { data } = await api[method || 'get'](parsedUrl, body || {})
      dispatch({ type: 'add_data', data })
      !!onCompleted && onCompleted(data)
      resolve(data)
    } catch (error) {
      console.warn('[fetch error] ', error)
      dispatch({ type: 'change_loading', loading: false })
      !!onError && onError(error)
      reject(error)
    }
  })

const handleFetch =
  (dispatch: Function, url: string, props: IHandleFetch) =>
  (newProps = {}) =>
    new Promise(async (resolve, reject) => {
      try {
        const result = await onFetch({
          url,
          ...{ ...props, ...(newProps || {}) },
          dispatch,
        })
        resolve(result)
      } catch (error) {
        reject(error)
      }
    })

const reducer = (state = initialState, action: IReducerAction) => {
  if (action.type === 'add_data') {
    return { ...state, data: action.data, loading: false }
  }
  if (action.type === 'change_loading') {
    return { ...state, loading: action.loading }
  }
  return state
}

/**
 *
 * @param url
 * @param props { method, body }
 *
 */
export const useLazyFetch = (url: string, props: IHandleFetch) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return [
    handleFetch(dispatch, url, props),
    {
      refetch: handleFetch(dispatch, url, props),
      ...Ramda.pick(['loading', 'data'], state),
    },
  ]
}

/**
 *
 * @param url
 * @param props { method, body}
 *
 */
export const useFetch = (url: string, props: IHandleFetch) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  React.useEffect(() => {
    if (url) handleFetch(dispatch, url, props)()
  }, [props?.body])

  return {
    refetch: handleFetch(dispatch, url, props),
    ...Ramda.pick(['loading', 'data'], state),
  }
}
