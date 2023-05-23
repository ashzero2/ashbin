import { writable } from 'svelte/store';

export const text = writable('');

export const RandomString = () => {
	let result = '';
	const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
	for (let i = 0; i < 4; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};
