import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "@/components/ui/animated-slideshow"
import { ChevronLeft } from "lucide-react"

const SLIDES = [
  {
    id: "slide-1",
    title: "Atelier médias",
    imageUrl: "/images/Convention 2025.jpg",
  },
  {
    id: "slide-2",
    title: "Programme de prière",
    imageUrl: "/images/Programme 1.jpg",
  },
  {
    id: "slide-3",
    title: "Formation biblique",
    imageUrl: "/images/image 3.jpg",
  },
  {
    id: "slide-4",
    title: "Soirée d'adoration",
    imageUrl: "/images/Programme 2.jpg",
  },
  {
    id: "slide-5",
    title: "Impact communautaire",
    imageUrl: "/images/image 4.jpg",
  },
]

export function HoverSliderDemo() {
  return (
    <HoverSlider className="relative rounded-3xl border border-slate-200 bg-[#f4f4f4] p-6 md:p-10 text-[#3d3929]">
      <button
        type="button"
        aria-label="Précédent"
        className="absolute left-0 top-1/2 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#161719] text-white lg:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_1.3fr] md:gap-12">
        {/* Colonne gauche : image */}
        <HoverSliderImageWrap
          className="h-[340px] w-full overflow-hidden rounded-sm sm:h-[400px] md:h-[480px]"
        >
          {SLIDES.map((slide, index) => (
            <HoverSliderImage
              key={slide.id}
              index={index}
              imageUrl={slide.imageUrl}
              src={slide.imageUrl}
              alt={slide.title}
              className="size-full object-cover"
              loading="eager"
              decoding="async"
            />
          ))}
        </HoverSliderImageWrap>

        {/* Colonne droite : texte */}
        <div className="flex flex-col items-start justify-center gap-4">
          <h3 className="text-sm font-medium capitalize tracking-wide text-[#c96442]">
            / Nos services & événements
          </h3>
          {SLIDES.map((slide, index) => (
            <TextStaggerHover
              key={slide.id}
              index={index}
              className="cursor-pointer text-4xl font-bold uppercase tracking-tight text-[#260d10] md:text-5xl"
              text={slide.title}
            />
          ))}
        </div>
      </div>
    </HoverSlider>
  )
}
