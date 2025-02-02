import React from 'react'
import { FeaturesContent } from './styles'
import Image from 'next/image'

interface FeaturesProps {
  children: React.ReactNode
  icon?: string
  alt?: string
}

const Features = ({ children, icon, alt}: FeaturesProps) => {
  return (
    <FeaturesContent>
      {icon && <Image src={icon} alt={alt || 'Feature Icon'} width={64} height={64} />}
      {children}
    </FeaturesContent>
  )
}

export default Features