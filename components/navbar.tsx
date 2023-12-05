import Image from "next/image"
import { ThemeToggle } from "."

const Navbar = () => {
  return (
    <nav className="w-full px-4 h-20 flex items-center justify-between">
      <div className="flex-1">
        <Image
          src='/logo.svg'
          width={300}
          height={50}
          alt="Fire Wheels Logo"
          className="object-contain block mx-auto"
        />
      </div>
      <div>
        <ThemeToggle/>
      </div>
      
    </nav>
  )
}

export default Navbar