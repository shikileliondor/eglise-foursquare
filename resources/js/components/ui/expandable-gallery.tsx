import { motion } from 'framer-motion'

interface ExpandableGalleryProps {
    images: string[]
}

export function ExpandableGallery({ images }: ExpandableGalleryProps) {
    return (
        <div className="flex h-[360px] flex-col gap-4 sm:h-[420px] sm:flex-row">
            {images.map((image, index) => (
                <motion.article
                    key={image}
                    className="relative flex-1 overflow-hidden rounded-2xl"
                    whileHover={{ flex: 1.8 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                    <img
                        src={image}
                        alt={`Moment Light Foursquare ${index + 1}`}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                </motion.article>
            ))}
        </div>
    )
}
