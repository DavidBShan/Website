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
    slug: 'time-tag-watch',
    category: ['Software Development'],
    description:
      'Sometimes, we need to check the time, wondering when our work or meeting will finish, without getting caught by others.',
    src: '/assets/img/project/project1/1.jpg',
    srcSlider: '/assets/img/project/project1/13.jpg',
    overlay: 2,
    component: (props) => <TimeTagWatch {...props} />
  },
  {
    id: 2,
    title: 'Cyberbot',
    slug: 'under-armour',
    src: '/assets/img/project/project2/1.jpg',
    srcSlider: '/assets/img/project/project2/10.jpg',
    category: ['Backend Development'],
    description:
      'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
    overlay: 2,

    component: (props) => <UnderArmour {...props} />
  },
  {
    id: 3,
    title: 'VivAIdi',
    slug: 're-styling',
    src: '/assets/img/project/project3/1.jpg',
    srcSlider: '/assets/img/project/project3/3.jpg',
    category: ['Full-Stack Development'],
    description:
      'Once the brand strategy was sharp and real for everyone inside of the company, all the brand behavior started to roll out as stationary material.',
    overlay: 2,
    component: (props) => <ReStyling {...props} />
  },
  {
    id: 4,
    title: 'Investigating the Negative Connotations of Subsidized Housing',
    slug: 'toast-2019-reel',
    category: ['Data Science'],
    src: 'https://theme.dsngrid.com/video/droow.mp4',
    video: {
      poster: '/assets/img/project/project4/1.jpg',
      loop: true
    },
    description:
      'We are thrilled to share our new reel with you all! Special thanks to all of our talented friends.',
    overlay: 2,
    component: (props) => <ToastReel {...props} />
  },
  {
    id: 5,
    title: 'AIME Qualifier',
    slug: 'what-if-gold',
    src: '/assets/img/project/project5/1.jpg',
    srcSlider: '/assets/img/project/project5/2.jpg',
    category: ['Mathematics'],
    description:
      'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
    overlay: 2,
    component: (props) => <WhatIfGold {...props} />
  },
  {
    id: 6,
    title: 'FRC Team 610 Scouting App',
    slug: 'under-armour',
    src: '/assets/img/project/project2/1.jpg',
    srcSlider: '/assets/img/project/project2/10.jpg',
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
    src: '/assets/img/project/project6/1.jpg',
    srcSlider: '/assets/img/project/project6/2.jpg',
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
