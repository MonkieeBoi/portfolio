"use client"

import Link from "next/link";
import Image from "next/image";

const techMap: Record<string, { source: string, img: string }> = {
    alpinejs: { source: "https://alpinejs.dev/", img: "/logos/alpine.svg" },
    c: { source: "https://en.wikipedia.org/wiki/C_(programming_language)", img: "/logos/c.svg" },
    css: { source: "https://en.wikipedia.org/wiki/CSS", img: "/logos/css.svg" },
    docker: { source: "https://www.docker.com/", img: "/logos/docker.svg" },
    expressjs: { source: "https://expressjs.com/", img: "/logos/express.svg" },
    fastapi: { source: "https://fastapi.tiangolo.com/", img: "/logos/fastapi.svg" },
    git: { source: "https://git-scm.com/", img: "/logos/git.svg" },
    github: { source: "https://github.com", img: "/logos/github.svg" },
    go: { source: "https://go.dev/", img: "/logos/go.svg" },
    html: { source: "https://en.wikipedia.org/wiki/HTML", img: "/logos/html.svg" },
    htmx: { source: "https://htmx.org/", img: "/logos/htmx.svg" },
    java: { source: "https://www.java.com/", img: "/logos/java.svg" },
    javascript: { source: "https://en.wikipedia.org/wiki/JavaScript", img: "/logos/javascript.svg" },
    mongodb: { source: "https://www.mongodb.com/", img: "/logos/mongodb.svg" },
    nextjs: { source: "https://nextjs.org/", img: "/logos/nextjs.svg" },
    nix: { source: "https://nix.dev/", img: "/logos/nix.svg" },
    nodejs: { source: "https://nodejs.org/en", img: "/logos/nodejs.svg" },
    postgresql: { source: "https://www.postgresql.org/", img: "/logos/pgsql.svg" },
    python: { source: "https://www.python.org/", img: "/logos/python.svg" },
    react: { source: "https://react.dev/", img: "/logos/react.svg" },
    sqlite: { source: "https://www.sqlite.org/", img: "/logos/sqlite.svg" },
    tailwindcss: { source: "https://tailwindcss.com/", img: "/logos/tailwind.svg" },
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
