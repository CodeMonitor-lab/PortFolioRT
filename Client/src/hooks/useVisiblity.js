import {useState,useCallback} from 'react'

const useVisiblity = (initial = false)=>{
    const [isVisible,setIsVisible] = useState(initial)

    const show = useCallback(()=>setIsVisible(true),[]);
    const hide = useCallback(()=>setIsVisible(false),[]);
    const toggle = useCallback(()=>setIsVisible(prev => !prev),[]);

    return {isVisible,show,hide,toggle}
}

export default useVisiblity;