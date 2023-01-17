import { GetServerSideProps } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { getSession, useSession } from 'next-auth/react'
import { ReactElement, useEffect, useState } from 'react'
import useSWR from 'swr'
import Layout from '../components/Layout'
import RoomSetting from '../components/organisms/SettingRoomDevices'
import { Network, SettingApi, UserDevice } from '../types/typescript-axios'
import { NextPageWithLayout } from './_app'
import { authOptions } from './api/auth/[...nextauth]'
import { getUserDevices } from './api/setting/devices/[userId]'
import { getNetworks } from './api/setting/networks'

const Setting: NextPageWithLayout<{
  userId: string
  userDevices: UserDevice
  networks: Network[]
}> = ({ userId, userDevices, networks }) => {
  // const settingApi = new SettingApi()
  // const { data: userDevices } = useSWR(userId ? 'api/userDevices' : null, () =>
  //   settingApi.getDevices(userId).then((res) => res.data),
  // )
  // const { data: networks } = useSWR('api/networks', () =>
  //   settingApi.getNetworks().then((res) => res.data),
  // )

  // if (!userDevices || !networks) return <p>loading</p>

  return (
    <div>
      {userDevices.rooms.map((room) => (
        <div key={room.id}>
          <h1>部屋：{room.name}</h1>
          <RoomSetting
            key={room.id}
            devices={room.devices}
            userId={userId}
            networks={networks.filter((network) => network.roomId === room.id)}
          ></RoomSetting>
        </div>
      ))}
    </div>
  )
}

Setting.getLayout = (page: ReactElement) => <Layout>{page}</Layout>

export default Setting

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(context.req, context.res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const userId = session.user?.sub
  return {
    props: {
      userId,
      userDevices: JSON.parse(JSON.stringify(await getUserDevices(userId))),
      networks: await getNetworks(),
    },
  }
}
