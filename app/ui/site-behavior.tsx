'use client'

import { useEffect } from 'react'
import { initSite } from './site-script'

// Wires up the page's interactivity once the server-rendered markup has hydrated
export default function SiteBehavior() {
  useEffect(() => {
    initSite()
  }, [])
  return null
}
