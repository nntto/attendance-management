import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import RoomTable from '../components/organisms/roomTable'
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
          <RoomTable users={room.users} />
        </div>
      ))}
      <h1>不在</h1>
      <div key={'不在'}>
        <RoomTable users={users.outRoom} />
      </div>
    </>
  )
}

export default Rooms
