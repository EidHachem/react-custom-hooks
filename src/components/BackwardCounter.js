import Card from "./Card"
import useCounter from "../hooks/use-counter"

const BackwardCounter = () => {
  const counter = useCounter(0, "-")

  return <Card>{counter}</Card>
}

export default BackwardCounter
