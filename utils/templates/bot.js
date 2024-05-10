const getTemplate = (training_string) => `
import os
import requests
import openai
openai.api_key = "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"
URL = "https://api.openai.com/v1/chat/completions"


def gen_dataquality_only_Rules(column_name):
    input_text = "${training_string}" + "And this is the column name " + column_name + "response format should be in json."
    
    payload = {
        "model": "gpt-3.5-turbo",
        "temperature": 0.0,
        "messages": [
            {"role": "assistant", "content": input_text}
        ]
    }
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {openai.api_key}"
    }
    response = requests.post(URL, headers=headers, json=payload)
    response = response.json()
    return response['choices'][0]['message']['content']


def gen_dataquality(column_name):
    input_text = "${training_string}"+"And this is the column name " + \
        column_name + "response format should be in json."

    payload = {
        "model": "gpt-3.5-turbo",
        "temperature": 0.0,
        "messages": [
            {"role": "assistant", "content": input_text}
        ]
    }
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {openai.api_key}"
    }
    response = requests.post(URL, headers=headers, json=payload)
    response = response.json()
    return response['choices'][0]['message']['content']


def gen_dataquality_SQL(column_name):
    input_text = "${training_string}"+"And this is the column name " + \
        column_name + "response format should be in json."
    
    payload = {
        "model": "gpt-3.5-turbo",
        "temperature": 0.0,
        "messages": [
            {"role": "assistant", "content": input_text}
        ]
    }
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {openai.api_key}"
    }
    response = requests.post(URL, headers=headers, json=payload)
    response = response.json()
    return response['choices'][0]['message']['content']

`;

const getBotTemplate = (trainingString) => ({
	template: getTemplate(trainingString),
	genDataQualityOnlyRules: `${trainingString} And this is the column name {{column_name}}. response format should be in json.`,
	genDataQuality: `${trainingString} And this is the column name {{column_name}}. response format should be in json.`,
	genDataQualitySQL: `${trainingString} And this is the column name {{column_name}}. response format should be in json.`,
});

module.exports = getBotTemplate;
