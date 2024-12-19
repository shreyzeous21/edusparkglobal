"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  // Don't render breadcrumbs on the home screen
  if (pathname === "/") {
    return null;
  }

  return (
    <nav aria-label="breadcrumb" className=" ">
      <div className="max-w-6xl py-1 mx-auto w-full items-center justify-center ">
        <ol className="flex space-x-2 text-xs">
          <li>
            <Link href="/" className="">
              Home
            </Link>
          </li>
          {pathSegments.map((segment, index) => {
            const isLast = index === pathSegments.length - 1;
            const href = "/" + pathSegments.slice(0, index + 1).join("/");

            return (
              <li key={index} className="flex items-center space-x-2">
                <span>/</span>
                {isLast ? (
                  <span className="text-orange-500">
                    {decodeURIComponent(segment)}
                  </span>
                ) : (
                  <Link href={href} className="">
                    {decodeURIComponent(segment)}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
