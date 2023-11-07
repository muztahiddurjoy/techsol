import React, { useEffect, useState } from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import axios from 'axios'
import { apiurl } from '@/apiurl'

const ProductDesc = ({id}:{id:string|undefined}) => {
  const [gensets, setgensets] = useState<Array<{first:string,second:string,third:string}>>([])
  const [engine, setengine] = useState<Array<{first:string,second:string,third:string}>>([])
  const [alternator, setalternator] = useState<Array<{first:string,second:string,third:string}>>([])
  const [dimentions, setdimentions] = useState<Array<{first:string,second:string,third:string}>>([])

  useEffect(() => {
    if(id){
      axios.get(`${apiurl}/products/description/${id}`).then((res)=>{
        if(Array.isArray(res.data.result)){
          setgensets([])
          setengine([])
          setalternator([])
          setdimentions([])
          res.data.result.map((v:{first:string,second:string,third:string,title:string})=>{
            if(String(v.title)=="genset"){
              setgensets(p=> [...p,{first:v.first,second:v.second,third:v.third}])
            }
            else if(String(v.title)=="engine"){
              setgensets(p=> [...p,{first:v.first,second:v.second,third:v.third}])
            }
            else if(String(v.title)=="alternator"){
              setgensets(p=> [...p,{first:v.first,second:v.second,third:v.third}])
            }
            else if(String(v.title)=="dimensions"){
              setgensets(p=> [...p,{first:v.first,second:v.second,third:v.third}])
            }
          })
        }
      }).catch((err)=> console.log(err))
    }
  }, [id])
  
  return (
    <div className="md:px-14 px-5 mt-10">
      <Tabs defaultValue="genset" className='bg-gray-300 p-3 rounded-xl'>
        <TabsList className='bg-transparent'>
          <TabsTrigger className='font-semibold uppercase text-gray-500 data-[state=active]:bg-primary data-[state=active]:text-white rounded-full text-xs px-2' value="genset">Genset</TabsTrigger>
          <TabsTrigger className='font-semibold uppercase text-gray-500 data-[state=active]:bg-primary data-[state=active]:text-white rounded-full text-xs px-2' value="engine">Engine</TabsTrigger>
          <TabsTrigger className='font-semibold uppercase text-gray-500 data-[state=active]:bg-primary data-[state=active]:text-white rounded-full text-xs px-2' value="alternator">Alternator</TabsTrigger>
          <TabsTrigger className='font-semibold uppercase text-gray-500 data-[state=active]:bg-primary data-[state=active]:text-white rounded-full text-xs px-2' value="dimensions">Dimensions</TabsTrigger>
        </TabsList>
        <TabsContent value="genset">
          <div className="grid grid-cols-3 text-sm text-gray-600 [&>*]:my-2 md:px-4">
            {gensets.map((v)=> Object.values(v).map((val,i)=> i<=2&&<p key={i}>{val}</p>))}
          </div>
        </TabsContent>
        <TabsContent value="engine"> 
          <div className="grid grid-cols-3 text-sm text-gray-600 [&>*]:my-2 md:px-4">
          {engine.map((v)=> Object.values(v).map((val,i)=> i<=2&&<p key={i}>{val}</p>))}
          </div>
        </TabsContent>
        <TabsContent value="alternator">
           <div className="grid grid-cols-3 text-sm text-gray-600 [&>*]:my-2 md:px-4">
           {alternator.map((v)=> Object.values(v).map((val,i)=> i<=2&&<p key={i}>{val}</p>))}
            </div>
        </TabsContent>
        <TabsContent value="dimensions">
        <div className="grid grid-cols-3 text-sm text-gray-600 [&>*]:my-2 md:px-4">
        {dimentions.map((v)=> Object.values(v).map((val,i)=> i<=2&&<p key={i}>{val}</p>))}
            </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ProductDesc