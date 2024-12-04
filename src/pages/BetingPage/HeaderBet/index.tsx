import HeaderPrice from "./HeaderPrice"
import HeaderTime from "./HeaderTime"

const HeaderBet = () => {
  return (
    <div className="flex items-center justify-between">
      <HeaderPrice />
      <HeaderTime />
    </div>
  )
}

export default HeaderBet
