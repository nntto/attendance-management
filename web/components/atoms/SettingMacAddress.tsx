import { Button, Grid, Stack, TextField, Typography } from '@mui/material'
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
        <Grid item sm={3} xs={12}>
          {address.network.name}
        </Grid>
        {macAddress ? (
          <>
            <Grid item sm={4} xs={5}>
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
            <Grid item sm={3} xs={5}>
              {macAddress.lastConnectedAt}
            </Grid>
            <Grid item sm={2} xs={2}>
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
          <Grid item sm={8} xs={9}>
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
