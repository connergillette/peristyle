import ImageBlock from './ImageBlock'

export interface Image {
  id: number,
  created_at: Date,
  image_url: string,
  alt_text: string,
  event_id?: number,
  caption?: string,
}
interface Props {
  images: Image[]
}

export default function ImageGrid ({ images }: Props) {

  return (
    <div className="grid grid-flow-row grid-cols-2 w-full gap-2 px-5" >
      {
        images.map((image, index) => (
          <div className=" rounded-lg" key={`image-${index}`}>
            <ImageBlock
              src={image.image_url}
              alt={image.alt_text}
              caption={image.caption}
              borderOnHover
            />
          </div>
        ))
      }
    </div>
  )
}