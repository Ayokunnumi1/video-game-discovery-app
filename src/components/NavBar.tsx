interface Props {
    cartItemsCount: number
}
const NavBar = ({cartItemsCount}: Props) => {
  return (
    <div>
          <h2>NavBar:<span>{cartItemsCount}</span></h2>
    </div>
  )
}

export default NavBar
