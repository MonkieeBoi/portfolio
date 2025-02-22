"use client"

import Image from "next/image"
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import Tech from "./Tech";

export default function Project({ pTitle = "", pDesc = "", source, img, tags = [] }
    : { pTitle?: string, pDesc?: string, source: string, img: string, tags?: Array<string> }) {
    const title = useRef(pTitle);
    const desc = useRef(pDesc);
    // const stars = useRef("0");
    const [loading, setLoading] = useState(true);

    const getInfo = useCallback(async () => {
        const [owner, repo] = source.split("/").slice(-2)

        if (title.current == "") {
            title.current = repo;
        }

        if (desc.current != "") {
            setLoading(false)
            return;
        }

        const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`)

        if (!res.ok) {
            return;
        }

        const data = await res.json();

        // if (data.stargazers_count >= 1000) {
        //     stars.current = `${Math.floor(data.stargazers_count / 100) / 10}k`
        // } else {
        //     stars.current = data.stargazers_count;
        // }
        desc.current = data.description;

        setLoading(false);
    }, [source])

    useEffect(() => {
        getInfo();
    }, [getInfo]);

    if (loading) {
        return (
            <SkeletonTheme baseColor="#2e3440" highlightColor="#434c5e">
                <div className="p-5 w-full max-w-80 flex flex-col gap-2 border-2 border-gray-600">
                    <Skeleton height={220} />
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row gap-2 items-center">
                            <h1 className="font-bold text-xl">
                                <Skeleton width={150} />
                            </h1>
                        </div>
                        <Link href={source} target="_blank">
                            <Skeleton width={16} height={16} />
                        </Link>
                    </div>
                    <Skeleton count={2.75} />
                </div>
            </SkeletonTheme>
        );
    }

    return (
        <div className="p-5 w-full max-w-80 flex flex-col gap-2 border-2 border-gray-600">
            <Image
                src={img}
                alt={title.current}
                width={0}
                height={0}
                className="w-full"
            />
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-1 items-center">
                    <h1 className="font-bold text-xl">{title.current}</h1>
                </div>
                <Link href={source} target="_blank">
                    <Image
                        src="/images/github.svg"
                        alt="github-logo"
                        className="size-4 cursor-pointer"
                        width={0}
                        height={0}
                    />
                </Link>
                {/* <div className="flex flex-row gap-[0.125rem] items-center"> */}
                {/*     <Image */}
                {/*         src="/images/star.svg" */}
                {/*         alt="star" */}
                {/*         className="size-5 inline mr-1" */}
                {/*         width={0} */}
                {/*         height={0} */}
                {/*     /> */}
                {/*     <h1>{stars.current}</h1> */}
                {/* </div> */}
            </div>
            <h2 className="">{desc.current}</h2>
            <div className="h-full"></div>
            <div className="flex flex-row gap-2">
                {
                    tags.map((t) =>
                        <Tech
                            tech={t}
                            key={t}
                        />
                    )
                }
            </div>
        </div>
    );
}
