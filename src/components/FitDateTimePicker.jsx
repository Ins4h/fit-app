import React, { useState } from 'react';
import DateTimePicker from "@react-native-community/datetimepicker";

const FitDateTimePicker = ({ type, onPick }) => {
  const [mode, setMode] = useState(type)
  const [date, setDate] = useState(new Date())

  const onChange = (_, selectedDate) => {
    const currentDate = selectedDate || date
    setDate(currentDate)
    const tempDate = new Date(currentDate)
    if (mode === 'date') {
      onPick('')
    } else {
      const hoursMinutes = tempDate.getHours() + ':' + tempDate.getMinutes()
      onPick(hoursMinutes)
    }
  }

  return (
    <DateTimePicker
      value={date}
      mode={mode}
      is24Hour={true}
      onChange={onChange}
    />
  )
}

export default FitDateTimePicker
