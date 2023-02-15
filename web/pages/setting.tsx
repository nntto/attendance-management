import { Paper, TextField } from '@mui/material'
import { GetServerSideProps } from 'next'
import { unstable_getServerSession, User } from 'next-auth'
import { ReactElement, useState } from 'react'
import Layout from '../components/Layout'
import AddDeviceButton from '../components/atoms/AddDeviceButton'
import RoomSetting from '../components/organisms/SettingRoomDevices'
import { Device, Network, SettingApi, UserDevice } from '../types/typescript-axios'
import { NextPageWithLayout } from './_app'
import { authOptions } from './api/auth/[...nextauth]'
import { getUserDevices } from './api/setting/devices/[userId]'
import { getNetworks } from './api/setting/networks'
import { getUser } from './api/setting/user/[userId]'

const Setting: NextPageWithLayout<{
  userId: string
  userDevices: UserDevice
  networks: Network[]
  user: User
}> = ({ user, userId, userDevices, networks }) => {
  const [rooms, setRooms] = useState(userDevices.rooms)

  const pushDevice = (newDevice: Device) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) => ({
        ...room,
        devices: [
          ...room.devices,
          {
            ...newDevice,
            addresses: networks
              .filter((network) => network.roomId === room.id)
              .map((network) => ({
                network: network,
                macAddress: undefined,
              })),
          },
        ],
      })),
    )
  }

  const changeDeviceName = (deviceIndex: number, newName: string) => {
    setRooms(
      rooms.map((room) => ({
        ...room,
        devices: room.devices.map((device, latestDeviceIndex) => {
          if (latestDeviceIndex === deviceIndex) {
            return {
              ...device,
              name: newName,
            }
          }
          return device
        }),
      })),
    )
  }

  const deleteDevice = (deviceIndex: number) => {
    setRooms(
      rooms.map((room) => ({
        ...room,
        devices: room.devices.filter((_, latestDeviceIndex) => latestDeviceIndex !== deviceIndex),
      })),
    )
  }

  const settingApi = new SettingApi()
  return (
    <div>
      <h1>ユーザー情報</h1>
      <Paper sx={{ p: 2, m: 1 }}>
        <TextField
          onChange={(e: { target: { value: any } }) => {
            settingApi.updateUser(userId, { name: e.target.value })
          }}
          variant='filled'
          label='ユーザー名'
          id='userName'
          defaultValue={user.name}
        />
      </Paper>
      {rooms.map((room) => (
        <div key={room.id}>
          <h1>部屋：{room.name}</h1>
          {room.devices.map((device, deviceIndex) => (
            <RoomSetting
              key={`${room.id}-${device.id}`}
              device={device}
              changeDeviceName={(newName: string) => changeDeviceName(deviceIndex, newName)}
              deleteDevice={() => deleteDevice(deviceIndex)}
            ></RoomSetting>
          ))}
          <AddDeviceButton userId={userId} pushDevice={pushDevice} />
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

  if (!userId) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      userId,
      userDevices: JSON.parse(JSON.stringify(await getUserDevices(userId))),
      user: JSON.parse(JSON.stringify(await getUser(userId))),
      networks: await getNetworks(),
    },
  }
}
