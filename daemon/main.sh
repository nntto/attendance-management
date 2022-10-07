#!/bin/sh

values=""
while read LINE
do
# TODO：環境変数からとるようにする
values="${values},('test', '${LINE}')"
done < <(sudo arp-scan -l | grep '^192' | awk '{ print $2 }')

pscale shell attendance-management main "insert into User (name, mac_address) values $values ON DUPLICATE KEY UPDATE name = values(name);"