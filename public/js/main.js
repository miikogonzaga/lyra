const points = document.getElementsByClassName('point')

const animatePoints = (points) => {

  const revealPoint = (index) => {
    points[index].style.opacity = 1
    points[index].style.transform = "scaleX(1) translateY(0)"
    points[index].style.msTransform = "scaleX(1) translateY(0)"
    points[index].style.WebkitTransform = "scaleX(1) translateY(0)"
  }

  // Loops through each
  for (let i = 0; i < points.length; i++) { revealPoint(i) }

}

window.onload = () => {

  // Animates the selling points for taller screens
  if (window.innerHeight > 950) animatePoints(points)

  const sellingPoints = document.getElementsByClassName('selling-points')[0]
  const scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200

  // Animates the selling points when the user scrolls 200 pixels into view
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
      animatePoints(points)
    }
  })
}
