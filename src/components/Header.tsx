export default function Header() {
  return(
    <header>
      <nav>
        <a href="/">MediumRare - Markdown Blog Template</a>
        <ul>
          <li>Menu Item 1</li>
          <li><a href="#section-1">Menu Item 2</a></li>
          <li><a href="#">Dropdown Menu Item</a>
            <ul>
              <li><a href="#">Sublink</a></li>
              <li><a href="#">Sublink</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}
