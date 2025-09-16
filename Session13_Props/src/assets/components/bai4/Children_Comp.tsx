
type PropTypes = {
  name: string;
};

const Children_Comp = ({ name }: PropTypes) => {
  return (
    <div>
      <h3>Họ và tên bên component con: {name}</h3>
    </div>
  )
}

export default Children_Comp
