import defaultProgress from '@/data/defaults/progress/shotguns'
import defaultCompletionistProgress from '@/data/defaults/progress/completionist'
import defaultMasteryProgress from '@/data/defaults/progress/mastery'

// The order of the weapons in this array is the order they will appear in the app
const weapons = [
  { name: 'Reclaimer 18' },
  { name: 'Lockwood 680' },
  { name: 'Haymaker' },
  { name: 'Riveter' },
]

export default weapons.map((weapon) => ({
  category: 'Shotguns',
  comingSoon: weapon.comingSoon || false,
  name: weapon.name,

  progress: {
    ...defaultProgress[weapon.name].multiplayer,
    ...defaultCompletionistProgress.multiplayer,
  },

  masteryProgress: {
    ...defaultMasteryProgress,
  },

  zombiesProgress: {
    ...defaultProgress[weapon.name].zombies,
    ...defaultCompletionistProgress.zombies,
  },
}))
