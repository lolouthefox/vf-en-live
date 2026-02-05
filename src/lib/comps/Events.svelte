<script lang="ts">
	import Button from './Button.svelte';

	let { events } = $props();

	function randomAngle() {
		return (Math.random() - 0.5) * 4; // Random angle between -2 and 2 degrees
	}
</script>

{#if events}
	<div class="events">
		{#each events as evt}
			<div class="event" class:completed={evt.status == 'completed'}>
				<div class="infos">
					<h2>{evt.name.text}</h2>
					<div class="sep"></div>
					<p>{evt.description.text}</p>
				</div>
				<div class="details">
					<span class="date">
						Le
						{new Date(evt.start.local).toLocaleDateString('fr-FR', {
							weekday: 'long',
							year: 'numeric',
							month: 'long',
							day: 'numeric',
							hour: '2-digit',
							minute: '2-digit'
						})}
					</span>
					{#if evt.venue?.name}
						<span class="location">{evt.venue?.name}</span>
					{/if}
					{#if evt.venue?.address}
						<span class="location">{evt.venue.address.localized_address_display}</span>
					{/if}
				</div>
				{#if evt.status == 'completed'}
					<span class="completed-tag" style="transform: rotate({randomAngle()}deg);">TERMINÉ</span>
				{:else if evt.status == 'live'}
					<a href={evt.url} target="_blank" rel="noopener">
						<Button variant style="width: 100%;">Voir l'événement</Button>
					</a>
				{/if}
			</div>
		{/each}
	</div>
{:else}
	<div class="error">
		<h2>Houston, nous avons un problème!</h2>
		<p>
			Il semble qu'il n'y ait pas de spectacles prévus pour le moment. Veuillez vérifier plus tard!
			Ou vérifiez sur notre <a href="https://www.eventbrite.fr/o/vf-en-live-115486176751"
				>page Eventbrite</a
			>.
		</p>
	</div>
{/if}

<style>
	.error {
		width: 100%;
		max-width: 120rem;
		padding: 200px 24px;

		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-align: left;
	}
	.events {
		width: 100%;
		overflow-x: auto;
		display: flex;
		gap: 24px;
	}
	.event {
		padding: 32px;
		width: 325px;
		flex-shrink: 0;

		background-color: white;
		color: black;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 24px;

		--cutout-size: 24px;

		/* Create cutouts in the corners using radial gradients */
		/* The extra pixels in the black area ensure a clean cutout without anti-aliasing issues */
		mask-image:
			radial-gradient(
				circle at 0% 0%,
				transparent var(--cutout-size),
				black calc(var(--cutout-size) + 1px)
			),
			radial-gradient(
				circle at 100% 0%,
				transparent var(--cutout-size),
				black calc(var(--cutout-size) + 1px)
			),
			radial-gradient(
				circle at 0% 100%,
				transparent var(--cutout-size),
				black calc(var(--cutout-size) + 1px)
			),
			radial-gradient(
				circle at 100% 100%,
				transparent var(--cutout-size),
				black calc(var(--cutout-size) + 1px)
			);

		mask-size: 100% 100%;
		mask-position:
			0% 0%,
			100% 0%,
			0% 100%,
			100% 100%;
		mask-repeat: no-repeat;
		mask-composite: intersect;
	}
	.event.completed {
		opacity: 0.5;
		filter: grayscale(100%);
	}
	.sep {
		width: 100%;
		border-top: dotted 2px black;
		margin: 6px 0;
	}
	.completed-tag {
		margin-top: 24px;
		padding: 12px 24px;

		border-color: var(--accent);
		color: var(--accent);
		border-width: 2px;
		border-style: solid;

		text-align: center;
		font-weight: bold;
	}
	.infos {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.details {
		display: flex;
		flex-direction: column;
		border: solid 1px black;
	}
	.details span {
		font-size: 0.9rem;
		border-bottom: solid 1px black;
		padding: 3px 6px;
	}
	.details span:last-child {
		border-bottom: none;
	}
</style>
