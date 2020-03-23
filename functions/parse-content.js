// Based on @Jinksi functions from his netlify-cms-react boilerplate
const fs = require('fs')
const path = require('path')
const jsonConcat = require('json-concat')
const _set = require('lodash/set')
const _mergeWith = require('lodash/mergeWith')
const _isArray = require('lodash/isArray')
const globCb = require('glob')
const util = require('util')

const glob = util.promisify(globCb)
const readFile = util.promisify(fs.readFile)

const options = {
  contentDir: './content/',
  outputFile: './src/data.json'
}

const getDocumentName = filePath => {
  const pathParsed = path.parse(filePath)
  return `${pathParsed.name}`
}

const getFileContents = filePath => {
  return readFile(filePath, 'utf8').then(data => {
    let documentData = JSON.parse(data)
    documentData.id = getDocumentName(filePath)
    documentData.body = documentData.body || documentData.content
    console.log(`✨  Processed ${filePath}`)
    return documentData
  })
}

const readFiles = async paths => Promise.all(paths.map(getFileContents))

// Combines all JSON Together
const combineJSON = async () => {
  console.log(`✨Reading JSON files in ${options.contentDir}`)
  const paths = await glob(`${options.contentDir}/**/**.json`)
  const results = await readFiles(paths)
  const data = [...results]
  return JSON.stringify(data, null, 2)
}

// Creates data file
const writeJSON = async () => {
  const json = await combineJSON()
  fs.writeFileSync(options.outputFile, json)
  console.log(`✅Data saved to ${options.outputFile}`)
  process.exit()
}

writeJSON();
