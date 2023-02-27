import Block from './block';

export default function renderDOM(block: Block) {
  const root = document.querySelector('#app');

  root!.textContent = '';
  root!.appendChild(block.getContent());
}
