<script lang="ts">
	import Button from '$lib/comps/Button.svelte';
	import Events from '$lib/comps/Events.svelte';

	let { data } = $props();

	let banner =
		'https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
</script>

<main>
	<img src={banner} class="background" alt="" draggable="false" />
	<div class="content">
		<div class="banner" style="background-image: url({banner});">
			<div class="hero-title">
				<h1>VF en Live</h1>
				<p>Nos d'impro'doubleurs coupent le son et réinventent les dialogues des films.</p>
			</div>
			<div class="buttons">
				<Button>Prochains spectacles</Button>
				<Button>Réseaux sociaux</Button>
			</div>
			<div class="gradient-btm"></div>
		</div>
	</div>
	<Events events={data.events} />
</main>

<style>
	main {
		margin: var(--margin);

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.background {
		position: fixed;
		inset: 0;
		object-fit: cover;
		object-position: center;
		width: 100%;
		height: 120vh;
		mask-image: linear-gradient(180deg, #fff 78.62%, rgba(115, 115, 115, 0) 100%);

		filter: blur(32px);
		transition: background-image 0.2s ease-in-out;

		opacity: 15%;
		z-index: -1;
	}

	.content {
		width: 100%;
		max-width: 120rem;
	}

	.banner {
		aspect-ratio: 2.12;
		width: 100%;

		background-size: cover;
		background-position: center;

		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-start;
		gap: 12px;

		padding: 24px;
		padding-bottom: 48px;

		filter: drop-shadow(24px 32px 24px rgba(0, 0, 0, 0.6));
		mask-image: radial-gradient(103% 11% at 50% 102%, transparent 50%, white 51%);

		border-radius: 48px 48px 24px 24px;
	}

	.banner > * {
		z-index: 2;
	}

	.gradient-btm {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.8) 100%);
		z-index: 1;
	}

	.banner h1 {
		font-size: 8rem;
		color: white;
		margin: 0;
	}

	.banner p {
		font-size: 1.5rem;
		color: white;
		margin: 0;
	}
	.buttons {
		display: flex;
		gap: calc(var(--margin) / 4);
	}

	@media (max-width: 800px) {
		main {
			--margin: 0;
		}
		.banner h1 {
			font-size: 2.75rem;
		}
		.banner p {
			font-size: 1.2rem;
		}
		.banner {
			height: 75svh;
			border-radius: 0;
		}
		.background {
			display: none;
		}
		.buttons {
			flex-direction: column;
			gap: 12px;
			width: 100%;
			padding: 24px 0;
		}
	}
</style>
