const headerContent = () => {
    const headerImage = document.createElement('img');
    headerImage.src = "../images/header-image.jpg";

    const pageTitle = document.createElement('h1');
    pageTitle.innerHTML = "Ron's Ramen";

    const header = document.createElement('header');

    const contentDiv = document.querySelector('div#content');
    contentDiv.append(header);
    header.append(headerImage, pageTitle);
}

export { headerContent };