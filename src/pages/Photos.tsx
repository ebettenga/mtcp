import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Section from "../components/Section";

interface GalleryImage {
  src: string;
  original: string;
  width: number;
  height: number;
  caption?: string;
}

// Example images using picsum.photos
const images: GalleryImage[] = [
  {
    src: "https://picsum.photos/seed/1/400/300",
    original: "https://picsum.photos/seed/1/1200/900",
    width: 400,
    height: 300,
    caption: "Tennis action shot",
  },
  {
    src: "https://picsum.photos/seed/2/300/400",
    original: "https://picsum.photos/seed/2/900/1200",
    width: 300,
    height: 400,
    caption: "Club event",
  },
  {
    src: "https://picsum.photos/seed/3/400/250",
    original: "https://picsum.photos/seed/3/1200/750",
    width: 400,
    height: 250,
    caption: "Summer tournament",
  },
  {
    src: "https://picsum.photos/seed/4/350/350",
    original: "https://picsum.photos/seed/4/1050/1050",
    width: 350,
    height: 350,
    caption: "Team photo",
  },
  {
    src: "https://picsum.photos/seed/5/400/300",
    original: "https://picsum.photos/seed/5/1200/900",
    width: 400,
    height: 300,
    caption: "Match day",
  },
  {
    src: "https://picsum.photos/seed/6/300/350",
    original: "https://picsum.photos/seed/6/900/1050",
    width: 300,
    height: 350,
    caption: "Award ceremony",
  },
  {
    src: "https://picsum.photos/seed/7/450/300",
    original: "https://picsum.photos/seed/7/1350/900",
    width: 450,
    height: 300,
    caption: "Practice session",
  },
  {
    src: "https://picsum.photos/seed/8/350/280",
    original: "https://picsum.photos/seed/8/1050/840",
    width: 350,
    height: 280,
    caption: "Club house",
  },
  {
    src: "https://picsum.photos/seed/9/400/400",
    original: "https://picsum.photos/seed/9/1200/1200",
    width: 400,
    height: 400,
    caption: "Group celebration",
  },
  {
    src: "https://picsum.photos/seed/10/380/300",
    original: "https://picsum.photos/seed/10/1140/900",
    width: 380,
    height: 300,
    caption: "Junior players",
  },
  {
    src: "https://picsum.photos/seed/11/300/380",
    original: "https://picsum.photos/seed/11/900/1140",
    width: 300,
    height: 380,
    caption: "Spring event",
  },
  {
    src: "https://picsum.photos/seed/12/420/300",
    original: "https://picsum.photos/seed/12/1260/900",
    width: 420,
    height: 300,
    caption: "Tennis clinic",
  },
  {
    src: "https://picsum.photos/seed/13/350/300",
    original: "https://picsum.photos/seed/13/1050/900",
    width: 350,
    height: 300,
    caption: "Doubles match",
  },
  {
    src: "https://picsum.photos/seed/14/400/320",
    original: "https://picsum.photos/seed/14/1200/960",
    width: 400,
    height: 320,
    caption: "Championship finals",
  },
  {
    src: "https://picsum.photos/seed/15/320/400",
    original: "https://picsum.photos/seed/15/960/1200",
    width: 320,
    height: 400,
    caption: "Victory moment",
  },
  {
    src: "https://picsum.photos/seed/16/400/280",
    original: "https://picsum.photos/seed/16/1200/840",
    width: 400,
    height: 280,
    caption: "Court overview",
  },
  {
    src: "https://picsum.photos/seed/17/360/360",
    original: "https://picsum.photos/seed/17/1080/1080",
    width: 360,
    height: 360,
    caption: "Players gathering",
  },
  {
    src: "https://picsum.photos/seed/18/400/300",
    original: "https://picsum.photos/seed/18/1200/900",
    width: 400,
    height: 300,
    caption: "Warm-up session",
  },
  {
    src: "https://picsum.photos/seed/19/380/320",
    original: "https://picsum.photos/seed/19/1140/960",
    width: 380,
    height: 320,
    caption: "Club members",
  },
  {
    src: "https://picsum.photos/seed/20/400/350",
    original: "https://picsum.photos/seed/20/1200/1050",
    width: 400,
    height: 350,
    caption: "End of season party",
  },
];

export default function Photos() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const handleClick = (index: number) => {
    setLightboxIndex(index);
  };

  // Convert gallery images to lightbox slides
  const slides = images.map((image) => ({
    src: image.original,
    alt: typeof image.caption === "string" ? image.caption : "",
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="pt-[76px] md:pt-[100px]">
        <Section
          title="Photo Gallery"
          text="Browse through our collection of memories from events, tournaments, and club activities."
        />
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">

        <div className="max-w-6xl mx-auto">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-2 md:gap-4">
            {images.map((image, index) => {
              return (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg cursor-pointer group mb-2 md:mb-4 break-inside-avoid"
                  onClick={() => handleClick(index)}
                >
                  <img
                    src={image.src}
                    alt={image.caption || `Photo ${index + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <p className="text-white text-sm">{image.caption}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <Lightbox
          open={lightboxIndex >= 0}
          index={lightboxIndex}
          close={() => setLightboxIndex(-1)}
          slides={slides}
        />
      </div>
    </div>
  );
}
