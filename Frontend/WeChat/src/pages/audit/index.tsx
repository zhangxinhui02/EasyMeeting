import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.css'

export default function Audit() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  const meetings = [
    {
      id: 0,
      title: '纳西妲发起的会议',
      applicant: '钟离',
      date: '2023-12-1',
      start: '10:00',
      end: '12:00',
      room: '大会议室（302）',
      discription: 'K-On!',
      status: 'draft',
      workflow: '',
    },
    {
      id: 1,
      title: '芙宁娜发起的会议',
      applicant: '珊瑚宫心海',
      date: '2023-12-1',
      start: '10:00',
      end: '12:00',
      room: '大会议室（302）',
      discription: 'K-On!',
      status: 'pending',
      workflow: '',
    },
  ];

  function convertApiStatus(apiStatus: string): string {
    enum Status {
      draft = '未提交',
      pending = '待审批',
      reviewing = '审核中',
      approved = '已通过',
      rejected = '未通过',
    }
    return Status[apiStatus as keyof typeof Status];
  }

  return (
    <View className='container'>
      <View className='app'>
        <View>
          <Text className="p-2">待审批</Text>
          |
          <Text className="p-2">会议管理</Text>
        </View>
        {meetings.map(meeting => (
          <View className="rounded-lg bg-blue-300 bg-opacity-80 p-2 my-4">
            <View className="flex justify-between my-1">
              <Text className='font-bold'>{meeting.title}</Text>
              <Text>{convertApiStatus(meeting.status)}</Text>
            </View>
            <View className="flex justify-between my-1">
              <Text>{meeting.room}</Text>
              <Text>申请人：{meeting.applicant}</Text>
            </View>
            <View className="my-1">
              <Text>{meeting.date}</Text>
              <Text>&nbsp;{meeting.start}-{meeting.end}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}
