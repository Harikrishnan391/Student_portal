"use client";
import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { PaginationControlsProps } from "@/types";

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "5";

  return (
    <div className="flex items-center justify-center mt-4 gap-4">
      <button
        className={`px-4 py-2 rounded-lg shadow ${
          hasPrevPage
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`);
        }}
      >
        Previous
      </button>

      <button
        className={`px-4 py-2 rounded-lg shadow ${
          hasNextPage
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
