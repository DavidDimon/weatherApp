# How to use useFetch and useLazyFetch ?

## useFetch

UseFetch is based on useQuery of apollo client(it is recommended to use only for methods of [GET] type)

```javascript
import { useFetch } from '@services/api/hooks/base'

const Component = () => {
  const { data, loading, refetch } = useFetch('/person?id=1', {
    method,
    body,
    onCompleted,
    onError,
  })
  return <View />
}
```

## props

| Props       | Description                                          |
| ----------- | ---------------------------------------------------- |
| url         | url without base url                                 |
| body        | body of request                                      |
| method      | post or get(default) or delete or put or patch       |
| onCompleted | when request is completed, this function is called   |
| onError     | when has a error on request, this function is called |

## hooks results

| Props   | Description                                                                           |
| ------- | ------------------------------------------------------------------------------------- |
| data    | result of request                                                                     |
| loading | state of loading (true or false)                                                      |
| refetch | function to reload a request. This request receive all props(url, body, method...etc) |

## useLazyFetch

useLazyFetch is based on useLazyQuery and useMutation of apollo client(Highly recommended to use for all other methods(like post, put...etc))

```javascript
import { useLazyFetch } from '@services/api/hooks/base'

const Component = () => {
  const [onCreate, { data, loading, refetch }] = useLazyFetch('/person?id=1', {
    method: 'post',
    body,
    onCompleted,
    onError,
  })
  return <View />
}
```

## props

| Props       | Description                                          |
| ----------- | ---------------------------------------------------- |
| url         | url without base url                                 |
| body        | body of request                                      |
| method      | post or get(default) or delete or put or patch       |
| onCompleted | when request is completed, this function is called   |
| onError     | when has a error on request, this function is called |

## hooks results

| Props    | Description                                                                           |
| -------- | ------------------------------------------------------------------------------------- |
| onCreate | Is a custom trigger to call the request( you can give any name for this function)     |
| data     | result of request                                                                     |
| loading  | state of loading (true or false)                                                      |
| refetch  | function to reload a request. This request receive all props(url, body, method...etc) |
