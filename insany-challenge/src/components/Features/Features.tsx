import React from 'react'
import { FeaturesContent } from './styles'
import Image from 'next/image'
import { IFeaturesProps } from '@/types'

const Features = ({ children, icon, alt }: IFeaturesProps) => {
  return (
    <FeaturesContent>
      {icon && <Image src={icon} alt={alt || 'Feature Icon'} width={64} height={64} />}
      {children}
    </FeaturesContent>
  )
}

export default Features