import { Octokit } from "@octokit/rest";
const octokit = new Octokit({
    auth: process.env.AUTH_TOKEN
})

export const getPublicGists = () => octokit.gists.listPublic()

export const getGistForUser = username =>  octokit.gists.listForUser({ username });