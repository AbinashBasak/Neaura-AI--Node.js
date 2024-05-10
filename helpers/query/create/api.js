const { default: axios } = require('axios');

// const URL = 'http://localhost:1234/v1/chat/completions';
// const api_key = 'lm-studio';
// const model = 'lmstudio-community/Meta-Llama-3-8B-Instruct-GGUF';
const URL = 'https://api.openai.com/v1/chat/completions';
const api_key = 'sk-proj-NV9Vp6PSZxEwyh0OHCHYT3BlbkFJw653fvI14YVZk5Z5oJdt';
const model = 'gpt-3.5-turbo';

const callApi = async (input_text) => {
	const payload = {
		model,
		temperature: 0.7,
		messages: [{ role: 'assistant', content: input_text }],
	};

	try {
		const res = await axios.post(URL, payload, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${api_key}`,
			},
		});

		// console.log(res.data['choices'][0]['message']['content']);

		return { data: res.data['choices'][0]['message']['content'] };
	} catch (error) {
		// console.log(error.message, error.status);
		return {
			error: true,
			errorMessage: error?.status === 429 ? 'Limit Exceeded' : 'Error',
		};
	}
};

module.exports = callApi;
