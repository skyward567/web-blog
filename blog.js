// ===================================================
// blog.js — логика страницы блога
// ===================================================

document.addEventListener('DOMContentLoaded', function () {

  // ---------------------------------------------------
  // Элементы страницы
  // ---------------------------------------------------

  const btnCreatePost  = document.getElementById('btn-create-post');
  const btnShowStats   = document.getElementById('btn-show-stats');
  const formSection    = document.getElementById('create-article-section');
  const btnCancel      = document.getElementById('btn-cancel');
  const btnSave        = document.getElementById('btn-save');
  const inputTitle     = document.getElementById('post-title');
  const inputText      = document.getElementById('post-text');
  const blogGrid       = document.getElementById('blog-grid');
  const statsDialog    = document.getElementById('stats-dialog');
  const statsPostCount = document.getElementById('stats-post-count');
  const btnDialogClose = document.getElementById('btn-dialog-close');
  const btnDialogX     = document.getElementById('btn-dialog-x');
  const postTemplate   = document.getElementById('post-template');

  // ---------------------------------------------------
  // Подсчёт карточек
  // ---------------------------------------------------

  function countPosts() {
    return blogGrid.querySelectorAll('.blog-card').length;
  }

  // ---------------------------------------------------
  // Показать / скрыть форму
  // ---------------------------------------------------

  function showForm() {
    formSection.classList.add('visible');
    formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function hideForm() {
    // Убираем класс visible — форма плавно скрывается (анимация в CSS)
    formSection.classList.remove('visible');
    // Сбрасываем поля формы
    inputTitle.value = '';
    inputText.value  = '';
  }

  btnCreatePost.addEventListener('click', showForm);

  // Кнопка "Отмена" — очищает и скрывает форму
  btnCancel.addEventListener('click', hideForm);

  // ---------------------------------------------------
  // Удаление карточки статьи
  // ---------------------------------------------------

  function deleteCard(card) {
    // Добавляем класс анимации исчезновения
    card.classList.add('blog-card--removing');

    // После завершения анимации (300ms) удаляем элемент из DOM
    card.addEventListener('animationend', function () {
      card.remove();
    });
  }

  // ---------------------------------------------------
  // Создание кнопки удаления и добавление обработчика
  // Вызывается для каждой карточки — и существующих, и новых
  // ---------------------------------------------------

  function addDeleteButton(card) {
    const btn = document.createElement('button');
    btn.className = 'blog-card__delete';
    btn.title     = 'Удалить статью';
    btn.innerHTML = '✕';

    btn.addEventListener('click', function () {
      deleteCard(card);
    });

    card.appendChild(btn);
  }

  // Добавляем кнопку удаления на все существующие карточки при загрузке
  blogGrid.querySelectorAll('.blog-card').forEach(function (card) {
    addDeleteButton(card);
  });

  // ---------------------------------------------------
  // Добавление новой карточки через <template>
  // ---------------------------------------------------

  function addPost(title, text, date) {
    // Клонируем template
    const clone = postTemplate.content.cloneNode(true);

    // Заполняем данными из формы
    clone.querySelector('.post-title').textContent = title;
    clone.querySelector('.post-date').textContent  = date;
    clone.querySelector('.post-text').textContent  = text;

    // querySelector на DocumentFragment не возвращает сам корневой элемент,
    // поэтому получаем карточку после вставки в DOM
    blogGrid.insertBefore(clone, blogGrid.firstChild);

    // Теперь карточка уже в DOM — берём первый дочерний элемент сетки
    const newCard = blogGrid.firstElementChild;
    addDeleteButton(newCard);
  }

  // ---------------------------------------------------
  // Кнопка "Сохранить" — читает данные из формы и добавляет статью
  // ---------------------------------------------------

  btnSave.addEventListener('click', function () {
    const title = inputTitle.value.trim();
    const text  = inputText.value.trim();

    // Валидация: оба поля обязательны
    if (!title || !text) {
      alert('Пожалуйста, заполните все обязательные поля.');
      return;
    }

    // Формируем текущую дату в читаемом формате
    const date = new Date().toLocaleDateString('ru-RU', {
      day:   'numeric',
      month: 'long',
      year:  'numeric',
    });

    // Добавляем статью на страницу
    addPost(title, text, date);

    // Сбрасываем и скрываем форму
    hideForm();
  });

  // ---------------------------------------------------
  // Диалог статистики
  // ---------------------------------------------------

  btnShowStats.addEventListener('click', function () {
    statsPostCount.textContent = countPosts();
    statsDialog.showModal();
  });

  btnDialogX.addEventListener('click', function () {
    statsDialog.close();
  });

  btnDialogClose.addEventListener('click', function () {
    statsDialog.close();
  });

  // Закрыть при клике вне диалога (по затемнённому фону)
  statsDialog.addEventListener('click', function (event) {
    if (event.target === statsDialog) {
      statsDialog.close();
    }
  });

});
