import {useEffect, useRef} from "react";


export const useScroll = (parentRef: any, childRef: any, callback: any) => {

    const observer: any = useRef()

    useEffect(() => {
        let options = {
            root: parentRef.current,
            rootMargin: '0px',
            threshold: 0
        }

        observer.current = new IntersectionObserver(([target]) => {
            if (target.isIntersecting) {
                console.log('intersected')
                callback()
            }
        }, options)

        observer.current.observe(childRef.current)

        return function() {
            observer.current.unobserve(childRef.current)
        }
    }, [callback])

};

