import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import GqlAllLifeEvent from 'graphql/query/life-event/all.gql'
import GqlCreateLifeEvent from 'graphql/mutation/life-event/create.gql'

export default function useLifeEvent() {
  // const [lifeEvents, setLifeEvents] = useState([])
  const [createLifeEvent] = useMutation(GqlCreateLifeEvent)

  const { data, loading, refetch } = useQuery(GqlAllLifeEvent, {
    variables: {
      orderBy: 'date_DESC'
    },
    fetchPolicy: 'network-only'
  })

  const lifeEvents = (data || {}).allLifeEvents || []

  // useEffect(() => {
  //   if (!loading && data) {
  //     if (data.allLifeEvents) {
  //       console.log(data.allLifeEvents)
  //       setLifeEvents(data.allLifeEvents)
  //     }
  //   }
  // }, [loading])

  return {
    createLifeEvent,
    lifeEvents, 
    loading,
    refetchLifeEvents: refetch
  }
}
