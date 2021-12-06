import React, { useState, useEffect } from 'react'
import Timeline from 'components/Timeline'
import dayjs from 'dayjs'
import DatePickerInput from 'components/ui/DatePickerInput'
import useLifeEvent from 'hooks/useLifeEvent'

export default function MyTimeline() {
  const {
    createLifeEvent,
    lifeEvents,
    loading,
    refetchLifeEvents
  } = useLifeEvent()
  const [submitting, setSubmitting] = useState(false)

  const [formValues, setFormValues] = useState({
    date: '',
    content: ''
  })


  async function handleSubmit(event) {
    event.preventDefault()
    if (submitting) return false

    if (!formValues.date || !formValues.content) return false

    setSubmitting(true)

    try {
      const { data } = await createLifeEvent({
        variables: {
          date: dayjs(formValues.date).valueOf(),
          content: formValues.content,
        }
      })
      const { success, message, lifeEvent } = data.createLifeEvent || {}
      refetchLifeEvents()

    } catch(error) {
      console.log(error)
      setSubmitting(false)
      return false
    }

    setSubmitting(false)
    setFormValues({
      date: '',
      content: ''
    })
  }

  function handleInputChange(event) {
    const value = event.target.value

    setFormValues(prev => ({
      ...prev,
      [event.target.name]: value
    }))
  }


  return (
    <div className='flex flex-col mt-20 w-full items-center'>
      {/* Form */}
      <div className='bg-white p-5 rounded-lg shadow-lg border border-gray-200 w-full max-w-md'>
        <form className='flex flex-col w-full' onSubmit={handleSubmit}>

          <div className='mt-2'>
            <DatePickerInput
              value={formValues.date}
              format="MMM DD YYYY"
              onChange={handleInputChange}
            />
          </div>
          <div className='mt-2'>
            <textarea
              rows={5}
              name="content"
              value={formValues.content}
              onChange={handleInputChange}
              placeholder='What is in your memory?'
              className='rounded-md w-full border border-gray-400 resize-none placeholder-gray-400'
            />
          </div>
          <div className='mt-2'>
            <button 
              type="submit" 
              className={`rounded-md text-white bg-green-500 inline-flex justify-center items-center h-10 px-10 hover:bg-green-600 font-bold text-lg ${submitting ? 'opacity-50 pointer-events-none' : 'cursor-pointer'}`}
            >{submitting ? 'Posting...' : 'Post'}</button>
          </div>
        </form>
      </div>
      {/* Timeline */}
      {
      loading ? <div className='my-5 p-2 w-full flex items-center justify-center text-md'>Loading...</div> :
        <Timeline lifeEvents={lifeEvents} />
        }
    </div>
  )
}

