const testimonialsContent = () => {
    const testimonial = (desc, parentEl) => {
        let el = document.createElement('p');
        el.innerHTML = desc;
        const section = document.createElement('section');
        parentEl.append(section);
        section.append(el);
    }

    const testimonial1 = '"This is the best ramen I\'ve ever had"<br>-BungoMan';
    const testimonial2 = '"It\'s like heaven for your taste buds"<br>-ZingoZonger';

    const title = document.createElement('h2');
    title.innerHTML = 'Testimonials'
    const section = document.createElement('section');
    const contentDiv = document.querySelector('div#content');
    const article = document.createElement('article');
    article.id = 'testimonials'
    contentDiv.append(article);
    article.append(title)
    testimonial(testimonial1, article);
    testimonial(testimonial2, article);
}

export { testimonialsContent }