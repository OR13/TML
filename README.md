# Toy ML with Keras, Tensorflow and Node 

health care is a team effort. shared in a weds and stafentel with four carabllerenger cents, by tige is relicerany you wota ee3erscente. ehrodit hource heact as net enecring neskints a sestend faruice on their sction, himpoy your apps
 
## Text Generation

```
npm run ramble -- ./training_data/dataset.txt 
```

## Deep Dream

```
npm run dream -- ./training_data/dataset.jpg ./results_data/dream
```

## Training from Gmails...

First apply a label to all the emails, then download all the emails with that label.

- https://takeout.google.com/settings/takeout

Next, use the convert tool, to make them plaintext. This tools sucks, i'm sure someone could improve this...

```
npm run convert-mbox -- --src ./raw_data/email_export.mbox --dst ./training_data/email_export.txt
```

## Install

```
conda create --name tml_env
source activate tml_env
pip install git+git://github.com/fchollet/keras.git
pip install tensorflow
pip install tensorflow-gpu
npm install
```

## References which I didn't use...

- https://github.com/cazala/synaptic
- https://github.com/karpathy/recurrentjs
- https://github.com/scienceai/neocortex