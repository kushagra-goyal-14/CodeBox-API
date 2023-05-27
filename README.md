# CodeBox

> API is still under early stages of development, so feel free to contribute in the project.

### Introducing the new CodeBox API

An API which executes codes

### Hosted here - "https://code-box.onrender.com/api/v1/"

## Info

This version is not scaled, you can access the scaled version here - "https://github.com/kushagra-goyal-14/CodeBox"

### Execute Code and fetch output

#### `POST` /

This endpoint allows you to execute your script and fetch output results.

### Inputs required for API call -

| Parameter | Description                                                                                                                   |
| --------- | ----------------------------------------------------------------------------------------------------------------------------- |
| "src"     | Should contain the script that needs to be executed                                                                           |
| "stdin"   | In case the script requires any kind of input for execution, leave empty if no input required                                 |
| "lang"    | Language that the script is written in for example: java, cpp, etc. (Check language as a payload down below in next question) |

### What are the languages that are supported for execution?

All the Languages are listed below .
| Languages | Language as a payload |
|-----------|-----------------------|
| C++ | cpp |
| Java | java |
| Python | python3 |
| C | c |
| GoLang | go |
| JS | javascript |

### On Postman : `(recommended)`

Sending a json post request to `https://code-box.onrender.com/api/v1/submit`

### It is a c++ script to print Hello World.

```json
{
  "src": "\n\n#include<bits/stdc++.h>\n\nusing namespace std ;\n\nint main()\n{  cout << \"Hello World \"<< endl ;}",
  "stdin": "48\n95",
  "lang": "cpp"
}
```

The output is a JSON object comprising only one parameter that is the output.

```json
{
  "message": "Successfully ran it",
  "data": {
    "output": "Hello World\n",
    "error": ""
  },
  "err": {},
  "success": true
}
```

<br>
<br>
