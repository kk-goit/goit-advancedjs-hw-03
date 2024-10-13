
function createGallery(photos) { 
  const galHtml = document.createElement('ul');
  for (const imgData of photos) { 
    const li = document.createElement('li');
    li.classList.add("gallery-item");
  
    const img = document.createElement('img');
    img.classList.add("gallery-image");
    img.setAttribute('src', imgData.webformatURL);
    img.setAttribute('alt', imgData.tags);
  
    const a = document.createElement('a');
    a.classList.add('gallery-link')
    a.setAttribute('href', imgData.largeImageURL);
    a.append(img);

    li.append(a);

    const desc = document.createElement('div');
    desc.classList.add("gallery-descr");

    const likes = document.createElement('div');
    likes.innerHTML = `<span>Likes</span>${imgData.likes}`;
    desc.append(likes);
    const views = document.createElement('div');
    views.innerHTML = `<span>Views</span>${imgData.views}`;
    desc.append(views);
    const comms = document.createElement('div');
    comms.innerHTML = `<span>Comments</span>${imgData.comments}`;
    desc.append(comms);
    const dwnlds = document.createElement('div');
    dwnlds.innerHTML = `<span>Downloads</span>${imgData.downloads}`;
    desc.append(dwnlds);

    li.append(desc);

    galHtml.append(li);
  }
  return galHtml.innerHTML;
}

export { createGallery }

