function test () {
console.log('Initialization complete', Temporal.now.instant());
const instant = Temporal.Instant.from('1969-07-20T20:17Z');
console.log(instant.toString()); // => '1969-07-20T20:17:00Z'
console.log(instant.epochMilliseconds); //
console.log(Temporal.ZonedDateTime.from({
  timeZone: 'America/Los_Angeles',
  year: 1995,
  month: 12,
  day: 7,
  hour: 3,
  minute: 24,
  second: 30,
  millisecond: 0,
  microsecond: 3,
  nanosecond: 500
}).toString())
}