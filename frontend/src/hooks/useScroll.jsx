import { useEffect, useState } from "react"

export const useScroll = (scrollTriggerPointInY) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > scrollTriggerPointInY)
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollTriggerPointInY])
    return isScrolled
}