const GradientText = ({children, gradient}) => {
  return (
  <>
    <style jsx>
      {`
        div :global(*) {
          color: transparent;
          background: linear-gradient(45deg, rgb(${gradient?.at(0)?.at(0)}, ${gradient?.at(0)?.at(1)}, ${gradient?.at(0)?.at(2)}) 20%, rgb(${gradient?.at(1)?.at(0)}, ${gradient?.at(1)?.at(1)}, ${gradient?.at(1)?.at(2)}) 45%, rgb(${gradient?.at(2)?.at(0)}, ${gradient?.at(2)?.at(1)}, ${gradient?.at(2)?.at(2)}) 90%);
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