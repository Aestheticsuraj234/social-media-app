import { Client, Account } from 'appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject("675d9f1e003d939f016b"); // Replace with your project ID

export const account = new Account(client);