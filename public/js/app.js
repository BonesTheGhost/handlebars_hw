console.log("[app.js]:: connected and working!");

const burgerTemplate = (burgerName, id, is_favorite) => {
    const burgerContainer = $('<div>').attr({
        class: 'content-burger__list',
        id: id,

    });

    const img = $('<img>').attr({
        src: '../../images/burgerImage.jpg',
        alt: 'A picture of a burger'
    });

    const name = $('<p>');

    const button = $('<button>').attr({
        'data-id': id,
        class: 'btn btn-btn-default favorites',
        'data-state': is_favorite
    });

    name.html(burgerName);
    button.html('add to favorite');

    //This is the way we add the burgers, in order the image the p-tag, and the button.
    burgerContainer.append(img, name, button);

    return burgerContainer;

};

const displayNewBurger = (burger) => {
    console.log(burger);
    const name = burger.burger_name;
    const id = burger.id;
    const is_favorite = burger.is_favorite;

    const newBurger = burgerTemplate(name, id, is_favorite);

    $('.content-burger').prepend(newBurger);

};

const addBurgerFail = (response) => {
    console.log(response);
    alert("Burger Failed")
};


$('button[type="submit"]').on('click', function (event) {
    event.preventDefault();

    const burgerName = $('input[name="burger_name"]').val();

    $.ajax({
        url: '/add',
        method: 'POST',
        data: {
            burger_name: burgerName
        }
       })
       .then(displayNewBurger)
        .catch(
            addBurgerFail);
});