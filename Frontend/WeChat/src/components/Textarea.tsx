import Taro from '@tarojs/taro'
import { AtTextarea }  from 'taro-ui'
export default class Index extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: ''
    }
  }
  handleChange (value) {
    this.setState({
      value
    })
  }
  render () {
    return (
      <AtTextarea
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
        maxLength={200}
        placeholder='你的问题是...'
      />
    )
  }
}