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
  const formEl         = document.querySelector('.create-article-form');
  const btnCancel      = document.getElementById('btn-cancel');
  const btnSave        = document.getElementById('btn-save');
  const inputTitle     = document.getElementById('post-title');
  const inputText      = document.getElementById('post-text');
  const blogGridWrapper = document.getElementById('blog-grid-wrapper');
  const blogGrid       = document.getElementById('blog-grid');
  const blogLoader     = document.getElementById('blog-loader');
  const emptyState     = document.getElementById('blog-empty');
  const statsDialog    = document.getElementById('stats-dialog');
  const statsPostCount = document.getElementById('stats-post-count');
  const btnDialogClose = document.getElementById('btn-dialog-close');
  const btnDialogX     = document.getElementById('btn-dialog-x');
  const postTemplate   = document.getElementById('post-template');
  const btnEmptyCreate = document.getElementById('btn-empty-create');

  const STORAGE_KEY = 'blog_posts';

  // ---------------------------------------------------
  // localStorage
  // ---------------------------------------------------

  function loadPostsFromStorage() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    try { return JSON.parse(raw); } catch (e) { return []; }
  }

  function savePostsToStorage(posts) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }

  function appendPostToStorage(post) {
    const posts = loadPostsFromStorage();
    posts.push(post);
    savePostsToStorage(posts);
  }

  function removePostFromStorage(id) {
    const posts = loadPostsFromStorage();
    savePostsToStorage(posts.filter(function (p) { return p.id !== id; }));
  }

  // ---------------------------------------------------
  // Лоадер
  // showLoader()  — показывает лоадер над сеткой
  // hideLoader()  — скрывает лоадер
  // ---------------------------------------------------

  function showLoader() {
    blogLoader.classList.add('blog-loader--active');
  }

  function hideLoader() {
    blogLoader.classList.remove('blog-loader--active');
  }

  // ---------------------------------------------------
  // Disable / Enable кнопок и формы
  // Блокируем всё чтобы нельзя было кликать в процессе загрузки
  // ---------------------------------------------------

  function setUIDisabled(disabled) {
    // Кнопки сайдбара
    btnCreatePost.disabled = disabled;
    btnShowStats.disabled  = disabled;

    // Кнопки формы
    btnSave.disabled   = disabled;
    btnCancel.disabled = disabled;

    // Поля формы — через класс на форме (стили в CSS)
    if (disabled) {
      formEl.classList.add('create-article-form--disabled');
    } else {
      formEl.classList.remove('create-article-form--disabled');
    }
  }

  // ---------------------------------------------------
  // Пустое состояние
  // ---------------------------------------------------

  function updateEmptyState() {
    const hasPosts = blogGrid.querySelectorAll('.blog-card').length > 0;
    emptyState.classList.toggle('blog-empty--hidden', hasPosts);
  }

  // ---------------------------------------------------
  // Подсчёт карточек
  // ---------------------------------------------------

  function countPosts() {
    return blogGrid.querySelectorAll('.blog-card').length;
  }

  // ---------------------------------------------------
  // Форма: показать / скрыть
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
  if (btnEmptyCreate) {
    btnEmptyCreate.addEventListener('click', showForm);
  }

  // ---------------------------------------------------
  // Удаление карточки
  // ---------------------------------------------------

  function deleteCard(card) {
    const postId = card.dataset.id;
    card.classList.add('blog-card--removing');
    card.addEventListener('animationend', function () {
      card.remove();
      removePostFromStorage(postId);
      updateEmptyState();
    });
  }

  function addDeleteButton(card) {
    const btn = document.createElement('button');
    btn.className = 'blog-card__delete';
    btn.title     = 'Удалить статью';
    btn.innerHTML = '✕';
    btn.addEventListener('click', function () { deleteCard(card); });
    card.appendChild(btn);
  }

  // ---------------------------------------------------
  // Отрисовка одной карточки в DOM
  // ---------------------------------------------------

  function renderCard(post) {
    const clone = postTemplate.content.cloneNode(true);
    clone.querySelector('.post-title').textContent = post.title;
    clone.querySelector('.post-date').textContent  = post.date;
    clone.querySelector('.post-text').textContent  = post.text;

    // Вставляем перед блоком "нет статей" (emptyState),
    // чтобы карточки всегда были выше заглушки внутри grid
    blogGrid.insertBefore(clone, emptyState);

    const newCard = emptyState.previousElementSibling;
    newCard.dataset.id = post.id;
    addDeleteButton(newCard);
  }

  // ---------------------------------------------------
  // Кнопка "Сохранить"
  // Читает данные из формы, сохраняет в localStorage,
  // показывает лоадер с имитацией задержки
  // ---------------------------------------------------

  btnSave.addEventListener('click', function () {
    const title = inputTitle.value.trim();
    const text  = inputText.value.trim();

    if (!title || !text) {
      alert('Пожалуйста, заполните все обязательные поля.');
      return;
    }

    const date = new Date().toLocaleDateString('ru-RU', {
      day: 'numeric', month: 'long', year: 'numeric',
    });

    const post = {
      id:    Date.now().toString(),
      title: title,
      text:  text,
      date:  date,
    };

    // Блокируем UI и показываем лоадер
    setUIDisabled(true);
    showLoader();

    // Имитируем задержку сохранения (800мс)
    setTimeout(function () {
      appendPostToStorage(post);
      renderCard(post);
      updateEmptyState();

      // Снимаем лоадер и разблокируем UI
      hideLoader();
      setUIDisabled(false);
      hideForm();
    }, 800);
  });

  // ---------------------------------------------------
  // Загрузка статей из localStorage при открытии страницы
  // Запускается с задержкой для имитации загрузки
  // ---------------------------------------------------

  function loadPostsOnInit() {
    // Блокируем UI и показываем лоадер
    setUIDisabled(true);
    showLoader();

    // Имитируем задержку первоначальной загрузки (1200мс)
    setTimeout(function () {
      const posts = loadPostsFromStorage();

      // slice().reverse() — чтобы новые статьи были сверху
      // (renderCard вставляет в начало, без reverse порядок перевернётся)
      posts.slice().reverse().forEach(function (post) {
        renderCard(post);
      });

      updateEmptyState();

      // Скрываем лоадер и разблокируем UI
      hideLoader();
      setUIDisabled(false);
    }, 1200);
  }

  loadPostsOnInit();

  // ---------------------------------------------------
  // Диалог статистики
  // ---------------------------------------------------

  btnShowStats.addEventListener('click', function () {
    statsPostCount.textContent = countPosts();
    statsDialog.showModal();
  });

  btnDialogX.addEventListener('click', function () { statsDialog.close(); });
  btnDialogClose.addEventListener('click', function () { statsDialog.close(); });

  statsDialog.addEventListener('click', function (event) {
    if (event.target === statsDialog) statsDialog.close();
  });

});
