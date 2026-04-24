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
    title: "frontend dev",
    imageUrl: "/images/Convention 2025.jpg",
  },
  {
    id: "slide-2",
    title: "backend dev",
    imageUrl: "/images/Programme 1.jpg",
  },
  {
    id: "slide-3",
    title: "ui ux design",
    imageUrl: "/images/image 3.jpg",
  },
  {
    id: "slide-4",
    title: "video editing",
    imageUrl: "/images/Programme 2.jpg",
  },
  {
    id: "slide-5",
    title: "seo optimization",
    imageUrl: "/images/image 4.jpg",
  },
]

export function HoverSliderDemo() {
  return (
    <HoverSlider className="relative rounded-3xl border border-slate-200 bg-[#f4f4f4] p-6 md:p-12 lg:p-16 text-[#3d3929]">
      <button
        type="button"
        aria-label="Précédent"
        className="absolute left-0 top-1/2 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#161719] text-white lg:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 xl:gap-24">
        <HoverSliderImageWrap className="order-1 h-[420px] w-full max-w-[460px] justify-self-center overflow-hidden rounded-sm md:h-[560px] lg:justify-self-start">
          {SLIDES.map((slide, index) => (
            <div key={slide.id}>
              <HoverSliderImage
                index={index}
                imageUrl={slide.imageUrl}
                src={slide.imageUrl}
                alt={slide.title}
                className="size-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          ))}
        </HoverSliderImageWrap>
        <div className="order-2 flex flex-col items-start justify-center space-y-4 md:space-y-5">
          <h3 className="mb-4 text-sm font-medium capitalize tracking-wide text-[#c96442]">
            / Our Services
          </h3>
          {SLIDES.map((slide, index) => (
            <div key={slide.id} className="leading-none">
              <TextStaggerHover
                index={index}
                className="cursor-pointer text-3xl font-bold uppercase tracking-tight text-[#260d10] sm:text-4xl md:text-5xl xl:text-6xl"
                text={slide.title}
              />
            </div>
          ))}
        </div>
      </div>
    </HoverSlider>
  )
}
