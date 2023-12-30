import Image, { ImageProps } from 'next/image'

export default function AutoHeightImage({ alt, src }: ImageProps) {
  return (
    <div className="!relative">
      <Image
        className="!object-contain !relative !h-auto"
        fill
        src={src}
        alt={alt}
      />
    </div>
  )
}
