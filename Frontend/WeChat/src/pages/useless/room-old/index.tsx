function RoomList() {
    const rooms = [
        {
            id: 0,
            name: '大会议室 302',
            status: 'draft',
            location: '实验楼',
            capacity: '60人',
            equipment: '白板 投影仪',
            unavailableHours: '22:00-06:00',
            description: 'none',
            workflow: '',
        },
    ];

    return (
        <section className="text-left">

            <ul className="list-none pl-0">
                {rooms.map(room =>
                    <li className="rounded-lg bg-blue-300 bg-opacity-80 p-2 my-2">
                        <div className="flex justify-between">
                            <b>{room.name}</b>
                            <b>&emsp;&emsp;</b>
                            {room.status}
                        </div>
                        位置：{room.location}
                        <div className="flex justify-start">
                            容量：{room.capacity}
                            <b>&emsp;&emsp;</b>
                            设备：{room.equipment}
                        </div>
                        <div className="flex justify-center">
                            <b className='color-gray-100'>████</b>
                            <b className='color-green-200'>███████████████████</b>
                            <b className='color-gray-100'>████</b>
                        </div>
                    </li>
                )}
            </ul>
        </section>
    );
}

export default RoomList


