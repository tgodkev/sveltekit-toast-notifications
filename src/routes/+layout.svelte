<script lang="ts">

	// import { toast } from '$lib/toast.ts';
	// import Toast from '$lib/Toast.svelte';


	
</script>

<!-- {#if $toast}
	{#each $toast as t (t.id)}
		<Toast {t} />
	{/each}
{/if} -->

<div class="flex flex-col min-h-screen">

	<main class="transition-outer md:max-w-screen-2xl max-w-sm mx-auto">
				<div class="flex-grow">
					<slot />
                </div>
	</main>

</div>