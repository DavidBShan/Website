import React, { useEffect, useRef } from 'react'
import { dsnCN } from '../../hooks/helper'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium, faLinkedin, faLetterboxd } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faBookmark, faVideo } from '@fortawesome/free-solid-svg-icons'
import { splittingItems } from '../../hooks/Spltting'
import PropTypes from 'prop-types'

SocialMedia.propTypes = {
  className: PropTypes.string // Validate that 'className' is a string (optional)
}

function SocialMedia ({ className }) {
  const ref = useRef()
  const socialData = [
    { link: 'https://medium.com/@davidbshan', icon: faMedium },
    { link: 'https://substack.com/@davidshan', icon: faBookmark }, // Replace with the actual homepage URL
    { link: 'https://www.linkedin.com/in/david-shan-076a39265/', icon: faLinkedin }, // Replace with the actual homepage URL
    { link: 'mailto:davidbshan@gmail.com', icon: faEnvelope }, // Replace with the actual email address
    { link: 'https://calendly.com/davidbshan/15min', icon: faVideo }
  ]

  useEffect(() => {
    splittingItems(ref.current, 'li')
  }, [])

  return (
    <ul className={dsnCN('social-one', className)} ref={ref}>
      {socialData.map((item, index) => (
        <li key={index}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={item.icon} size="2xl" />{' '}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialMedia
