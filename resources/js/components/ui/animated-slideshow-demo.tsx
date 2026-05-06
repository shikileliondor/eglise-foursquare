import {
  ContainerAnimated,
  ContainerStagger,
  GalleryGrid,
  GalleryGridCell,
} from "@/components/ui/cta-section-with-gallery"
import { Button } from "@/components/ui/button"

const IMAGES = [
  "/images/image.jpg",
  "/images/image%201.jpg",
  "/images/image%202.jpg",
  "/images/image%203.jpg",
]

export const AboutDemo = () => {
  return (
    <section>
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-6 px-6 py-8 md:grid-cols-2 md:gap-8 md:px-8 md:py-10">
        <ContainerStagger>
          <ContainerAnimated className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-rose-500 md:text-sm">
           Église Évangélique Foursquare Côte d’Ivoire
          </ContainerAnimated>
          <ContainerAnimated className="max-w-xl text-base font-normal leading-relaxed text-slate-700 md:text-lg">
            Grandir dans la foi, marcher dans la lumière. Un temps fort de prière, d’adoration et de communion fraternelle pour raviver notre foi et avancer ensemble dans la présence de Dieu.
          </ContainerAnimated>
          <ContainerAnimated className="mt-4 md:mt-5">
            <Button className="rounded-md bg-red-600 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-red-700 md:text-base">
              Participer à la convention
            </Button>
          </ContainerAnimated>
        </ContainerStagger>

        <GalleryGrid>
          {IMAGES.map((imageUrl, index) => (
            <GalleryGridCell index={index} key={index}>
              <img
                className="size-full object-cover object-center"
                width="100%"
                height="100%"
                src={imageUrl}
                alt={`Photo convention ${index + 1}`}
              />
            </GalleryGridCell>
          ))}
        </GalleryGrid>
      </div>
    </section>
  )
}

export function HoverSliderDemo() {
  return <AboutDemo />
}
