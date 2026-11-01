'use client'

import Image from 'next/image'

export default function ScrollToTopButton() {
  return (
    <button
      className="up-arrow-button"
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <Image
        className="up-arrow"
        src="/Images/arrow-down.svg"
        alt=""
        width={56}
        height={56}
      />
    </button>
  )
}
