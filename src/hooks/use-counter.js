import { useEffect, useState } from "react"

const useCounter = (startingValue, sign) => {
  const [counter, setCounter] = useState(startingValue)

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) =>
        sign === "+" ? prevCounter + 1 : prevCounter - 1
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [startingValue, sign])

  return counter
}

export default useCounter
