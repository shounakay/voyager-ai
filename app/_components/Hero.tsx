import Image from "next/image";

export const Hero = () => {
    return (
        <section className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 py-16 px-4 sm:px-8 bg-linear-to-r from-[#FFF8F1] to-[#FFF2D9]">
            {/* Left: hero copy + CTAs */}
            <div className="flex-1 w-full max-w-xl flex flex-col items-start px-24">
                <h6 className="sm:text-6xl font-semibold leading-[1.6] text-left">
                    <span className="block text-black">Crafting your</span>
                    <span className="block">
                        <span className="text-primary font-serif">story,</span>{" "}
                        <span className="text-primary font-serif">not</span>{" "}
                        <span className="text-primary font-serif">just</span>
                    </span>
                    <span className="block text-black">your trip</span>
                </h6>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <button
                        type="button"
                        className="rounded-full bg-linear-to-r from-primary to-secondary px-7 py-3 text-white font-medium transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                    >
                        Start Planning
                    </button>
                    <button
                        type="button"
                        className="rounded-full bg-linear-to-r from-primary to-secondary px-7 py-3 text-white font-medium transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                    >
                        Explore Destinations
                    </button>
                </div>
            </div>

            {/* Right: image placeholder */}
            <div className="flex-1 w-full flex justify-center lg:justify-end">
                <div
                    className="w-full max-w-md aspect-4/3 rounded-2xl bg-neutral border border-primary/20 flex items-center justify-center text-primary font-medium"
                    aria-label="Hero image placeholder"
                    role="img"
                >
                    <Image 
                        src="/travellers-undraw.png"
                        alt="Hero image"
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>
        </section>
    )
}