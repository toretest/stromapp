import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Strømmåling App</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Strømforbruk</Link>
          </li>
          <li>
            <Link href='/new-measurment'>Alle</Link>
          </li>
          <li>
            <Link href='/measurments'>Strøm</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
