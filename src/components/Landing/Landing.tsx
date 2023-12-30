import AutoHeightImage from '../AutoHeightImage/AutoHeightImage'

export default function Landing() {
  return (
    <div className="w-full flex-center flex-col gap-16 p-48">
      {/* logo */}
      <div className="w-[184px]">
        <AutoHeightImage src="/logo/logo.svg" alt="" />
      </div>
      <div className="flex-center flex-col gap-12 mb-12">
        {/* description */}
        <div className="text-center">
          <span className="text-5xl leading-normal font-extrabold">
            Discover true aspirations
            <br />
            in 100 days of repetitive goal writting.
          </span>
        </div>

        {/* sub description */}
        <div className="text-center">
          <span className="text-[#424246] leading-normal font-medium text-2xl">
            Just write 100 times for 100 days.
            <br />
            Incredibly powerful for discover and set your true goals.{' '}
          </span>
        </div>
      </div>

      {/* button */}
      <button type="button" className="px-16 py-4 bg-[#121213] rounded-xl">
        <span className="font-semibold text-xl text-white">
          Get started for free
        </span>
      </button>
    </div>
  )
}
