function Details() {
    const room =
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
    };

    let heading = '会议室详情';

    return (
        <section className="text-left">
            <nav className="flex items-center justify-between">
                <button className="text-blue-500">&lt;</button>
                <h2>{heading}</h2>
                <button className="rounded-lg text-blue-500 hover:bg-blue-200">按钮</button>
            </nav>
            {/* 需重构 */}
            <ul className="list-none pl-0">
                <li className="border border-blue-500">
                    <b>{room.name}</b><br />
                    <p>
                        状态：<b>{room.status}</b><br />
                    </p>
                    <p>
                        位置：<b>{room.location}</b><br />
                        容量：<b>{room.capacity}</b><br />
                        设备：<b>{room.equipment}</b><br />
                        停用时间：<b>{room.unavailableHours}</b><br />
                        备注：<b>{room.description}</b><br />
                    </p>
                    {/* sellecter */}
                    {/* timevisonable */}
                    {/* meetinglist */}

                </li>
                <li>
                    <button>修改会议</button>
                </li>
                <li>
                    <button>取消会议</button>
                </li>
            </ul>
        </section>

    );
}

export default Details


