import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {
  SettingApi,
  UserDeviceRoomsInnerAllOfDevicesInnerAllOfAddressesInner,
} from '../../types/typescript-axios'

export default function SettingMacAddress({
  address,
  deviceId,
}: {
  address: UserDeviceRoomsInnerAllOfDevicesInnerAllOfAddressesInner
  deviceId: number
}) {
  const settingApi = new SettingApi()
  const [macAddress, setMacAddress] = useState(address.macAddress)
  const [macAddressIsValid, setMacAddressIsValid] = useState(true)
  const reg = /^(?:[0-9a-fA-F]{2}:){5}[0-9a-fA-F]{2}$/
  useEffect(() => {
    setMacAddressIsValid(reg.test(macAddress?.address || ''))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [macAddress])
  return (
    <div>
      <Grid container>
        <Grid item xs={3}>
          {address.network.name}
        </Grid>
        {macAddress ? (
          <>
            <Grid item xs={4}>
              <TextField
                error={!macAddressIsValid}
                onChange={(e: { target: { value: string } }) => {
                  setMacAddressIsValid(reg.test(e.target.value))
                  // 有効なMacAddressの場合，アップロード
                  if (reg.test(e.target.value)) {
                    settingApi.putMacAddress(macAddress!.id, {
                      address: e.target.value,
                    })
                  }
                }}
                variant='filled'
                label='MACアドレス'
                id={String(macAddress.id)}
                defaultValue={macAddress.address}
                helperText={!macAddressIsValid ? '無効なMACアドレス' : ''}
              />
            </Grid>
            <Grid item xs={3}>
              {macAddress.lastConnectedAt}
            </Grid>
            <Grid item xs={2}>
              <Button
                onClick={() => {
                  settingApi.deleteMacAddress(macAddress.id).then((res) => {
                    setMacAddress(undefined)
                  })
                }}
              >
                削除
              </Button>
            </Grid>
          </>
        ) : (
          <Grid item xs={9}>
            <Button
              onClick={() => {
                settingApi
                  .postMacAddress({
                    address: '',
                    networkId: address.network.id,
                    deviceId: deviceId,
                  })
                  .then((res) => {
                    setMacAddress(res.data)
                  })
              }}
            >
              追加
            </Button>
          </Grid>
        )}
      </Grid>
    </div>
  )
}
