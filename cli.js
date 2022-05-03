#!/bin/env node
import kv from './cli/kv.js'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

let argv = hideBin(process.argv)
if (argv.length !== 0) {
  if (argv[0].includes('-')) argv = [ argv[0].split('-')[0] ]
}

yargs(argv)
  .command('kv [subcommand]', 'Key-Value Store Operations', () => {}, kv)
  .demandCommand(1)
  .parse()

