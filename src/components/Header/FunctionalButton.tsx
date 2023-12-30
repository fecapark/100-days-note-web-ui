'use client'

import { classes } from '@/utils/dom'

interface FunctionalButtonProps {
  className?: string
  onClick?: (e: React.MouseEvent) => void
  children: React.ReactNode
}

export default function FunctionalButton({
  className = '',
  onClick = () => {},
  children,
}: FunctionalButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={classes('font-bold', className)}
    >
      <div className="px-8 py-2 hover:underline decoration-2 underline-offset-4">
        {children}
      </div>
    </button>
  )
}
