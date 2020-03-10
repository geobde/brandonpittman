'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 2,
  margin: 2,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('              Brandon Pittman'),
  handle: chalk`{white brandonpittman}`,
  work: chalk`{white Web Director @ Aquaring Global Strategy}`,
  //work: chalk.white('Frontend Wizard @ Quartet Communications'),
  opensource: chalk`{white.bold Vue | Gridsome | Node.js | Tailwind} {green.bold ⬢}`,
  twitter: chalk`{gray https://twitter.com/}{cyan brandonpittman}`,
  npm: chalk`{gray https://npmjs.com/}{red ~brandonpittman}`,
  github: chalk`{gray https://github.com/}{green brandonpittman}`,
  wantedly: chalk`{gray https://www.wantedly.com/users/}{blue 80873258}`,
  web: chalk`{cyan https://brandonpittman.net}`,
  npx: chalk`{red npx} {white brandonpittman}`,
  labelWork: chalk.white.bold('       Work:'),
  labelOpenSource: chalk.white.bold('Open Source:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelWantedly: chalk.white.bold('   Wantedly:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const opensourcing = `${data.labelOpenSource}  ${data.opensource}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const wantedlying = `${data.labelWantedly}  ${data.wantedly}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  opensourcing +
  newline +
  newline +
  twittering +
  newline +
  npming +
  newline +
  githubing +
  newline +
  wantedlying +
  newline +
  newline +
  webing +
  newline +
  newline +
  carding

// fs.writeFileSync(
//   path.join(__dirname, 'bin/output'),
//   chalk.blue(boxen(output, options))
// )

const boxedText = chalk.blue(boxen(output, options))
console.log(boxedText)