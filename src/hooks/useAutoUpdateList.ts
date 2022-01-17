import { useEffect } from 'react'
import { useAppDispatch } from 'state/hooks'
import { acceptListUpdate } from 'state/lists/actions'
import { useAllLists } from 'state/lists/hooks'

const useAutoUpdateList = () => {
  const lists = useAllLists()
  const dispatch = useAppDispatch()
  useEffect(() => {
    Object.keys(lists).map((item) => {
      if (lists[item]?.pendingUpdate) {
        dispatch(acceptListUpdate(item))
      }
    })
  }, [])
}

export default useAutoUpdateList
