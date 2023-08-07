import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiComponent = () => {
  const [issues, setIssues] = useState([{key: 0, fields: {summary: ''}}]);

  useEffect(() => {
    // Your Jira instance URL
    const jiraBaseUrl = 'https://jack-uxpin.atlassian.net';
    // Your Jira project key
    const projectKey = 'TODO';
    // Replace 'YOUR_USERNAME' and 'YOUR_API_TOKEN' with your Jira credentials
    const username = 'jack@uxpin.com';
    const apiToken = 'ATCTT3xFfGN0bbJjSkAchXRHSFT3JYSvq34gWVz7WMtLES-qhqow8RbMmyLw4hGLyU_D0wQA4DmKkM8q4VnNXe5CBa_pgaVJPMxzkKz7-vKRp4mKFXPWhQTaFgWhv1J55SxZpWf8wxFzAPco9djDqlReeh3maPoKGUhBoTlXW5HmV4-n3j0zltU=1E2FFA88';
    const auth = btoa(`${username}:${apiToken}`);

    const fetchIssues = async () => {
      try {
        const response = await axios.get(
          `${jiraBaseUrl}/rest/api/2/search?jql=project=${projectKey}`,
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