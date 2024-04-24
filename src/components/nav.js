import { html, loop, scss } from 'cuirk'
import links from '../data/nav.js'
import { dialog } from './dialog.js'
import { icon } from './icon.js'
import { link } from './link.js'

export const nav = () => {
	const left = links.filter(({ position }) => position === 'start')
	const center = links.filter(({ position }) => position === 'center')
	const right = links.filter(({ position }) => position === 'end')
	return html`
		<nav>
			<div>
				${dialog({
					id: 'nav',
					trigger: icon({ name: 'Menu' }),
					children: html`
						<div style="display: grid; margin-bottom: 1rem;">
							${loop(links, link)}
						</div>
					`,
				})}
				${loop(left, link)}
			</div>
			<div>${loop(center, link)}</div>
			<div>${loop(right, link)}</div>
		</nav>
	`
}

nav.style = scss`
	nav {
		background: var(--nav-bg, black);
		color: var(--nav-color, white);
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(3, auto);
		padding: 0 .5rem;

		> div {
			align-items: center;
			display: flex;

			&:not(:first-child):not(:last-child) {
				justify-content: center;
			}

			&:last-child {
				justify-content: end;

				@media (max-width: 767px) {
					a:not(:last-child) {
						display: none;
					}
				}
			}

			.dialog {
				@media (min-width: 768px) {
					display: none;
				}

				> button {
					padding: 0 .5rem;
				}
			}

			a {
				color: inherit;
				padding: 1rem .5rem;
				text-decoration: none;

				&:hover {
					background: #111;
				}
			}
		}
	}
`
