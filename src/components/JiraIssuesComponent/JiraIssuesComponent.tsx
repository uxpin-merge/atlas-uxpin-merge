import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Field } from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import SectionMessage from '@atlaskit/section-message';
import { SimpleTag } from '@atlaskit/tag';
import TagGroup from '@atlaskit/tag-group';

interface JiraIssue {
  key: string;
  fields: {
    summary: string;
    project: { key: string }
  };
}

interface ApiComponentProps {
  username: string;
  apiToken: string;
  jiraBaseUrl: string;
  projectKey: string;
}


const JiraIssuesComponent = (props: ApiComponentProps) => {

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
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
        }
      );
      console.log(`Response: ${response.status} ${response.statusText}`);
      console.log('stringyfied', response)

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
        project: { key: projectKey },
        summary: summary,
        description: description,
        issuetype: { name: 'Task' },
      },
    };

    try {
      await axios.post(
        `${uxpinProxy}/${jiraBaseUrl}/rest/api/2/issue`,
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
      <SectionMessage
        title={`Jira Issues in [${projectKey}] Project`}
      >
        <TagGroup>
          {issues.map(
            issue =>
              issue.fields.project.key === projectKey && (
                <SimpleTag text={issue.fields.summary} key={issue.key} href={`${jiraBaseUrl}/browse/${issue.key}`} />
              )
          )}
        </TagGroup>
      </SectionMessage>


      <h2>Create a New Issue</h2>
      <div>
        <Field
          aria-required={true}
          name="summary"
          label="Summary"
          isRequired
        >
          {({ }) => <TextField
            onBlur={(e) => setSummary(e.target.value)} />}
        </Field>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Field
          aria-required={true}
          name="description"
          label="Description"
          isRequired
        >
          {({ }) => <TextField
            onBlur={(e) => setDescription(e.target.value)} />}
        </Field>
      </div>
      <Button
        onClick={handlePostIssue}
        appearance='primary'>
        Create New Issue
      </Button>
    </div>
  );
};

export default JiraIssuesComponent;
