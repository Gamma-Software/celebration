"use client";

import {
  SquareChevronRight,
  PersonStanding,
  Sprout,
  ThumbsUp,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import fallback from "@/public/default-image.jpg";
import { Skeleton } from "@/components/ui/skeleton";
import ReactMarkdown from "react-markdown";

function ImageWithFallback({
  src,
  alt,
  width,
  height,
  objectFit,
  className,
  fallBackSrc = fallback.src,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  objectFit: string;
  className: string;
  fallBackSrc: string;
}) {
  const [imageError, setImageError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative">
      <Image
        src={imageError ? fallBackSrc : src}
        alt={alt}
        width={width}
        height={height}
        objectFit={objectFit}
        className={className}
        onError={() => setImageError(true)}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

export type Celebration = {
  date: string;
  name: string;
  description: string;
  origin: string;
  full_description?: string;
  good_to_know?: string;
  action?: string;
  image?: string;
  image_site?: string;
  more?: string;
};

export default function CelebrationSection({ data }: { data: Celebration }) {
  const dateString = data.date;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative isolate overflow-hidden px-6 pt-24 sm:pt-28 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-primary">
                {dateString}
              </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
                {data.name}
              </h1>
              <p className="mt-6 text-xl/8 ">{data.description}</p>
              <div className="mt-8">
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  className="hover:bg-transparent"
                >
                  {isOpen ? "Fermer la description" : "En savoir plus"}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="order-last lg:order-none -mt-12 -ml-12 p-12 lg:sticky lg:top-16 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <a
            href={data.image_site || undefined}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageWithFallback
              src={data.image || fallback.src}
              alt={data.name}
              width={1000}
              height={1000}
              objectFit="cover"
              className="w-[48rem] max-w-none max-h-[calc(70vh)] object-cover rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] cursor-pointer hover:opacity-90 transition-opacity"
              fallBackSrc={fallback.src}
            />
          </a>
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 sm:mb-20">
          <div className="lg:pr-4">
            <div
              className={`max-w-xl text-base/7 lg:max-w-lg ${
                isOpen ? "block" : "hidden"
              }`}
            >
              {data.full_description && (
                <ReactMarkdown
                  components={{
                    a: (
                      props: React.AnchorHTMLAttributes<HTMLAnchorElement>
                    ) => (
                      <a
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        {...props}
                      />
                    ),
                    strong: (props: React.HTMLAttributes<HTMLElement>) => (
                      <strong className="font-semibold" {...props} />
                    ),
                    em: (props: React.HTMLAttributes<HTMLElement>) => (
                      <em className="italic" {...props} />
                    ),
                    li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
                      <li className="list-disc ml-4" {...props} />
                    ),
                  }}
                >
                  {data.full_description}
                </ReactMarkdown>
              )}
              <ul role="list" className="mt-8 space-y-8">
                {data.origin && (
                  <li className="flex gap-x-3">
                    <Sprout
                      aria-hidden="true"
                      className="size-5 flex-none text-primary"
                    />
                    <span>
                      <strong className="font-semibold text-primary">
                        Origine
                      </strong>{" "}
                      <ReactMarkdown
                        components={{
                          a: (
                            props: React.AnchorHTMLAttributes<HTMLAnchorElement>
                          ) => (
                            <a
                              className="text-primary hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                              {...props}
                            />
                          ),
                          strong: (
                            props: React.HTMLAttributes<HTMLElement>
                          ) => <strong className="font-semibold" {...props} />,
                          em: (props: React.HTMLAttributes<HTMLElement>) => (
                            <em className="italic" {...props} />
                          ),
                          li: (
                            props: React.LiHTMLAttributes<HTMLLIElement>
                          ) => <li className="list-disc ml-4" {...props} />,
                        }}
                      >
                        {data.origin}
                      </ReactMarkdown>
                    </span>
                  </li>
                )}
                {data.good_to_know && (
                  <li className="flex gap-x-3">
                    <ThumbsUp
                      aria-hidden="true"
                      className="size-5 flex-none text-primary"
                    />
                    <span>
                      <strong className="font-semibold text-primary">
                        Bon à savoir
                      </strong>{" "}
                      <ReactMarkdown
                        components={{
                          a: (
                            props: React.AnchorHTMLAttributes<HTMLAnchorElement>
                          ) => (
                            <a
                              className="text-primary hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                              {...props}
                            />
                          ),
                          strong: (
                            props: React.HTMLAttributes<HTMLElement>
                          ) => <strong className="font-semibold" {...props} />,
                          em: (props: React.HTMLAttributes<HTMLElement>) => (
                            <em className="italic" {...props} />
                          ),
                          li: (
                            props: React.LiHTMLAttributes<HTMLLIElement>
                          ) => <li className="list-disc ml-4" {...props} />,
                        }}
                      >
                        {data.good_to_know}
                      </ReactMarkdown>
                    </span>
                  </li>
                )}
                {data.action && (
                  <li className="flex gap-x-3">
                    <PersonStanding
                      aria-hidden="true"
                      className="size-5 flex-none text-primary"
                    />
                    <span>
                      <strong className="font-semibold text-primary">
                        Actions
                      </strong>{" "}
                      <ReactMarkdown
                        components={{
                          a: (
                            props: React.AnchorHTMLAttributes<HTMLAnchorElement>
                          ) => (
                            <a
                              className="text-primary hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                              {...props}
                            />
                          ),
                          strong: (
                            props: React.HTMLAttributes<HTMLElement>
                          ) => <strong className="font-semibold" {...props} />,
                          em: (props: React.HTMLAttributes<HTMLElement>) => (
                            <em className="italic" {...props} />
                          ),
                          li: (
                            props: React.LiHTMLAttributes<HTMLLIElement>
                          ) => <li className="list-disc ml-4" {...props} />,
                        }}
                      >
                        {data.action}
                      </ReactMarkdown>
                    </span>
                  </li>
                )}
                {data.more && (
                  <li className="flex gap-x-3">
                    <SquareChevronRight
                      aria-hidden="true"
                      className="mt-1 size-5 flex-none text-primary"
                    />
                    <span>
                      <strong className="font-semibold text-primary">
                        Pour aller encore plus loin
                      </strong>{" "}
                      <ReactMarkdown
                        components={{
                          a: (
                            props: React.AnchorHTMLAttributes<HTMLAnchorElement>
                          ) => (
                            <a
                              className="text-primary hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                              {...props}
                            />
                          ),
                          strong: (
                            props: React.HTMLAttributes<HTMLElement>
                          ) => <strong className="font-semibold" {...props} />,
                          em: (props: React.HTMLAttributes<HTMLElement>) => (
                            <em className="italic" {...props} />
                          ),
                          li: (
                            props: React.LiHTMLAttributes<HTMLLIElement>
                          ) => <li className="list-disc ml-4" {...props} />,
                        }}
                      >
                        {data.more}
                      </ReactMarkdown>
                    </span>
                    {/* <LinkPreview url={"https://www.creowis.com/"} /> */}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
