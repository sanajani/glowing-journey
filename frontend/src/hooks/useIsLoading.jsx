import { useState } from "react"


export const useIsLoading = () => {
    const [isLoading, setIsLoading] = useState(true);

const handleLoad = () => {
    setIsLoading(false)
  }

    return [isLoading, handleLoad]
}