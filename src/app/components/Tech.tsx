"use client"

import Link from "next/link";
import Image from "next/image";

const techMap: Record<string, { source: string, img: string }> = {
    alpinejs: { source: "https://alpinejs.dev/", img: "/images/alpine.svg" },
    c: { source: "https://en.wikipedia.org/wiki/C_(programming_language)", img: "/images/c.svg" },
    css: { source: "https://en.wikipedia.org/wiki/CSS", img: "/images/css.svg" },
    docker: { source: "https://www.docker.com/", img: "/images/docker.svg" },
    expressjs: { source: "https://expressjs.com/", img: "/images/express.svg" },
    fastapi: { source: "https://fastapi.tiangolo.com/", img: "/images/fastapi.svg" },
    git: { source: "https://git-scm.com/", img: "/images/git.svg" },
    github: { source: "https://github.com", img: "/images/github.svg" },
    go: { source: "https://go.dev/", img: "/images/go.svg" },
    html: { source: "https://en.wikipedia.org/wiki/HTML", img: "/images/html.svg" },
    htmx: { source: "https://htmx.org/", img: "/images/htmx.svg" },
    java: { source: "https://www.java.com/", img: "/images/java.svg" },
    javascript: { source: "https://en.wikipedia.org/wiki/JavaScript", img: "/images/javascript.svg" },
    mongodb: { source: "https://www.mongodb.com/", img: "/images/mongodb.svg" },
    nextjs: { source: "https://nextjs.org/", img: "/images/nextjs.svg" },
    nix: { source: "https://nix.dev/", img: "/images/nix.svg" },
    nodejs: { source: "https://nodejs.org/en", img: "/images/nodejs.svg" },
    postgresql: { source: "https://www.postgresql.org/", img: "/images/pgsql.svg" },
    python: { source: "https://www.python.org/", img: "/images/python.svg" },
    react: { source: "https://react.dev/", img: "/images/react.svg" },
    sqlite: { source: "https://www.sqlite.org/", img: "/images/sqlite.svg" },
    tailwindcss: { source: "https://tailwindcss.com/", img: "/images/tailwind.svg" },
}

export default function Tech({ tech, size = 20 }: { tech: string, size?: number }) {
    if (!(tech.toLowerCase() in techMap)) {
        return (<></>);
    }

    const { source, img } = techMap[tech.toLowerCase()];

    return (
        <Link href={source} target="_blank">
            <Image
                src={img}
                alt="icon"
                className="cursor-pointer"
                width={size}
                height={size}
            />
        </Link>
    )
}
