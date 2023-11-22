<script >
import { toast } from '$lib/utils.ts';
import Toast from '$lib/Toast.svelte';
import '../app.css';



	
</script>

{#if $toast}
	{#each $toast as t (t.id)}
		<Toast {t} />
	{/each}
{/if}


	<main class="flex justify-center items-center">
					<slot />
	</main>
