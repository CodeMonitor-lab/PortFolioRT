
const Visible = ({when,children}) => {
  return when ? <>{children}</>:null
}

export default Visible