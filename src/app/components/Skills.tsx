"use client"

import Tech from "./Tech"

export default function Skills() {
    const skills = [
        "Alpine.js",
        "C",
        "CSS",
        "Docker",
        "Express.js",
        "FastAPI",
        "Git",
        "Github",
        "Go",
        "HTML",
        "HTMX",
        "Java",
        "JavaScript",
        "MongoDB",
        "Next.js",
        "Nix",
        "Node.js",
        "PostgreSQL",
        "Python",
        "React",
        "TailwindCSS",
    ]

    return (
        <div className="bg-gray-700 relative w-screen p-5 flex flex-col items-center justify-center gap-4">
            <h1 className="font-bold text-3xl">Languages and Technologies</h1>
            <div className="w-full lg:w-3/4 2xl:w-3/5 flex flex-row flex-wrap gap-5 justify-center content-stretch">
                {
                    skills.map((t) =>
                        <div
                            className="bg-gray-800 min-h-30 rounded-md flex flex-col items-center p-2 w-full max-w-32"
                            key={t}
                        >
                            <div className="h-full"></div>
                            <Tech
                                tech={t.replaceAll(".", "")}
                                size={60}
                            />
                            <div className="h-full min-h-2"></div>
                            <h2 className="font-bold">
                                {t}
                            </h2>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
