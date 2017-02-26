const animatePoints = () => {

  const points = document.getElementsByClassName('point')

  const revealFirstPoint = () => {
    points[0].style.opacity = 1
    points[0].style.transform = "scaleX(1) translateY(0)"
    points[0].style.msTransform = "scaleX(1) translateY(0)"
    points[0].style.WebkitTransform = "scaleX(1) translateY(0)"
  }

  const revealSecondPoint = () => {
    points[1].style.opacity = 1
    points[1].style.transform = "scaleX(1) translateY(0)"
    points[1].style.msTransform = "scaleX(1) translateY(0)"
    points[1].style.WebkitTransform = "scaleX(1) translateY(0)"
  }

  const revealThirdPoint = () => {
    points[2].style.opacity = 1
    points[2].style.transform = "scaleX(1) translateY(0)"
    points[2].style.msTransform = "scaleX(1) translateY(0)"
    points[2].style.WebkitTransform = "scaleX(1) translateY(0)"
  }

  revealFirstPoint()
  revealSecondPoint()
  revealThirdPoint()

}

window.onload = () => {
  animatePoints()
}
