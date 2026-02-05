<script lang="ts">
	import '../global.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link
		href="https://api.fontshare.com/v2/css?f[]=stardom@400&f[]=satoshi@1,2&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{@render children()}
