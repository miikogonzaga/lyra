const points = document.getElementsByClassName('point')
const heroTitle = document.getElementsByClassName('hero-title')

// Animates the selling points
const animatePoints = (points) => {

  const revealPoint = (index) => {
    points[index].style.opacity = 1
    points[index].style.transform = "scaleX(1) translateY(0)"
    points[index].style.msTransform = "scaleX(1) translateY(0)"
    points[index].style.WebkitTransform = "scaleX(1) translateY(0)"
  }

  // Loops through each selling point and calls revealPoint with its index passed in
  for (let i = 0; i < points.length; i++) { revealPoint(i) }

}

// Animates the hero-title on page load
const animateHeroTitle = (heroTitle) => {

    heroTitle[0].style.opacity = 1
    heroTitle[0].style.transform = "scaleX(1) translateY(0)"
    heroTitle[0].style.msTransform = "scaleX(1) translateY(0)"
    heroTitle[0].style.WebkitTransform = "scaleX(1) translateY(0)"

}

window.onload = () => {

  animateHeroTitle(heroTitle)

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
