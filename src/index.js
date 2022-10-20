import './styles/index.scss';
import App from './utils/crud.js';
import Handler from './utils/handler.js';
import { setTodos, renderTodos } from './utils/update.js';

const app = new App();
const handler = new Handler(app);

const todoButton = document.querySelector('[data-clear-completed]');
const todoReset = document.querySelector('[data-refresh]');
const todoForm = document.querySelector('[data-form]');
const todoInput = document.querySelector('[data-form-input]');
todoInput.focus();

renderTodos();
handler.addEventListeners(app);

todoButton.addEventListener('click', () => {
  const todos = app.clearAllCompleted();
  setTodos(todos);
  renderTodos();
  handler.addEventListeners();
});

todoReset.addEventListener('click', (e) => {
  // this helps the refresh button to spin (1 second)
  e.target.classList.add('clicked');
  e.target.style.pointerEvents = 'none';
  setTimeout(() => {
    e.target.classList.remove('clicked');
    e.target.style.pointerEvents = 'all';
  }, 1000);

  const todos = app.refresh();
  setTodos(todos);
  renderTodos();
  handler.addEventListeners();
});

todoForm.addEventListener('submit', (e) => {
  handler.submitForm(e);
  renderTodos();
  handler.addEventListeners();
});

export default handler;
