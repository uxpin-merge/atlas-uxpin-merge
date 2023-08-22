import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface JiraIssue {
  key: string;
  fields: {
    summary: string;
  };
}

interface ApiComponentProps {
  username:string;
  apiToken: string;
  jiraBaseUrl :string;
  projectKey: string;
}


const JiraIssuesComponent = (props:ApiComponentProps) => {

  const [issues, setIssues] = useState<JiraIssue[]>([]);
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');

  const uxpinProxy = 'https://api.uxpin.com/jira';

  const jiraBaseUrl = props.jiraBaseUrl;
  const projectKey = props.projectKey;
  const username = props.username;
  const apiToken = props.apiToken;


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

  useEffect(() => {
    fetchIssues();
  }, [props]);

  const handlePostIssue = async () => {
    const newIssue = {
      fields: {
        project: { key: 'TODO' }, // Replace with your actual project key
        summary: summary,
        description: description,
        issuetype: { name: 'Task' },
      },
    };

    try {
      await axios.post(
        `${uxpinProxy}/${jiraBaseUrl}/rest/api/2/issue`, // Replace with your Jira instance URL
        newIssue,
        {
          headers: {
            Authorization: `Basic ${auth}`,
            'Content-Type': 'application/json',
          },
        }
      );

      setSummary('');
      setDescription('');
      fetchIssues();
    } catch (error) {
      console.error('Error creating Jira issue:', error);
    }
  };

  return (
    <div>
      <h1>Jira Issues</h1>
      <ul>
        {issues.map((issue) => (
          <li key={issue.key}>{issue.fields.summary}</li>
        ))}
      </ul>
      <h2>Create a New Issue</h2>
      <div>
        <label>Summary:</label>
        <input
          type="text"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button onClick={handlePostIssue}>Create Issue</button>
    </div>
  );
};

export default JiraIssuesComponent;
