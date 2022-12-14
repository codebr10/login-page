//import Image from 'next/image'
import { Button, Checkbox, Input } from "@material-tailwind/react";

export default function Home() {

  return (
    <div 
      className="w-full h-full bg-cover bg-no-repeat bg-bottom flex justify-center items-center relative 
      before:absolute before:w-full before:h-full before:backdrop-grayscale before:bg-white/5
      after:absolute after:w-full after:h-full after:bg-gray-900 after:opacity-80" 
    style={{
      backgroundImage: `url('/bg.jpg')`
    }}>

      <div className="relative z-10">
        <form className="w-96">
          <div className="text-white mb-6">
            <Input variant="standard" color="blue-gray" style={{ borderColor: "#fff" }} label="Username" />
          </div>
          <div className="text-white mb-8">
            <Input variant="standard" color="blue-gray" style={{ borderColor: "#fff" }} label="Password" />
          </div>
          <div className="flex justify-between items-center">
            <Checkbox color="blue-gray" label="Remember Me" className="text-white" />
            <Button type="submit" size="sm" color="blue-gray" className="bg-blue-gray-600 px-8 rounded">Sign in</Button>
          </div>

          <hr className="block border-gray-700 my-12"/>
          <a href="" className="block text-center text-white italic text-xs underline">Forgot password ?</a>
        </form>
      </div>
      
    </div>
  )
}
