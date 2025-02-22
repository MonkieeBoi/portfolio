"use client"

import Tech from "./Tech"

export default function Languages() {
    const list = ["python", "mongodb", "alpine", "htmx", "fastapi", "tailwind", "javascript"]
    return (
        <div className="bg-gray-600 relative w-screen h-20 flex flex-row items-center justify-center gap-4">
            <div className="flex flex-row gap-5">
                {
                    list.map((t) =>
                        <Tech
                            tech={t}
                            key={t}
                            size={60}
                        />
                    )
                }
            </div>
        </div>
    )
}
