<script lang="ts">
	import CodeMirror from 'svelte-codemirror-editor';
	import { saveTrigger } from '$lib/helper';
	import { supabase } from '$lib/supaBase';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let store: string;
	onMount(async () => {
		saveTrigger.set(false);
		let slug = $page.params.slug;
		let { data, error } = await supabase.from('urls').select('text').eq('url', slug);
		store = data![0].text;
	});
</script>

<main>
	<div>
		<CodeMirror value={store} readonly={true} />
	</div>
</main>
