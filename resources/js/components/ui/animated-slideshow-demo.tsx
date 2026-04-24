import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "@/components/ui/animated-slideshow"

const SLIDES = [
  {
    id: "slide-1",
    title: "Former",
    subtitle: "Élever une génération enracinée",
    imageUrl: "/images/Convention 2025.jpg",
  },
  {
    id: "slide-2",
    title: "Équiper",
    subtitle: "Développer les dons et les talents",
    imageUrl: "/images/Programme 1.jpg",
  },
  {
    id: "slide-3",
    title: "Unir",
    subtitle: "Créer une communauté active",
    imageUrl: "/images/image 3.jpg",
  },
  {
    id: "slide-4",
    title: "Impacter",
    subtitle: "Porter la lumière de Christ",
    imageUrl: "/images/Programme 2.jpg",
  },
]

export function HoverSliderDemo() {
  return (
    <HoverSlider className="rounded-3xl border border-slate-200 bg-[#f4f4f4] p-6 md:p-10 text-[#3d3929]">
      <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#c96442]">
        / notre vision
      </h3>
      <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12">
        <div className="flex flex-col space-y-3 md:space-y-5">
          {SLIDES.map((slide, index) => (
            <div key={slide.id}>
              <TextStaggerHover
                index={index}
                className="cursor-pointer text-4xl font-bold uppercase tracking-tight text-[#260d10]"
                text={slide.title}
              />
              <p className="text-sm text-slate-600">{slide.subtitle}</p>
            </div>
          ))}
        </div>
        <HoverSliderImageWrap className="h-[320px] w-full rounded-2xl md:w-[420px]">
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
      </div>
    </HoverSlider>
  )
}
