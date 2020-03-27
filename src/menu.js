const menuContent = () => {
    const menuItem = (dishName, dishDescription, dishPrice, parentEl) => {
        let name = document.createElement('h4');
        name.innerHTML = dishName;

        let description = document.createElement('p');
        description.innerHTML = dishDescription;

        let price = document.createElement('p');
        price.innerHTML = dishPrice;

        let section = document.createElement('section');
        parentEl.append(section);
        section.append(name, description, price);
    }

    const title = document.createElement('h2');
    title.innerHTML = 'Menu';
    const contentDiv = document.querySelector('div#content');
    const article = document.createElement('article');
    article.id = 'menu';
    contentDiv.append(article);
    article.append(title);

    const tonkatsuDesc = 'pork broth: pork chashu, kikurage, green onion, seasoned egg*, nori dried seaweed, red hot chili oil and spicy bean sprouts » served with thick noodles';
    const chickenDesc = 'chicken broth: chicken chashu, spinach, green onion and fried onion » served with thin noodles';
    const veggieDesc = 'vegetable broth: mushroom, baby leaf, spinach, asparagus, broccoli, cauliflower, cabbage and black pepper » served with thin noodles'


    menuItem('Tonkatsu Ramen', tonkatsuDesc, '$10', article)
    menuItem('Chicken Ramen', chickenDesc, '$9', article)
    menuItem('Veggie Ramen', veggieDesc, '$7.50', article)
}

export { menuContent }