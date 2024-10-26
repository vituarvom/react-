// src/components/Tabs.js
import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Heading from '@theme/MDXComponents/Heading';

const RSUTabs = () => {
  return (
    <Tabs>
      <TabItem value="npm" label="npm">
        <CodeBlock language="bash">npm install react-smart-utils </CodeBlock>
      </TabItem>
      <TabItem value="yarn" label="Yarn">
        <CodeBlock language="bash">yarn add react-smart-utils </CodeBlock>
      </TabItem>

      <TabItem value="pnpm" label="pnpm">
        <CodeBlock language="bash">pnpm install react-smart-utils</CodeBlock>
      </TabItem>
    </Tabs>
  );
};

export default RSUTabs;

export const ExampleCodeBlocks = ({
  jsCode,
  tsCode,
  api,
}: {
  jsCode: string;
  tsCode: string;
  api: string;
}) => {
  return (
    <>
      <Heading as="h1">Example code </Heading>
      <Tabs>
        <TabItem value="typescript" label="Typescript">
          <CodeBlock language="tsx">{tsCode}</CodeBlock>
        </TabItem>
        <TabItem value="javascript" label="Javascript">
          <CodeBlock language="jsx">{jsCode}</CodeBlock>
        </TabItem>
        <TabItem value="api" label="API">
          <CodeBlock language="typescript">{api}</CodeBlock>
        </TabItem>
      </Tabs>
    </>
  );
};
