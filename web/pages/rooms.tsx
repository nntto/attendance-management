import { Container } from '@mui/material'
import { ReactElement } from 'react'
import useSWR from 'swr'
import Layout from '../components/Layout'
import RoomTable from '../components/organisms/roomTable'
import { InroomAndOutroomUsers, RoomsApi } from '../types/typescript-axios'
import { NextPageWithLayout } from './_app'

const Rooms: NextPageWithLayout = () => {
  const roomsApi = new RoomsApi()
  const { data } = useSWR<InroomAndOutroomUsers>(
    'getUsersInRoom()',
    () => roomsApi.getUsersInRoom().then((res) => res.data),
    {
      // 3000ms毎にデータを更新
      refreshInterval: 10000,
    },
  )
  return (
    <div>
      <h1>在室</h1>
      {(data?.inRoom || []).map((room) => (
        <div key={room.id}>
          <h2 key={room.id}>{room.name}</h2>
          <RoomTable users={room.users} />
        </div>
      ))}
      <h1>不在</h1>
      <div key={'不在'}>
        <RoomTable users={data?.outRoom || []} />
      </div>
    </div>
  )
}

Rooms.getLayout = (page: ReactElement) => <Layout>{page}</Layout>

export default Rooms
