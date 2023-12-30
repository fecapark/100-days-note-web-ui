import Image from 'next/image'
import { MdArrowForward } from 'react-icons/md'
import FunctionalButton from './FunctionalButton'

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 fixed top-0 left-0 w-full">
      {/* logo */}
      <div className="flex-center select-none">
        <div className="relative w-14 h-14">
          <Image src="/logo/logo.svg" alt="logo" fill />
        </div>
        <div className="ml-3">
          <span className="text-xl font-extrabold">100 Days Note</span>
        </div>
      </div>
      {/* functional */}
      <div className="flex-center text-[18px]">
        <div className="mr-5">
          <FunctionalButton>About</FunctionalButton>
          <FunctionalButton>Pricing</FunctionalButton>
          <FunctionalButton>Sign in</FunctionalButton>
        </div>
        <FunctionalButton className="bg-[#121213] rounded-lg">
          <div className="flex-center gap-4 text-white font-semibold">
            <span>Get started</span>
            <div className="text-2xl">
              <MdArrowForward />
            </div>
          </div>
        </FunctionalButton>
      </div>
    </header>
  )
}
