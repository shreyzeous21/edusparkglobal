import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | EduSpark Global",
  description: "The page you're looking for couldn't be found.",
};

export default function NotFoundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
