# Debugging Model
You can debug the RVC model using the RCVGUI utility under `./gui`.

> Note:
> This program requires some python dependencies; you may want to do this in a virtual environment.

## Setup
### IDEA
1. File > Project Structure > SDKs > Add new SDK <sup>(Alt+Insert)</sup> > Add Python SDK
2. Configure the SDK
3. Continue with the steps for Bash or Batch depending on your system

### Bash
```bash
chmod u+x ./gui/setup.bash
cd ./gui
./setup.bash
```
### Batch
```batch
cd .\gui
.\setup.bat
```

## Run
### IDEA
1. Choose the Debug Model run configuration
2. Run it

### Bash
```bash
cd ./gui
python3 rvcgui.py
```

### Batch
```batch
cd .\gui
python3 rvcgui.py
```