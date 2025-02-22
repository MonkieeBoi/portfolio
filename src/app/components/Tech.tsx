"use client"

import Link from "next/link";
import Image from "next/image";

const techMap = {
    python: { source: "https://www.python.org/", img: "/images/python.svg" },
    mongodb: { source: "https://www.mongodb.com/", img: "/images/mongodb.svg" },
    alpine: { source: "https://alpinejs.dev/", img: "/images/alpine.svg" },
    htmx: { source: "https://htmx.org/", img: "/images/htmx.svg" },
    fastapi: { source: "https://fastapi.tiangolo.com/", img: "/images/fastapi.svg" },
    tailwind: { source: "https://tailwindcss.com/", img: "/images/tailwind.svg" },
    javascript: { source: "https://en.wikipedia.org/wiki/JavaScript", img: "/images/javascript.svg" },
}

export default function Tech({ tech, size = 20 }: { tech: string, size?: number }) {
    if (!(tech in techMap)) {
        return (<></>);
    }

    const { source, img } = techMap[tech];

    return (
        <Link href={source} target="_blank">
            <Image
                src={img}
                alt="icon"
                className="cursor-pointer grayscale brightness-0 invert"
                width={size}
                height={size}
            />
        </Link>
    )
}
