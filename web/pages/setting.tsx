import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import NetworkAndMacAddress from '../components/molecules/networkAndMacAddress'
import { RoomsApi, SettingApi, UserDevice } from '../types/typescript-axios'

const Setting: NextPage = () => {
  const [userDevices, setUserDevices] = useState<UserDevice>({ rooms: [] })

  useEffect(() => {
    const settingApi = new SettingApi()
    settingApi.getDevices('3').then((res) => {
      setUserDevices(res.data)
    })
  }, [])

  return (
    <div>
      {userDevices.rooms.map((room) => (
        <div key={room.id}>
          <h1>部屋：{room.name}</h1>
          {room.devices.map((device) => (
            <div key={device.id}>
              <h2>{device.name}</h2>
              {device.addresses.map((address) => (
                <NetworkAndMacAddress
                  network={address.network}
                  macAddress={address.macAddress}
                  key={address.network.id}
                />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Setting
