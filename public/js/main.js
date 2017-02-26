const points = document.getElementsByClassName('point')

const animatePoints = (points) => {

  const revealPoint = (index) => {
    points[index].style.opacity = 1
    points[index].style.transform = "scaleX(1) translateY(0)"
    points[index].style.msTransform = "scaleX(1) translateY(0)"
    points[index].style.WebkitTransform = "scaleX(1) translateY(0)"
  }

  for (let i = 0; i < points.length; i++) { revealPoint(i) }

}

window.onload = () => {

  const sellingPoints = document.getElementsByClassName('selling-points')[0]
  const scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 100

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
      animatePoints(points)
    }
  })
}
