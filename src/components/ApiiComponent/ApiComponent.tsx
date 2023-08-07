import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiComponent = () => {
  const [issues, setIssues] = useState([{key: 0, fields: {summary: ''}}]);

  useEffect(() => {
    const uxpinProxy = 'https://app.uxpin.com/storybook';
    // Your Jira instance URL
    const jiraBaseUrl = 'https://jack-uxpin.atlassian.net';
    // Your Jira project key
    const projectKey = 'TODO';
    // Replace 'YOUR_USERNAME' and 'YOUR_API_TOKEN' with your Jira credentials
    const username = 'jack@uxpin.com';
    const apiToken = 'ATATT3xFfGF07dsD3LlO-8R1dhublRxXgx8UMrgWDrsd1-RFhygDjUbGKagKR1RKSgNh5_UKt7JOhzreOw7aoLk5UjRvm6hvqIYUUNhWJ6-FRkBpKLYRjlLDW6jTh5ZWiiPSHytzGW0DBjLQYYdgpIQPJNOUekRFiFJA6apli6gku1rCKKdkSEM=581E44D7';
    const auth = btoa(`${username}:${apiToken}`);

    const fetchIssues = async () => {
      try {
        const response = await axios.get(
          `${uxpinProxy}/${jiraBaseUrl}/rest/api/2/search?jql=project=${projectKey}`,
          {
            headers: {
              Authorization: `Basic ${auth}`,
            },
          }
        );

        setIssues(response.data.issues);
      } catch (error) {
        console.error('Error fetching Jira issues:', error);
      }
    };

    fetchIssues();
  }, []);

  return (
    <div>
      <h1>Jira Issues</h1>
      <ul>
        {issues.map((issue) => (
          <li key={issue.key}>{issue.fields.summary}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiComponent;
