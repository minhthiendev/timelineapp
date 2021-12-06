import React from 'react'
import dayjs from 'dayjs'

const colorClasses = [
  ['bg-blue-600', 'bg-blue-300'],
  ['bg-red-600', 'bg-red-300'],
  ['bg-pink-600', 'bg-pink-300'],
  ['bg-yellow-600', 'bg-yellow-300'],
  ['bg-green-600', 'bg-green-300'],
  ['bg-purple-600', 'bg-purple-300']
]

export default function Timeline({ lifeEvents }) {
  return (
    <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
      <div className="border-l-2 mt-10">
        {
          lifeEvents.map((lifeEvent, index) => {
            const color = colorClasses[index % colorClasses.length]
            return (
            <div key={index}
              className={`transform transition cursor-pointer 
          hover:-translate-y-2 ml-10 relative 
          flex items-center px-6 py-4 ${color[0]} text-white rounded mb-10
          flex-col md:flex-row space-y-4 md:space-y-0`}>
                <div className={`w-5 h-5 ${color[0]} absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0`}></div>
                <div className={`w-10 h-1 ${color[1]} absolute -left-10 z-0`}></div>
              <div className="flex-auto">
                <h1 className="text-lg">{dayjs(lifeEvent.date).format('MMM DD YYYY')}</h1>
                <h1 className="text-xl font-bold">{lifeEvent.content}</h1>
              </div>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

