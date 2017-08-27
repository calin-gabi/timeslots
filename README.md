# Frontend Engineer Task

Create an appointment system with next capabilities: show `available`, `reserved` and `scheduled` time slots, choose a slot, schedule an appointment, update the view in realtime.

## Task description

1. `slots.json` contains entry data of `available`/`scheduled` time slots.
2. Build a calendar view (preferably week view).
3. Place time slots on a calendar view, mark available and not available time slots differently.
4. Available slots must be clickable, on click:
    1. Show form with fields: name, email, phone number.
    2. Mark slot as `reserved`, use PubSub system to emit status change event for other views.
5. Once form information submitted, the slot should be marked as `scheduled` in all views.

## Hands-on

1. Use fresh version of Angular framework. https://angular.io/guide/quickstart
2. Use PubSub server of your choice, https://www.pubnub.com/docs/angularjs-javascript/pubnub-javascript-sdk is recommended for simplicity, register to get your `publishKey` and `subscribeKey`.
3. Commit and push as often as you used to.

## Acceptance criteria

GIVEN appointment system loaded in two different browsers THEN changes happening in one browser should be reflected at another one in realtime.

## Evaluation process

1. Application usability and performance
2. Clean Code principles
3. Tests

## Optional

This test is also a continuous improvement process. Suggest how you would improve it.