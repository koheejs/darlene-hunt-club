function onImageLoad(imageUrl, successCallback) {
  const image = new Image();
  image.onload = successCallback;
  image.src = imageUrl;
}

export { onImageLoad };
