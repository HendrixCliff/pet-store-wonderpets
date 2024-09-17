import type { Photo } from "../../models/images";
import Image from "next/image";
import Link from "next/link";

type Props = {
    photo: Photo;
};

export default function ImgContainer({ photo }: Props) {
    const widthHeightRatio = photo.width / photo.height
    const galleryHeight = Math.ceil(250 * widthHeightRatio)
     const photoSpans = Math.ceil(galleryHeight / 10) * 1
    return (
        <div  className="w-[250px] mt-20 justify-self-center"
        style={{gridRow: `span ${photoSpans}`}}>
            <Link href={photo.url} target="_blank" className="grid place-content-center">
           <div className="rounded-xl overflow-hidden group">
            <Image
                    src={photo.src.large}
                    alt={photo.alt}
                    width={250}
                    height={galleryHeight}
                    sizes="300px"
                    placeholder="blur"
                    blurDataURL={photo.blurredDataUrl}
                    className="rounded-xl  group-hover:opacity-75"
                />
            </div>
       </Link>
        </div>
    );
} 