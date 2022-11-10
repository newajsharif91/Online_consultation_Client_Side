import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - MTY`;
    }, [title])
}

export default useTitle;