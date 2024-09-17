import Link from "next/link"

type Props = {
    topic: string | undefined,
    page: string | undefined,
    prevPage: string | null,
    nextPage: string | null,

}

export default function Footer({ topic, page, prevPage, nextPage}: Props) {

if (!prevPage && !nextPage) return  

   const pageNums: number[] = []
    if (prevPage && nextPage) {
        for (let i = parseInt(prevPage) + 1; i < parseInt (nextPage); i++) {
            pageNums.push(i)
        }
    }

    const nextPageArea = nextPage
    ? (
        <>
            <Link href={`/results/${topic}/${nextPage}}`} className={!nextPage ? "mx-auto" : ""}>
              &lt;&lt;&lt; {!nextPage ? "back" : ""}
             </Link>
            
        </>
       
    ): null

    const prevPageArea = prevPage
    ? (
        <>
            <Link href={`/results/${topic}/${prevPage}}`} className={!prevPage ? "mx-auto" : ""}>
               {!prevPage ? "more" : "" } &gt;&gt;&gt;{!prevPage ? "more" : ""}
             </Link>
             {pageNums.map(num => (
                page && num === parseInt(page) ? num 
                : (
                <Link key={num} href={`/results/${topic}/${num}`} className="underline">
                 {num}
               </Link>)
             ))}
        </>
       
    ): null
    
    return (
        <footer className="flex flex-row justify-between p-5 
        text-lg bg-[#000000] text-[gold] items-center
        py-4 font-bold w-[6em] max-lg:w-[4em] mx-auto"> 
            {prevPageArea}
            {nextPageArea}
          
        </footer>
    )
}