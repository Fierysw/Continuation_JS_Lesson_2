    // 1. Найти по id, используя getElementById, 
    // элемент с id равным "super_link" и вывести этот элемент в консоль.
    const printConsoleSuperLink = document.getElementById('super_link');
    console.log(printConsoleSuperLink)

    // 2. Внутри всех элементов на странице, которые имеют класс "card-link", 
    // поменяйте текст внутри элемента на "ссылка".
    const newLinkText = document.querySelectorAll('.card-link');
    newLinkText.forEach((el => el.textContent = "ссылка"))

    // 3. Найти все элементы на странице с классом "card-link", 
    // которые лежат в элементе с классом "card-body" 
    // и вывести полученную коллекцию в консоль.
    const printConsoleCollection = document.querySelectorAll('.card-body .card-link');
    console.log(printConsoleCollection);

    // 4. Найти первый попавшийся элемент на странице у которого 
    // есть атрибут data-number со значением 50 и вывести его в консоль.
    const printConsoleDataNumber = document.querySelectorAll('[data-number="50"]')[0];
    console.log(printConsoleDataNumber);

    // 5. Выведите содержимое тега title в консоль.
    const printConsoleTitle = document.querySelector('title');
    console.log(printConsoleTitle.textContent);

    // 6. Получите элемент с классом "card-title" и 
    // выведите его родительский узел в консоль.
    const printConsoleParentCardTitle = document.querySelector('.card-title');
    console.log(printConsoleParentCardTitle.parentNode);

    // 7. Создайте тег "p", запишите внутри него текст "Привет" и 
    // добавьте созданный тег в начало элемента, который имеет класс "card".
    const card = document.querySelector('.card');
    const newTegP = document.createElement('p');
    newTegP.textContent = 'Привет';
    card.before(newTegP)

    // 8. Удалите тег h6 на странице.
    const h6 = document.querySelector('h6');
    h6.remove();