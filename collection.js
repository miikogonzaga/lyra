const collectionTemplate =
  '<div class="collection-album-container column third">'
  + '  <img src="https://upload.wikimedia.org/wikipedia/en/a/a1/Radiohead.okcomputer.albumart.jpg"/>'
  + '  <div class="collection-album-info caption">'
  + '    <p>'
  + '      <a class="album-name" href="album.html">OK Computer</a>'
  + '      <br/>'
  + '      <a href="album.html">Radiohead</a>'
  + '      <br/>'
  + '      12 songs'
  + '      <br/>'
  + '    </p>'
  + '  </div>'
  + '</div>'

window.onload = () => {

  let collectionContainer = document.getElementsByClassName('album-covers')[0]

  collectionContainer.innerHTML = ''

  for (let i = 0; i < 1; i++) {
      collectionContainer.innerHTML += collectionTemplate
  }
}
