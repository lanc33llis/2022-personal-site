const GradientText = ({children, gradient}) => {
  if (!gradient || gradient.length !== 3) {
    gradient = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  }

  return (
  <>
    <style jsx>
      {`
        div :global(*) {
          color: transparent;
          background: linear-gradient(45deg, rgb(${gradient[0][0]}, ${gradient[0][1]}, ${gradient[0][2]}) 20%, rgb(${gradient[1][0]}, ${gradient[1][1]}, ${gradient[1][2]}) 45%, rgb(${gradient[2][0]}, ${gradient[2][1]}, ${gradient[2][2]}) 90%);
          background-clip: text;
        }
      `}
      </style>
    <div>
      {children}
    </div>
  </>
  )
}

export default GradientText