const multiplayer = [
  'Drip', 
  'Gaggle', 
  'Tiger Blood',
  'Whats Your Sign',
  'Sunny Side',
  'Evil Spawn',
  'The Last Post',
]

const zombies = [
  'Avaricious', 
  'Shin Rippers',
  'Necromancy',
  'Forum Chaser',
]

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'Fun',
  name: camouflage,
  multiplayer: multiplayer.includes(camouflage),
  zombies: zombies.includes(camouflage),
}))
