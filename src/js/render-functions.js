export default function createGallery(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
   <li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
  </a>
  <div class="stats">
  <p>Likes<br/>${likes}</p>
  <p>Views<br/>${views}</p>
  <p>Commens<br/>${comments}</p>
  <p>Downloads<br/>${downloads}</p>
</div>
</li>
  `
    )
    .join('');
}
