import axios from "axios";

export const instance = axios.create({
    headers: {
        'Appkey': 'JAkSzosy4X7K2FvPBwut5GN0At8DFuIwdhfs1dvr'
    }
})

export const instanceKream = axios.create({
    headers: {
        'X-Kream-Api-Version': '20',
        'X-Kream-Client-Datetime': '20230728191518+0700',
        'X-Kream-Device-Id': 'web;73522a0f-986b-487e-bd41-cbcddf57bf4d',
        // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTA2Mjg3MjYsIm5iZiI6MTY5MDYyODcyNiwianRpIjoiZDY0YzVmMDItMzZkNS00OTJiLTgwMDctZTE0ZmFjNmRhMTM2IiwiZXhwIjoxNjkwNjM1OTI2LCJpZGVudGl0eSI6MjczNzkyLCJmcmVzaCI6dHJ1ZSwidHlwZSI6ImFjY2VzcyIsInVjIjp7InNhZmUiOnRydWV9LCJjc3JmIjoiOGMxODRhOGQtZjZkMy00ZmE1LWIzYmQtNWFkYjJmZjNjODcxIn0.3Z0l78PfaP1GZb5NYnMVGVpJT9oOzRQ-K1oBmkaWYaA'
    }
})

export const instanceKreamWithToken = axios.create({
    headers: {
        'X-Kream-Api-Version': '20',
        'X-Kream-Client-Datetime': '20230728191518+0700',
        'X-Kream-Device-Id': 'web;73522a0f-986b-487e-bd41-cbcddf57bf4d',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTEyMDE3MTQsIm5iZiI6MTY5MTIwMTcxNCwianRpIjoiNTUwOGUxNzQtY2QwYS00Mzc1LTk5YmItYTI4Njc0OTI4OTFhIiwiZXhwIjoxNjkxMjA4OTE0LCJpZGVudGl0eSI6MjQ2MTQ4NywiZnJlc2giOnRydWUsInR5cGUiOiJhY2Nlc3MiLCJ1YyI6eyJzYWZlIjp0cnVlfSwiY3NyZiI6IjI3NjM2ODFmLTcxOWQtNDU4ZS05MjVhLWUwMjY1NWM1OTAwMiJ9.wkD3y8Y5bzCSlMHaNHdLqbXGGbDpLIpCcpV8fEq0Mts'
    }
})



