"use client";

import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

import CourseCoverSvg from "./CourseCoverSvg";

type CourseCoverVariant =
  | "extraSmall"
  | "small"
  | "medium"
  | "regular"
  | "wide";

const variantStyles: Record<CourseCoverVariant, string> = {
  extraSmall: "course-cover_extra_small",
  small: "course-cover_small",
  medium: "course-cover_medium",
  regular: "course-cover_regular",
  wide: "course-cover_wide",
};

interface Props {
  className?: string;
  variant?: CourseCoverVariant;
  coverColor: string;
  coverImage: string;
}

const CourseCover = ({
  className,
  variant = "regular",
  coverColor = "#012B48",
  coverImage = "https://placehold.co/400x600.png",
}: Props) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        variantStyles[variant],
        className
      )}
    >
      <CourseCoverSvg coverColor={coverColor} />
      <div
        className="absolute z-10"
        style={{ left: "12%", width: "87.5%", height: "88%" }}
      >
        <Image
          src={coverImage}
          alt="Course Cover"
          fill
          className="rounded-sm object-fill"
        />
      </div>
    </div>
  );
};

export default CourseCover;
