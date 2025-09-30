import Image from "next/image";

interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 40, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <Image
        src="/logo.svg"
        alt="ProductJoy Logo"
        width={size}
        height={size}
        className="flex-shrink-0"
      />
      <span className="text-xl font-semibold text-white">
        ProductJoy
      </span>
    </div>
  );
}
