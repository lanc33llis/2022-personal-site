const lerp = (color1, color2, tick, totalTicks) => {
  const [r1, g1, b1] = color1
  const [r2, g2, b2] = color2
  const r = Math.round(r1 + (r2 - r1) * tick / totalTicks)
  const g = Math.round(g1 + (g2 - g1) * tick / totalTicks)
  const b = Math.round(b1 + (b2 - b1) * tick / totalTicks)
  return [r, g, b]
}

export default lerp