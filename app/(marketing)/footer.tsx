import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex justify-center items-center gap-5 h-full">
      <Button size="lg" variant="ghost">
          <Image 
            src="/en.svg" 
            alt="Croatian" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          />
          English
       </Button>
       <Button size="lg" variant="ghost">
          <Image 
            src="/sd.jpg" 
            alt="Croatian" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          />
          Arabic
       </Button>
      </div>
    </footer>
  );
};