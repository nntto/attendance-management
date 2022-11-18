#!/bin/sh

# ./.envファイルを読み込んで変数として参照できるようにする
source ./.env

CMD_MYSQL="mysql --defaults-extra-file=./etc/.conf -e "


while read mac_address
do
	# デバイスIDを取得
	result=$($CMD_MYSQL"SELECT Device.device_id FROM Device inner join MacAddress on Device.device_id=MacAddress.device_id inner join Network on MacAddress.network_id=Network.network_id WHERE room_id=${ROOM_ID} AND address='${mac_address}'")
	ary=(`echo $result`) 
	# デバイスが登録されていれば時間を更新
	if [ ${#ary[@]} -eq 2 ]; then
		device_id=${ary[1]}
		# DBのタイムゾーンが変更できないので無理矢理
		$CMD_MYSQL"UPDATE Device SET last_connected_at=(now() + interval 9 hour) WHERE device_id=${device_id};"
		echo $mac_address' update'
	# 登録されていなければ無視
	else
		echo $mac_address
	# 	$CMD_MYSQL`INSERT INTO Device \
	# 	(mac_address, last_connected_at, room_id) \
	# 	VALUES \
	# 	('1A:3F:56:92:01:0B', CURRENT_TIME, ${ROOM_ID});`
	fi
done < <(sudo arp-scan -l | grep '^192' | awk '{ print $2 }')

# "insert into USER (mac_address, last_connection_time) values $values ON DUPLICATE KEY mac_address = values(mac_address), roomId = values(roomId);"