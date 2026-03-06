import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 text-center">
      <Image
        src="/not-found.svg"
        alt="Page not found"
        width={520}
        height={440}
        className="w-64 sm:w-80"
        priority
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">
          Page not found
        </h1>
        <p className="text-base text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
      <Button asChild className="rounded-xl bg-foreground font-semibold text-background hover:opacity-85">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
