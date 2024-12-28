"use client"

import { ChevronRight, Cloud, Lock, SquareChevronRight, PersonStanding, Server, Sprout, ThumbsUp, Users } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import LinkPreview from "./link-preview";

function Background() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
    )
}

export type Celebration = {
  date: string;
  name: string;
  description: string;
  origin: string;
  full_description: string;
  good_to_know: string;
  action: string;
}

export default function CelebrationSection({data}: {data: Celebration}) {
  const date = new Date();
  const month = data.date.slice(0, 2);
  const day = data.date.slice(2, 4);
  const year = date.getFullYear();
  const dateString = new Date(`${year}-${month}-${day}`).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative isolate overflow-hidden px-6 pt-24 sm:pt-28 lg:overflow-visible lg:px-0">
      {/* <Background/> */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-primary">{dateString}</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
                {data.name}
              </h1>
              <p className="mt-6 text-xl/8 ">
                {data.description}
              </p>
              <div className="mt-8">
                <Button
                    variant="outline"
                    onClick={() => setIsOpen(!isOpen)}
                    className="hover:bg-transparent"
                >
                    {isOpen ? 'Fermer la description' : 'En savoir plus'}
                    <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-16 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src="/albert.jpg"
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className={`max-w-xl text-base/7 lg:max-w-lg ${isOpen ? 'block' : 'hidden'}`}>
              <p>
                {data.full_description}
              </p>
              <ul role="list" className="mt-8 space-y-8">
                <li className="flex gap-x-3">
                  <Sprout aria-hidden="true" className="mt-1 size-5 flex-none text-primary" />
                  <span>
                    <strong className="font-semibold text-primary">Origine</strong> {data.origin}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ThumbsUp aria-hidden="true" className="mt-1 size-5 flex-none text-primary" />
                  <span>
                    <strong className="font-semibold text-primary">Bon à savoir</strong> {data.good_to_know}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <PersonStanding aria-hidden="true" className="mt-1 size-5 flex-none text-primary" />
                  <span>
                    <strong className="font-semibold text-primary">Actions</strong> {data.action}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <SquareChevronRight aria-hidden="true" className="mt-1 size-5 flex-none text-primary" />
                  <span>
                    <strong className="font-semibold text-primary">Pour aller encore plus loin</strong> Donne des choses à achter
                  </span>
                  {/* <LinkPreview url={"https://www.creowis.com/"} /> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
