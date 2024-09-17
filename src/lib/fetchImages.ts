import type { ImagesResults } from "../models/images";
import { ImagesSchemeWithPhotos } from "../models/images";
import env from "./env"

export default async function fetchImages(url: string):
 Promise<ImagesResults | undefined> {
    try{
        const res = await fetch(url, {
            headers: {
                Authorization: env.PEXELS_API_KEY
            }
        })
       if (!res.ok){
           throw new Error("Failed to fetch images!/n");
       }
       const imagesResults: ImagesResults = await res.json();
       //Parse data with zod scheme
       console.log(imagesResults)
       const parsedData = ImagesSchemeWithPhotos.parse(imagesResults);
    
       if (parsedData.total_results === 0) return undefined

       return parsedData
    }
    catch(e){
        // Will show in terminal console
        if (e instanceof Error) console.error(e.stack);
    }
  
}