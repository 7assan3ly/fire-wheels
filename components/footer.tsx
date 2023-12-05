import { footerLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex flex-col gap-8 p-8">
      {/* UPPER SECTION */}
      <div className="flex justify-between max-md:flex-col sm:px-16 px-6 py-10 gap-8">
        {/* LOGO SECTION */}
        <div className="flex flex-col gap-4 ">
          <div className="relative w-40 h-10">
              <Image
                src='/logo.svg'
                fill
                alt="Footer Logo"
                className="object-contain"
              />
          </div>
          <h2 className="text-[var(--softTextColor)]">Fire WHEELS 2023. All Rights Reserved</h2>
        </div>

        {/* LINKS SECTION */}
        <div className="flex items-center gap-20 flex-wrap ">
          {footerLinks.map((linkCat) => (
          <div key={linkCat.title}>
            <h2 className="mb-4">{linkCat.title}</h2>
              <div className="flex flex-col gap-4">
                {linkCat.links.map((link) => (
                    <Link
                      href={link.url}
                      key={link.title}
                      className="text-[var(--softTextColor)] transition hover:text-gray-900"
                    >
                      {link.title}
                    </Link>
                ))}
              </div>
          </div>
          ))}
        </div>
      </div>

      {/* LOWER SECTION */}
      <div className="flex flex-wrap gap-6 items-center justify-center md:justify-between text-[var(--softTextColor)]">
        <h2>@2023 Fire WHEELS. All Rights Reserved</h2>
        <div className="flex items-center gap-6">
          <Link href='/' className="transition hover:text-gray-900">Privacy & Policy</Link>
          <Link href='/' className="transition hover:text-gray-900">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer