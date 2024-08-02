import { type ImageLoaderProps } from 'next/image';

/**
 * @description This function is used to load images with the given width and quality for next image.
 * @param src - The image URL.
 * @param width - The width of the image.
 * @param quality - The quality of the image.
 * @returns The image URL with the given width and quality.
 */
export function imageLoader({ src, width, quality = 75 }: ImageLoaderProps): string {
    return `${src}?w=${width}&q=${quality}`;
}
