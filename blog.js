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
  const emptyState     = document.getElementById('blog-empty');
  const statsDialog    = document.getElementById('stats-dialog');
  const statsPostCount = document.getElementById('stats-post-count');
  const btnDialogClose = document.getElementById('btn-dialog-close');
  const btnDialogX     = document.getElementById('btn-dialog-x');
  const postTemplate   = document.getElementById('post-template');

  // Ключ для хранения статей в localStorage
  const STORAGE_KEY = 'blog_posts';

  // ---------------------------------------------------
  // localStorage: чтение и запись
  // ---------------------------------------------------

  // Читаем массив статей из localStorage.
  // Если ничего нет — возвращаем пустой массив.
  function loadPostsFromStorage() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    try {
      return JSON.parse(raw);  // строку превращаем обратно в массив объектов
    } catch (e) {
      return [];
    }
  }

  // Сохраняем массив статей в localStorage.
  // JSON.stringify превращает массив объектов в строку — localStorage умеет
  // хранить только строки.
  function savePostsToStorage(posts) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }

  // Добавляем одну новую статью в конец массива и сохраняем.
  function appendPostToStorage(post) {
    const posts = loadPostsFromStorage();
    posts.push(post);
    savePostsToStorage(posts);
  }

  // Удаляем статью по её уникальному id.
  function removePostFromStorage(id) {
    const posts = loadPostsFromStorage();
    const updated = posts.filter(function (p) { return p.id !== id; });
    savePostsToStorage(updated);
  }

  // ---------------------------------------------------
  // Состояние "нет статей"
  // Показываем/скрываем блок-заглушку в зависимости
  // от количества карточек в сетке
  // ---------------------------------------------------

  function updateEmptyState() {
    const hasPosts = blogGrid.querySelectorAll('.blog-card').length > 0;
    if (hasPosts) {
      emptyState.classList.add('blog-empty--hidden');
    } else {
      emptyState.classList.remove('blog-empty--hidden');
    }
  }

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
    formSection.classList.remove('visible');
    inputTitle.value = '';
    inputText.value  = '';
  }

  btnCreatePost.addEventListener('click', showForm);
  btnCancel.addEventListener('click', hideForm);

  // Кнопка "Создать статью" в блоке пустого состояния тоже открывает форму
  const btnEmptyCreate = document.getElementById('btn-empty-create');
  if (btnEmptyCreate) {
    btnEmptyCreate.addEventListener('click', showForm);
  }

  // ---------------------------------------------------
  // Удаление карточки
  // ---------------------------------------------------

  function deleteCard(card) {
    const postId = card.dataset.id;  // берём id из data-атрибута карточки

    card.classList.add('blog-card--removing');

    card.addEventListener('animationend', function () {
      card.remove();
      removePostFromStorage(postId);  // удаляем из localStorage
      updateEmptyState();             // обновляем состояние пустой страницы
    });
  }

  // ---------------------------------------------------
  // Кнопка удаления на карточке
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

  // ---------------------------------------------------
  // Отрисовка карточки в DOM
  // Используется и при добавлении новой, и при загрузке из localStorage
  // ---------------------------------------------------

  function renderCard(post) {
    const clone = postTemplate.content.cloneNode(true);

    clone.querySelector('.post-title').textContent = post.title;
    clone.querySelector('.post-date').textContent  = post.date;
    clone.querySelector('.post-text').textContent  = post.text;

    // Вставляем в начало сетки
    blogGrid.insertBefore(clone, blogGrid.firstChild);

    // Получаем только что вставленную карточку
    const newCard = blogGrid.firstElementChild;

    // Сохраняем id статьи в data-атрибуте карточки,
    // чтобы потом знать какую запись удалять из localStorage
    newCard.dataset.id = post.id;

    addDeleteButton(newCard);
  }

  // ---------------------------------------------------
  // Кнопка "Сохранить"
  // ---------------------------------------------------

  btnSave.addEventListener('click', function () {
    const title = inputTitle.value.trim();
    const text  = inputText.value.trim();

    if (!title || !text) {
      alert('Пожалуйста, заполните все обязательные поля.');
      return;
    }

    const date = new Date().toLocaleDateString('ru-RU', {
      day:   'numeric',
      month: 'long',
      year:  'numeric',
    });

    // Создаём объект статьи с уникальным id на основе текущего времени
    const post = {
      id:    Date.now().toString(),
      title: title,
      text:  text,
      date:  date,
    };

    // Сохраняем в localStorage
    appendPostToStorage(post);

    // Отрисовываем карточку на странице
    renderCard(post);

    // Обновляем состояние пустой страницы
    updateEmptyState();

    // Скрываем форму
    hideForm();
  });

  // ---------------------------------------------------
  // Загрузка статей из localStorage при открытии страницы
  // ---------------------------------------------------

  function loadPostsOnInit() {
    const posts = loadPostsFromStorage();

    // Отрисовываем каждую сохранённую статью.
    // Разворачиваем массив чтобы новые статьи оказались сверху
    // (renderCard вставляет в начало, поэтому без reverse порядок перевернётся)
    posts.slice().reverse().forEach(function (post) {
      renderCard(post);
    });

    // После отрисовки обновляем состояние пустой страницы
    updateEmptyState();
  }

  // Запускаем загрузку при старте
  loadPostsOnInit();

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

  statsDialog.addEventListener('click', function (event) {
    if (event.target === statsDialog) {
      statsDialog.close();
    }
  });

});
