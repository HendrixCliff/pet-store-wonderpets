import fetchImages from "../../lib/fetchImages";
import type { ImagesResults } from "../../models/images";
import ImgContainer from "../components/ImgContainer"
import addBlurredDataUrls from "../../lib/getBase64"
import Footer from "../components/Footer"
import getPrevNextPage from "../../lib/getPrevNextPages"



type Props = {
      topic?: string | undefined,
      page?: string | undefined,
}

export default async function Gallery({ topic = "pet", page}: Props) {
let url 

if (topic === "pet" && !page) {
      url = `https://api.pexels.com/v1/search?query=pet&per_page=30&page=1`
}
 else if (topic !== "pet" && !page) { 
      url = `https://api.pexels.com/v1/search?query=${topic}&per_page=30&page=1`
 }
 else if (topic !== "pet" && page) {
      url = `https://api.pexels.com/v1/search?query=${topic}&per_page=35&page=${page}`
 }
 else {
 url = `https://api.pexels.com/v1/search?query=pet&per_page=35&page=${page}`
 }
     
const images: ImagesResults | undefined = await fetchImages(url)
    
if (!images || images.per_page === 0) {
   return <h2 className="m-4 text-2xl font-bold ">No images found</h2>
} 
const photosWithBlur = await addBlurredDataUrls(images)

//calculate pagination
const { prevPage, nextPage} = getPrevNextPage(images)
const footerProps = { topic, page, nextPage, prevPage}
return (
      <section className="">
      <section className=" max-lg:pt-[4em] max-lg:px-[2em] pt-[6em] max-lg:auto-rows z-10  auto-rows grid grid-cols-gallery max-lg:grid-cols-gallerian ">
            { photosWithBlur.map( photo => {
            return  <ImgContainer key={photo.id}  photo={photo}/>}) }
      </section>
      <Footer  {...footerProps}/>
      </section>
    ) 
}