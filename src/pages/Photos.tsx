import { useState } from "react";
import { Gallery, type Image } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface GalleryImage extends Image {
  original: string;
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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Photo Gallery
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Browse through our collection of memories from events, tournaments,
          and club activities.
        </p>

        <div className="max-w-6xl mx-auto">
          <Gallery
            images={images}
            onClick={(index) => handleClick(index)}
            enableImageSelection={false}
            rowHeight={220}
            margin={4}
          />
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
