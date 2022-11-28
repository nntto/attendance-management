import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { InroomAndOutroomUsers, RoomsApi } from '../types/typescript-axios'

const Rooms: NextPage = () => {
  const [users, setUsers] = useState<InroomAndOutroomUsers>({ inRoom: [], outRoom: [] })
  useEffect(() => {
    const roomsApi = new RoomsApi()
    roomsApi.getUsersInRoom().then((res) => {
      setUsers(res.data)
    })
  }, [])
  return (
    <>
      <h1>在室</h1>
      {users.inRoom.map((room) => (
        <div key={room.roomId}>
          <h2 key={room.roomId}>{room.name}</h2>
          <table>
            <tbody>
              <tr>
                <th>学年</th>
                <th>名前</th>
                <th>ニックネーム</th>
                <th>コメント</th>
              </tr>
              {room.users.map((user) => (
                <tr key={user.userId}>
                  <td>{user.grade}</td>
                  <td>{user.name}</td>
                  <td>{user.nickname?.nickname}</td>
                  <td>{user.comment?.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      <h1>不在</h1>
      <table key={'不在'}>
        <tbody>
          <tr>
            <th>学年</th>
            <th>名前</th>
            <th>ニックネーム</th>
            <th>コメント</th>
          </tr>
          {users.outRoom.map((user) => (
            <tr key={user.userId}>
              <td>{user.grade}</td>
              <td>{user.name}</td>
              <td>{user.nickname?.nickname}</td>
              <td>{user.comment?.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Rooms
