import { Container } from '@mui/material'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import Header from '../components/organisms/Header'
import RoomTable from '../components/organisms/roomTable'
import { InroomAndOutroomUsers, RoomsApi } from '../types/typescript-axios'

const Rooms: NextPage = () => {
  const roomsApi = new RoomsApi()
  const { data, error } = useSWR<InroomAndOutroomUsers>(
    'getUsersInRoom()',
    () => roomsApi.getUsersInRoom().then((res) => res.data),
    {
      // 3000ms毎にデータを更新
      refreshInterval: 10000,
    },
  )
  return (
    <>
      <Header />
      <Container>
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
      </Container>
    </>
  )
}

export default Rooms
