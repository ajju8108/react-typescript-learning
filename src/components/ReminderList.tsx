import React from 'react'
import Reminder from '../models/reminder'


interface RemainderListProps{
    items:Reminder[]
}
export default function ReminderList({items}: RemainderListProps) {
  return (
    <ul>
      {items.map(item => <li key={item.id}>{item.title}</li>)}
    </ul>
  )
}
