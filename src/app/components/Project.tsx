"use client"

import Image from "next/image"

export default function Project({ name, desc, link, img }
    : { name: string, desc: string, link: string, img: string }) {
    return (
        <div className="p-8 w-52 h-64 flex flex-col justify-center items-center">
            <h1 className="h-1/5">{name} <a href={link}>→</a></h1>
            <p className="h-1/5">{desc}</p>
            <Image
                src={img}
                alt={desc}
                width={1}
                height={1}
                className="h-3/5 w-full bg-gray-600"
            />
        </div>
    );
}
