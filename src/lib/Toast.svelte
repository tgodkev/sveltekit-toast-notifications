<script>
	import { removeToast } from '$lib/utils.ts';

	export let t;
	setTimeout(() => {
		removeToast(t.id);
	}, 4000); // 5 seconds

	console.log(t);
</script>

<div class="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full flex justify-center">
	{#if t.type === 'error'}
		<button
			type="button"
			class="bg-red-500 text-white p-4 rounded-lg shadow-md whitespace-normal leading-relaxed w-full md:max-w-md mx-auto"
			on:click={() => removeToast(t.id)}
		>
			<span>{@html t.message}</span>
		</button>
	{/if}

	{#if t.type === 'success'}
		<button
			type="button"
			class="bg-green-500 text-white p-4 rounded-lg shadow-md whitespace-normal leading-relaxed w-full md:max-w-md mx-auto"
			on:click={() => removeToast(t.id)}
		>
			<span>{@html t.message}</span>
		</button>
	{/if}

	{#if t.type === 'info'}
		<button
			type="button"
			class="bg-blue-500 text-white p-4 rounded-lg shadow-md whitespace-normal leading-relaxed w-full md:max-w-md mx-auto"
			on:click={() => removeToast(t.id)}
		>
			<span>{@html t.message}</span>
		</button>
	{/if}
</div>
