'use client'

import { useEffect, useState } from 'react'
import { dynamicTexts } from '@/constants/portfolio'

export default function TypingText() {
  const [dynamicText, setDynamicText] = useState('')

  useEffect(() => {
    let timeoutId: number
    let textIndex = 0

    function typeNextText() {
      const currentText = dynamicTexts[textIndex]
      let characterIndex = 0

      function typeCharacter() {
        if (characterIndex < currentText.length) {
          setDynamicText(currentText.slice(0, characterIndex + 1))
          characterIndex += 1
          timeoutId = window.setTimeout(typeCharacter, 100)
          return
        }

        timeoutId = window.setTimeout(eraseText, 300)
      }

      function eraseText() {
        setDynamicText(currentText.slice(0, characterIndex - 1))
        characterIndex -= 1

        if (characterIndex > 0) {
          timeoutId = window.setTimeout(eraseText, 50)
          return
        }

        setDynamicText('')
        textIndex = (textIndex + 1) % dynamicTexts.length
        timeoutId = window.setTimeout(typeNextText, 200)
      }

      typeCharacter()
    }

    typeNextText()

    return () => window.clearTimeout(timeoutId)
  }, [])

  return (
    <span id="dynamic-text" aria-live="off">
      {dynamicText}
    </span>
  )
}
