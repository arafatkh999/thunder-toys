import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title=`${title} - Thunder Toys`;
    },[title])
};

export default useTitle;