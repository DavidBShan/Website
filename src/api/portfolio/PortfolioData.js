import TimeTagWatch from '../../views/portfolio/TimeTagWatch'
import UnderArmour from '../../views/portfolio/UnderArmour'
import ReStyling from '../../views/portfolio/ReStyling'
import ToastReel from '../../views/portfolio/ToastReel'
import WhatIfGold from '../../views/portfolio/WhatIfGold'
import NileKabutha from '../../views/portfolio/NileKabutha'

const data = [
  {
    id: 1,
    title: 'Geotab Intern',
    slug: 'geotab',
    category: ['Software Development'],
    description:
      'Sometimes, we need to check the time, wondering when our work or meeting will finish, without getting caught by others.',
    src: '/assets/img/portfolio/Geotab.jpg',
    srcSlider: '/assets/img/portfolio/Geotab.jpg',
    overlay: 2,
    component: (props) => <TimeTagWatch {...props} />
  },
  {
    id: 2,
    title: 'Cyberbot',
    slug: 'cyberbot',
    src: '/assets/img/portfolio/Cyberbot.png',
    srcSlider: '/assets/img/portfolio/Cyberbot.png',
    category: ['Backend Development'],
    description:
      'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
    overlay: 2,

    component: (props) => <UnderArmour {...props} />
  },
  {
    id: 3,
    title: 'VivAIdi',
    slug: 'vivaidi',
    src: '/assets/img/portfolio/VivAIdi.png',
    srcSlider: '/assets/img/portfolio/VivAIdi.png',
    category: ['Full-Stack Development'],
    description:
      'Once the brand strategy was sharp and real for everyone inside of the company, all the brand behavior started to roll out as stationary material.',
    overlay: 2,
    component: (props) => <ReStyling {...props} />
  },
  {
    id: 4,
    title: 'Investigating the Negative Connotations of Subsidized Housing',
    slug: 'subsidized',
    src: '/assets/img/portfolio/SubsidizedHousing.jpg',
    srcSlider: '/assets/img/portfolio/SubsidizedHousing.jpg',
    category: ['Data Science'],
    description:
      'Once the brand strategy was sharp and real for everyone inside of the company, all the brand behavior started to roll out as stationary material.',
    overlay: 2,
    component: (props) => <ReStyling {...props} />
  },
  {
    id: 5,
    title: 'Math Contests',
    slug: 'math',
    src: '/assets/img/portfolio/MAA.jpg',
    srcSlider: '/assets/img/portfolio/MAA.jpg',
    category: ['Mathematics'],
    description:
      'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
    overlay: 2,
    component: (props) => <WhatIfGold {...props} />
  },
  {
    id: 6,
    title: 'FRC Team 610 Scouting App',
    slug: '610',
    src: '/assets/img/portfolio/610.png',
    srcSlider: '/assets/img/portfolio/610.png',
    category: ['Frontend Development'],
    description:
      'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
    overlay: 2,

    component: (props) => <UnderArmour {...props} />
  },
  {
    id: 7,
    title: 'Sports',
    slug: 'nile-kabutha',
    category: ['Atheletic Achievements'],
    src: '/assets/img/portfolio/TableTennis.jpg',
    srcSlider: '/assets/img/portfolio/TableTennis.jpg',
    description:
      'Striking and powerful Aston Martin Vantage captivates you at the first sight.',
    overlay: 2,
    component: (props) => <NileKabutha {...props} />
  }
]

export const getPortfolioData = () => data

export const getPortfolioItem = (value, whereName = 'id') => {
  return data.find((item) => {
    if (item[whereName] === value) return item
    return null
  })
}
export const getPortfolioLink = (item) => {
  if (item) return item.slug && '/portfolio/' + item.slug

  return ''
}
