<script>
    	import { toast } from '$lib/utils.ts';

        function showToast(message, type = 'info') {
		toast.update((toasts) => [
			...toasts,
			{
				id: Date.now(),
				message,
				type
			}
		]);
	}
</script>


<div class="h-screen flex flex-col justify-center items-center">
    <button on:click={() => showToast("Message sent", "success")} class='bg-green-800 p-2 rounded-full text-white text-2xl'>
        Success Toast</button>
    <button on:click={() => showToast("Error Toast", "error")} class='bg-red-500 p-2 rounded-full text-white text-2xl'>
        Error Toast</button>
    <button on:click={() => showToast("Info Toast", "info")} class='bg-blue-500 p-2 rounded-full text-white text-2xl'>
        Info Toast</button>
</div>