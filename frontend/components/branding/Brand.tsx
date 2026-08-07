import Image from "next/image";
import Link from "next/link";

type BrandProps = {
  compact?: boolean;
};

export default function Brand({ compact = false }: BrandProps) {
  return (
    <Link href="/">
      <Image
        src="/branding/logo.png"
        alt="HackVerse Logo"
        width={80}
        height={80}
        priority
      />
    </Link>
  );
}