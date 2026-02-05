<script lang="ts">
	let { children, variant = false, ...props } = $props();
</script>

<button class:variant {...props}>
	<div class="content">
		{@render children()}
	</div>
	<div class="bg"></div>
</button>

<style>
	button {
		border-radius: var(--full);
		border: none;
		outline: none;

		cursor: pointer;
		box-shadow: inset 0 0 0 2px var(--text);
		background: transparent;
		color: var(--text);
		font-size: 1rem;

		height: 48px;

		padding: 0 24px;

		position: relative;
		overflow: hidden;

		transition:
			color 0.3s ease,
			box-shadow 0.3s ease;
	}
	button:hover {
		color: var(--bg);
		box-shadow: inset 0 0 0 2px var(--accent);
	}
	button.variant {
		color: var(--bg);
		box-shadow: inset 0 0 0 2px var(--accent);
	}
	button.variant:hover {
		color: white;
		box-shadow: inset 0 0 0 2px var(--accent);
	}
	.content {
		position: relative;
		display: flex;
		align-self: center;
		justify-content: center;
		z-index: 2;
	}
	.bg {
		content: '';
		position: absolute;

		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		background: var(--accent);
		border-radius: var(--full);
		transform: translateX(-100%);
		opacity: 1;

		transition:
			transform 0.3s ease,
			opacity 0.3s ease;

		z-index: 1;
	}
	button:hover .bg {
		transform: translateX(0);
		opacity: 1;
	}
</style>
