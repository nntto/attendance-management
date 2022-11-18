const inRoomTime = () => {
  const now = new Date()
  return new Date(now.getTime() - 120 * 1000)
}

export default inRoomTime
