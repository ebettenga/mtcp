import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Section from "../components/Section";
import kenny from '../assets/images/tennis-images/kenny.jpg';
interface GalleryImage {
  src: string;
  original: string;
  width: number;
  height: number;
  caption?: string;
}

// Load all images from tennis-images folder via Vite's glob import (no per-file imports)
const imageModules = import.meta.glob<{ default: string }>(
  "../assets/images/tennis-images/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
  { eager: true, query: "?url", import: "default" }
);

function getGalleryImages(): GalleryImage[] {
  const entries = Object.entries(imageModules);
  // Sort by path so order is stable
  entries.sort(([a], [b]) => a.localeCompare(b));
  return entries.map(([path, mod]) => {
    const url = typeof mod === "string" ? mod : (mod as { default: string }).default;
    const name = path.split("/").pop()?.replace(/\.[^.]+$/, "") ?? "Photo";
    return {
      src: url,
      original: url,
      width: 400,
      height: 300,
      caption: name,
    };
  });
}

const images: GalleryImage[] = getGalleryImages();

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
      <Section
        title="Photo Gallery"
        text="Browse through our collection of memories from events, tournaments, and club activities."
        image={kenny}
        imagePosition="right"
      />

      {/* Gallery Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">

        <div className="max-w-6xl mx-auto">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-2 md:gap-4">
            {images.map((image, index) => {
              return (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg cursor-pointer group mt-2 py-2 md:mt-4 mb-2 md:mb-4 break-inside-avoid"
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
