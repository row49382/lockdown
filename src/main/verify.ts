import * as github from '@actions/github'
import * as core from '@actions/core'

export function verifyUser(username: string, input: string): boolean {
  const listOfUsernames = input.split(',')
  return listOfUsernames.includes(username)
}

export function verifyOwner(username: string): boolean {
  const owner = github.context.repo.owner
  core.info(`Owner: ${owner}`)
  if (owner === username) {
    return true
  }
  return false
}
