# Poetry

Install project dependencies:

in this `/app` directory, follow these steps:

- (Optional) create a virtual environment `python3 -m venv .venv && source .venv/bin/activate`
- `poetry shell`
- `poetry install`

maybe you just want to start the fastapi dev server:
`fastapi dev app/main.py`

maybe you need to change python version:

- I recommend pyenv to manage python versions and you can then use that virtual env with poetry

As of writing this, this is my `poetry env info`:

```
~/d/s/sst-fastapi/app main +1 !1 ❯ poetry env info

Virtualenv
Python:         3.12.3
Implementation: CPython
Path:           /Users/user/Library/Caches/pypoetry/virtualenvs/app-rVMkBxn9-py3.12
Executable:     /Users/user/Library/Caches/pypoetry/virtualenvs/app-rVMkBxn9-py3.12/bin/python
Valid:          True

Base
Platform:   darwin
OS:         posix
Python:     3.12.3
Path:       /opt/homebrew/opt/python@3.12/Frameworks/Python.framework/Versions/3.12
Executable: /opt/homebrew/opt/python@3.12/Frameworks/Python.framework/Versions/3.12/bin/python3.12
```
