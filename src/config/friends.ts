// friends
export const friendsHeadLine = "Ying' friends"
export const friendsIntro = "Meet some interesting friends."


// friends
export type FriendItemType = {
  name: string
  description?: string
  link: { href: string, label?: string }
  logo?: string
}

export const friends: Array<FriendItemType> = [
  {
    name: 'Zijiqn Ying',
    link: { href: 'https://zijianying.de' },
  },
]