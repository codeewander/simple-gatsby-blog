function HelloKira(p5) {
  let canvas, centerX, centerY, fontSize, INNER_RADIUS, RADIUS_VARIATION
  const textToWrite = "Hello  from  Kira"
  const SEGMENTS = 100

  p5.setup = () => {
    canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight)
    centerX = p5.windowWidth / 2
    centerY = p5.windowHeight / 2

    let screenPct = p5.min(p5.height, p5.width) / 1000
    fontSize = screenPct * 150
    INNER_RADIUS = screenPct * 200
    RADIUS_VARIATION = screenPct * 200

    p5.textFont("Helvetica")
    p5.textSize(fontSize)
  }

  function pointForIndex(pct) {
    const NOISE_SCALE = 1.5
    let angle = pct * p5.TWO_PI
    let cosAngle = p5.cos(angle)
    let sinAngle = p5.sin(angle)
    let time = p5.frameCount / 100
    let noiseValue = p5.noise(
      NOISE_SCALE * cosAngle + NOISE_SCALE,
      NOISE_SCALE * sinAngle + NOISE_SCALE,
      time
    )
    let radius = INNER_RADIUS + RADIUS_VARIATION * noiseValue
    return {
      x: radius * cosAngle + centerX,
      y: radius * sinAngle + centerY,
    }
  }

  //   p5.windowResized =()=> {
  //     p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  //   }

  p5.draw = () => {
    p5.clear()
    p5.fill(0)
    p5.noStroke()

    p5.beginShape()
    for (let i = 0; i < SEGMENTS; i++) {
      let p0 = pointForIndex(i / SEGMENTS)
      p5.vertex(p0.x, p0.y)
    }
    p5.endShape(p5.CLOSE)

    //draw text
    let pct = p5.atan2(p5.mouseY - centerY, p5.mouseX - centerX) / p5.TWO_PI //follow mouse
    let pixToAngularPct =
      1 / ((INNER_RADIUS + RADIUS_VARIATION / 2) * p5.TWO_PI)
    for (var i = 0; i < textToWrite.length; i++) {
      let charWidth = p5.textWidth(textToWrite.charAt(i))
      pct += (charWidth / 2) * pixToAngularPct

      let leftP = pointForIndex(pct - 0.01)
      let rightP = pointForIndex(pct + 0.01)
      let angle = p5.atan2(leftP.y - rightP.y, leftP.x - rightP.x) + p5.PI

      p5.push()
      let p = pointForIndex(pct)
      p5.translate(p.x, p.y)
      p5.rotate(angle)
      p5.translate(-p.x, -p.y)
      p5.text(textToWrite.charAt(i), p.x - charWidth / 2, p.y)
      p5.pop()
      pct += (charWidth / 2) * pixToAngularPct
    }
  }
}

export default HelloKira