import dayjs from 'dayjs'
import { Component } from 'react'
import { Calendar } from 'react-h5-calendar'

export default class Demo extends Component {
  state = {
    currentDate: dayjs().format('YYYY-MM-DD'),
  }
  render() {
    return (
      <Calendar
        onDateClick={date => this.setState({ currentDate: date.format('YYYY-MM-DD') })}
        showType={'week'}
        markDates={[
          { date: '2023-12-12', markType: 'circle' },
          { markType: 'dot', date: '2023-12-23' },
          { markType: 'dot', date: '2023-12-22' },
          { markType: 'circle', date: '2023-12-22' },
          { date: '2023-12-21' },
        ]}
        markType="dot"
        currentDate={this.state.currentDate}
        onTouchEnd={(a, b) => console.log(a, b)}
      />
    )
  }
}