<script lang="ts">
	let { events } = $props();
</script>

{#if events}
	<div class="events"></div>
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
</style>
