import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorComponent,
  WordExport,
  SfdtExport,
  Selection,
  Editor,
  DocumentEditorContainerComponent,
  Toolbar,
  Inject,
} from '@syncfusion/ej2-react-documenteditor';
// @ts-ignore
import htmlDocx from 'html-docx-js/dist/html-docx';
import { saveAs } from 'file-saver';
//Inject require module.
DocumentEditorComponent.Inject(SfdtExport, Selection, Editor, WordExport);
function Test() {
  const handleExport = async () => {
    const htmlContent = `
    <!DOCTYPE html>
<html>
<head>
  <title>Proposal Document for Delivery App</title>
</head>
<body>
  <h1>Proposal Document for Delivery App</h1>

  <h2>1. Introduction</h2>
  <p>The delivery app is a software application designed to facilitate the process of ordering and delivering products or services to customers. It serves as a platform connecting customers, merchants, and delivery personnel, enabling seamless and convenient transactions. The primary goal of the delivery app is to provide a user-friendly and efficient way for customers to browse, select, order, and receive their desired items from various businesses.</p>

  <h2>2. Project Overview</h2>
  <p>The delivery app will be developed using a combination of iOS, Android, and web platforms to cater to a wider audience. It will be compatible with various devices and screen sizes, ensuring a responsive user experience. The app will utilize GPS technology for real-time tracking of delivery personnel and provide accurate estimated delivery times to customers.</p>

  <h2>3. Functional Objectives</h2>
  <ul>
    <li>User Registration and Login: The delivery app should have a user registration and login feature to allow customers, merchants, and delivery personnel to create accounts and access the app's functionalities.</li>
    <li>Product Catalog: The app should provide a comprehensive product catalog that allows customers to browse and search for the items they want to order. This catalog should include detailed product descriptions, images, and pricing information.</li>
    <li>Order Placement and Tracking: The app should enable customers to place orders easily and track the status of their orders in real-time. This feature should provide updates on order processing, preparation, and delivery, allowing customers to know the estimated delivery time.</li>
    <li>Payment Integration: The app should integrate with various payment gateways to facilitate secure and convenient transactions. Customers should be able to make payments using credit/debit cards, mobile wallets, or other popular payment methods.</li>
    <li>Customer Support: The app should have a customer support feature that allows users to contact customer service representatives for assistance or to resolve any issues they may encounter during the ordering and delivery process. This feature can include options for live chat, email support, or a dedicated helpline.</li>
    <li>Rating and Review System: The app should include a rating and review system that allows customers to provide feedback on their experience with the delivery service and the quality of the products received. This feature can help improve the overall service and build trust among users.</li>
    <li>Multi-language and Multi-currency Support: To cater to a diverse user base, the app should support multiple languages and currencies. This feature will enhance the user experience and make the app accessible to a wider audience.</li>
  </ul>

  <h2>4. Non-functional Objectives</h2>
  <p>The delivery app should meet the following non-functional objectives:</p>
  <ul>
    <li>Performance: The app should be designed to handle a large number of users and transactions without compromising performance.</li>
    <li>Scalability: The app should be scalable to accommodate future growth and increased user demand.</li>
    <li>Integration: The app should be able to integrate with existing systems or APIs, such as payment gateways, mapping services, and inventory management systems, to ensure seamless functionality and data exchange.</li>
    <li>Push Notifications: The app should support push notifications to keep users informed about order updates, promotions, and other relevant information.</li>
    <li>Data Privacy and Security: The app should adhere to industry-standard security practices to protect user data and ensure privacy.</li>
  </ul>

  <h2>5. Project Scope</h2>
  <p>The scope of the project includes the development of the delivery app with the specified features and functionalities. The project will also involve testing and quality assurance to ensure a bug-free and user-friendly experience. Any constraints or limitations that may impact the development or delivery of the software will be taken into consideration during the project execution.</p>

  <h2>6. Project Plan</h2>
  <p>The project will follow the following timeline and milestones:</p>
  <ul>
    <li>Project Start Date: [INSERT START DATE]</li>
    <li>Project End Date: [INSERT END DATE]</li>
    <li>Key Deliverables and Milestones:
      <ul>
        <li>Requirements Gathering and Analysis</li>
        <li>Design and Prototyping</li>
        <li>Development and Implementation</li>
        <li>Testing and Quality Assurance</li>
        <li>Deployment and Launch</li>
        <li>Post-launch Support and Maintenance</li>
      </ul>
    </li>
    <li>Dependencies or Constraints: [INSERT ANY DEPENDENCIES OR CONSTRAINTS]</li>
  </ul>

  <h2>7. Budget</h2>
  <p>The estimated costs for developing and delivering the delivery app are as follows:</p>
  <ul>
    <li>Development Resources: [INSERT COST BREAKDOWN]</li>
    <li>Tools and Technologies: [INSERT COST BREAKDOWN]</li>
    <li>Testing and Quality Assurance: [INSERT COST BREAKDOWN]</li>
    <li>Deployment and Infrastructure: [INSERT COST BREAKDOWN]</li>
    <li>Post-launch Support and Maintenance: [INSERT COST BREAKDOWN]</li>
    <li>Total Estimated Budget: [INSERT TOTAL ESTIMATED BUDGET]</li>
  </ul>

  <h2>8. Conclusion</h2>
  <p>In conclusion, the delivery app aims to provide a user-friendly and efficient platform for customers to order and receive products or services. With the specified features, technical requirements, and project plan, we are confident in delivering the project according to the specified objectives and requirements. We look forward to working with you to bring this delivery app to life.</p>
</body>
</html>
    `; // Paste the HTML content here

    // const fileBuffer = await HTMLtoDOCX(htmlContent, null, {
    //   table: { row: { cantSplit: true } },
    //   footer: true,
    //   pageNumber: true,
    // });
    // saveAs(fileBuffer, 'html-to-docx.docx');
    const converted = htmlDocx.asBlob(htmlContent);
    saveAs(converted, 'test.docx');
  };
  return <button onClick={handleExport}>Export to Word</button>;
}
export default Test;
// id="container"
// height={'1000px'}
// ref={(scope) => {
//   documenteditor = scope;
// }}
// enableEditor={true}
// enableEditorHistory={true}
// isReadOnly={false}
// enableSelection={true}
// enableSfdtExport={true}
// enableWordExport={true}
