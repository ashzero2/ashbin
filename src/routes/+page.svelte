<script lang="ts">
	import CodeMirror from 'svelte-codemirror-editor';
	import { text } from '$lib/helper';

	let value: string;
	$: text.set(value);
</script>

<main>
	<CodeMirror bind:value placeholder="Enter text here" />
</main>
