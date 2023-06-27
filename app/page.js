import Section from "@/app/components/Section";
import Form from "@/app/components/Form";


export default function Home() {
  return (
   <div className="h-screen overflow-auto">
       <Section bg="bg-lime-400">
           <Form/>
       </Section>
     <Section bg="bg-cyan-400">
         <h1 className="text-2xl">Hello World</h1>
        </Section>
       <Section bg="bg-fuchsia-400">
           <h1 className="text-2xl">Hello World</h1>
       </Section>
        <Section bg="bg-rose-400">
            <h1 className="text-2xl">Hello World</h1>
        </Section>
   </div>
  )
}
