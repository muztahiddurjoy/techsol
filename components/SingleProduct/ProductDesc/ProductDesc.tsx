import React from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const ProductDesc = () => {
  return (
    <div className="md:px-14 px-5">
      <Tabs defaultValue="genset" className='bg-gray-300 p-3 rounded-xl'>
        <TabsList className='bg-transparent'>
          <TabsTrigger className='font-semibold uppercase text-gray-500 data-[state=active]:bg-primary data-[state=active]:text-white rounded-full text-xs px-2' value="genset">Genset</TabsTrigger>
          <TabsTrigger className='font-semibold uppercase text-gray-500 data-[state=active]:bg-primary data-[state=active]:text-white rounded-full text-xs px-2' value="engine">Engine</TabsTrigger>
          <TabsTrigger className='font-semibold uppercase text-gray-500 data-[state=active]:bg-primary data-[state=active]:text-white rounded-full text-xs px-2' value="alternator">Alternator</TabsTrigger>
          <TabsTrigger className='font-semibold uppercase text-gray-500 data-[state=active]:bg-primary data-[state=active]:text-white rounded-full text-xs px-2' value="dimensions">Dimensions</TabsTrigger>
        </TabsList>
        <TabsContent value="genset">
          <div className="grid grid-cols-3 text-sm text-gray-600 [&>*]:my-2 md:px-4">
            <p>Kire</p>
            <div>Kemon asos</div>
            <p>Kire</p>
            <p>Kire</p>
            <div>Kemon asos</div>
            <p>Kire</p>
          </div>
        </TabsContent>
        <TabsContent value="engine"> 
          <div className="grid grid-cols-3 text-sm text-gray-600 [&>*]:my-2 md:px-4">
            
          </div>
        </TabsContent>
        <TabsContent value="alternator">
           <div className="grid grid-cols-3 text-sm text-gray-600 [&>*]:my-2 md:px-4">
            
            </div>
        </TabsContent>
        <TabsContent value="dimensions">
        <div className="grid grid-cols-3 text-sm text-gray-600 [&>*]:my-2 md:px-4">
            
            </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ProductDesc