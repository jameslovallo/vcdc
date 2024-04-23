import { css, html, when } from 'cuirk'

export const card = ({ image, title, description, href }) => {
	const tag = href ? 'a' : 'div'
	return html`
		<${tag} class="card" ${href ? `href="${href}"` : ''}>
			${when(image, html`<img src="${image}" />`)}
			${when(title, html`<h3>${title}</h3>`)}
			${when(description, html`<p>${description}</p>`)}
		</${tag}>
	`
}

card.style = css`
	.card {
		--card-padding: 0.75rem;
		background: var(--card-bg, black);
		border: var(--card-border, 1px solid rgba(155, 155, 155, 0.2));
		border-radius: var(--card-br, 0.25rem);
		color: var(--card-color, white);
		display: grid;
		grid-template-rows: auto 1fr;
		padding-bottom: var(--card-padding);
		text-decoration: none;

		> *:not(img) {
			margin: var(--card-padding) var(--card-padding) 0;
		}
	}
`
