import { cli } from '@custom-elements-manifest/analyzer/cli.js'


const result = await cli({
  argv: ['analyze', '--dependencies', '--litelement'],
  cwd: './packages',
  noWrite: true
});

console.log(result)
