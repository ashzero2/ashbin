<script lang="ts">
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css';
	import '../app.postcss';

	import { AppBar, AppShell, Toast, toastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	import FloppyDisk from 'phosphor-svelte/lib/FloppyDisk';
	import PlusCircle from 'phosphor-svelte/lib/PlusCircle';
	import { RandomString, text } from '$lib/helper';
	import { saveTrigger } from '$lib/helper';
	import { supabase } from '$lib/supaBase';
	import { goto } from '$app/navigation';

	async function save() {
		let key = RandomString();
		navigator.clipboard.writeText('https://bin.ashzero.dev/' + key);

		const t: ToastSettings = {
			message: 'URL copied to clipboard'
		};
		toastStore.trigger(t);

		const { data, error } = await supabase.from('urls').insert([{ url: key, text: $text }]);
		goto('/' + key);
	}

	function handleSave() {
		if ($saveTrigger) save();
	}
</script>

<Toast />
<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">ASHBIN</svelte:fragment>
			<svelte:fragment slot="trail">
				<div class="flex gap-3">
					<button class="btn-sm variant-filled-primary" on:click={handleSave}>
						<FloppyDisk size={20} />
					</button>
					<a href="/" class="btn-sm variant-filled-primary" on:click={() => saveTrigger.set(true)}>
						<PlusCircle size={20} />
					</a>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
