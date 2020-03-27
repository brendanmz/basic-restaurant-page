const aboutContent = () => {
    const title = document.createElement('h2');
    title.innerHTML = 'About';
    
    const subtitle = document.createElement('h4');
    subtitle.innerHTML = 'Location'
    const address = document.createElement('p');
    address.innerHTML = '985 Los Angeles Drive, Vancouver, Canada'
    const phone = document.createElement('p');
    phone.innerHTML = '+1 (745) 836-1435'
    
    
    
    const section = document.createElement('section');
    const contentDiv = document.querySelector('div#content');
    const article = document.createElement('article');
    article.id = 'about';
    contentDiv.append(article);

    article.append(title, section)
    section.append(subtitle, address, phone);
}

export { aboutContent };