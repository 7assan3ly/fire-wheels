import { CarCatalogue, Hero } from "@/components";

export default function Home({searchParams}) {
  return (
    <main className="overflow-hidden">
      <Hero/>
      <CarCatalogue searchParams={searchParams}/>
    </main>
  )
}
