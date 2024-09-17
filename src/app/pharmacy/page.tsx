import fetchImages from "../../lib/fetchImages";
import type { ImagesResults } from "../../models/images";
import ImgContainer from "../components/ImgContainer"
import addBlurredDataUrls from "../../lib/getBase64"


export default async function Pharmacy() {
  const url ="https://api.pexels.com/v1/search?query=veterinary&per_page=30&page=1"
  const images: ImagesResults | undefined = await fetchImages(url)

      
if (!images) {
    return <h2 className="m-4 text-2xl font-bold ">No images found</h2>
 } 
 const photosWithBlur = await addBlurredDataUrls(images)
    return (
     <section className=" px-2 my-3 mt-48 grid gap-2 grid-cols-gallery">
        { photosWithBlur.map( photo => {
        return  <ImgContainer key={photo.id}  photo={photo}/>}) }
    </section>
 )
}