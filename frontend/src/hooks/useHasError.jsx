import { useState } from "react"


export const useHasError = () => {
const [hasError, setHasError] = useState(false);
  const handleError = () => {
    setHasError(true)
  }
    return [hasError, handleError]
}