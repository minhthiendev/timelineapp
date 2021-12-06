import React from 'react'
import dayjs from 'dayjs'

export default function DatePickerInput({ onChange, value, format }) {
  return (
    <div className='relative'>
      <label
        className='rounded-md flex items-center justify-left px-4 py-2 w-full border border-gray-400'
        htmlFor='date-input'>{value ? dayjs(value).format(format) : <span className='text-gray-400'>Select a date</span>}</label>
      <input
        type="date"
        id="date-input"
        placeholder={dayjs().format('DD/MM/YYYY')}
        className='opacity-0 absolute left-0 top-0 z-10 w-full'
        name="date"
        value={value}
        onChange={onChange.bind(this)}
      />
    </div>
  )
}
