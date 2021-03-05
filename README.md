# Welcome to YogaBot!

As developers and other screen-based humans, we tend to forget that our bodies aren't made to sit in a chair and look at a screen for 8-14 hours a day. We built a slack bot at arus.io to remind us to take 5 mins a few times a day and stretch it out!!

![Screen Shot 2021-03-05 at 11 45 25 AM](https://user-images.githubusercontent.com/444888/110162716-5511aa00-7dac-11eb-86ff-80674bf412a6.png)


## Grab the repo
```
git clone ...
cd into the repo
```
## Install the deps
```
npm i
```
## Add your slack webook
```
await Axios.post(`SLACK-WEBHOOK-URL`,);
```
## Choose your cron
(how often you want it to run)

```
functions:
  processYoga:
    handler: src/handlers/processYoga.handler
    events:
      - schedule: rate(1 hour)
```

## Deploy to AWS lambda
```
sls deploy  -v
```
can run local for debugging if needed
```
sls invoke -f processYoga -l
```

## Get bendy'!

.....and there ya go!!
Hopefully this tool is useful for you to remember to stretch it out! :heart:

## Maybe's in the future

 - spin up a Rest API with different yoga moves, and pull random ones daily
 - add [slack blocks support](https://api.slack.com/block-kit) that supports linking to media content
 - add [slack blocks support](https://api.slack.com/block-kit) for [Spotify API](https://developer.spotify.com/documentation/web-api/) zen-like music tracks
