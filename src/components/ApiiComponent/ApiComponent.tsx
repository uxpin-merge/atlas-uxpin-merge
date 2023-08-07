import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiComponent = () => {
  const [issues, setIssues] = useState([{key: 0, fields: {summary: ''}}]);

  useEffect(() => {
    const uxpinProxy = 'https://app.uxpin.com/storybook';
    // Your Jira instance URL
    const jiraBaseUrl = 'https://rob-test-uxpin.atlassian.net';
    // Your Jira project key
    const projectKey = 'test-project';
    // Replace 'YOUR_USERNAME' and 'YOUR_API_TOKEN' with your Jira credentials
    const username = 'robert.hilscher@uxpin.com';
    const apiToken = 'ATATT3xFfGF0C0tZj0jXBh-tTlD5BugCBPrRbkuiN2zFqlzWVwWbZb7zyEXVBkjInCt8oS_6mO1g3JLYRVUkftsKhpCkrMxUG0NaR3CnzLJS9aA176EKyf_Fk7y0AEZazSgeFf20G3OJYmerDlqdkRbmsA10AoIWEO0JVEqVDSRkY2nE4yLJxI0=5B658202';
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
