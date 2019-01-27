import React, { Component } from 'react';



class DescriptionComponent extends Component {
    // var descriptionID = this.props.match.params.id;

    componentDidMount() {

        this.addClassVisibility()
    }

    componentDidUpdate() {

        this.removeClass()
        this.addClassVisibility()
    }

    addClassVisibility() {
        document.getElementById(this.props.match.params.id).classList.add("visibility")
    }

    removeClass() {
        var els = document.getElementsByClassName("Container")
        for (var x = 0; x < els.length; x++) {
            els[x].classList.remove('visibility')
        }


    }
    render() {
        console.log(this.props.match.params.id)
        return (
            <div>
                <div id="1" className="Container hidden">
                    <div className="row descriptionHead">
                        <div className="col-lg-12 text-center descriptionContent">
                            <h2 className="section-heading contentHeading">Integration Services</h2>
                            <img className='contentImage' src='/img/description/sample.jpg' />
                        </div>
                    </div>
                    <div className="text-muted para_style">
                        <p >

                            The fact that you have different databases controlled by different applications and operating systems, sitting on a variety of platforms in diverse locations doesn’t change the expectation. If you want to remain competitive, you have to deliver.There’s a lot at stake—not just protection of your company’s investment in business applications, hardware, and software, but the ability of the company to respond quickly to changing needs and to meet tintegrationpiche expectations of both internal and external users.Time to market is critical.This is the Challenge of Integration.<br /><br />

                            Enterprise Application Integration (EAI) is the process of linking these applications and others in order to realize financial and operational competitive advantages.When different systems can’t share their data effectively, they create information bottlenecks that require human intervention in the form of decision making or data entry. With a properly deployed EAI architecture, organizations are able to focus most of their efforts on their value-creating core competencies instead of focusing on workflow management.<br /><br />

                            For generations, systems have been built that have served a single purpose for a single set of users without sufficient thought to integrating these systems into larger systems and multiple applications. EAI is the solution to the unanticipated outcome of generations of development undertaken without a central vision or strategy. The demand of the enterprise is to share data and processes without having to make sweeping changes to the applications or data structures. Only by creating a method of accomplishing this integration can EAI be both functional and cost-effective.<br /><br />

                            Our Consultants have extensive experience in providing integration solution. Our understanding of the appropriate tools available in the market makes us the primary choice for providing integration solutions to the customers.
                    </p>
                    </div>
                </div>
                <div id="2" className="Container hidden">
                    <div className="row descriptionHead">
                        <div className="col-lg-12 text-center descriptionContent">
                            <h2 className="section-heading contentHeading">Business Process Management</h2>
                            <img className='contentImage' src='/img/description/sample.jpg' />
                        </div>
                    </div>
                    <div className="text-muted para_style">
                        <p>
                            Business Process Management (BPM) is a field of knowledge at the intersection between management and information technology, encompassing methods, techniques and tools to design, enact, control, and analyze operational business processes involving humans, organizations, applications, documents and other sources of information.<br /><br />
                            BPM covers activities performed by organizations to manage and to improve their business processes. While such a goal is hardly new, software tools called business process management systems (BPM systems) have made such activities faster and cheaper. BPM systems monitor the execution of the business processes so that managers can analyze and change processes in response to data.<br /><br />

                            Our Business Process Management solutions are based on model-driven process-automation using cost effective advanced and sophisticated tools.<br /><br />

                            We also assist in technology selection to ensure our solution is scalable and the processes are more efficient, productive and much more automated for better ROI.<br /><br />

                            Our BPM Solutions offer following benefits:
                        </p>
                        <ul> <li>Coordinate and control activities spans across multiple systems and people.</li>

                            <li> A shared workspace for IT and Business.</li>

                            <li> Flexible business reporting to all levels of the organization.</li>

                            <li> Significantly reduces implementation life cycle.</li>
                        </ul>
                    </div>
                </div>
                <div id="3" className="Container hidden">
                    <div className="row descriptionHead">
                        <div className="col-lg-12 text-center descriptionContent">
                            <h2 className="section-heading contentHeading" >Service-Oriented Architecture</h2>
                            <img className='contentImage' src='/img/description/sample.jpg' />
                        </div>
                    </div>
                    <div className="text-muted para_style">
                        <p>

                            A service-oriented architecture is a collection of services/processes. These services communicate with each other. The communication can involve either simple data passing or it could involve two or more services coordinating someSEOPic activity. Some means of connecting services to each other is needed.<br /><br />

                            Service Orientated Architecture (SOA) delivers business agility and IT flexibility in any organisation.SOA is an architecture that defines Business Processes using open standards that allow reusability of the existing components and provides an easy integration using a common interface.<br /><br />

                            Renaissance understands that SOA is about changing the way IT delivers assets to its business. We have the focus that can deliver business value via an enterprise SOA strategy.<br /><br />

                            Benefits of using SOA Solutions:</p>
                        <ul>
                            <li> Improved manageability and reduced risk because of increased business process visibility.</li>

                            <li> Faster and more efficient delivery of the business solutions because of higher opportunity of component reusability.</li>

                            <li> Increases flexibility and adaptability of the business as a whole.</li>
                        </ul>
                    </div>
                </div>
                <div id="4" className="Container hidden">
                    <div className="row descriptionHead">
                        <div className="col-lg-12 text-center descriptionContent">
                            <h2 className="section-heading contentHeading" >Business Activity Monitoring</h2>
                            <img className='contentImage' src='/img/description/sample.jpg' />
                        </div>
                    </div>
                    <div className="text-muted para_style">
                        <p>


                            Business Activity Monitoring (BAM) is software that aids in monitoring of business processes, as those processes are implemented in computer systems. BAM is an enterprise solution primarily intended to provide a realtime summary of business processes to operations managers and upper management.<br /><br />

                            As such, BAM presents dashboards that contain key performance indicators (KPI) that support root cause analysis and alerts that warn of impending problems. Trouble notification functions are integral to most BAM solutions and these are many and varied. For example, whole groups of people can be sent e-mails, voice or text messages, according to the nature of the problem. Automated problem solving, where feasible, can correct and restart failed processesmontageBAm.<br /><br />

                            The failure of any vital communication could cost the bank large sums in interest charged by the central bank. A BAM solution would be programmed to become aware of each message and await confirmation. Failure to receive confirmation within a reasonable amount of time would be grounds for the BAM solution to raise an alarm that would set in motion manual intervention to investigate the cause of the delay and to push the problem toward resolution before it becomes costly.<br /><br />

                            The term 'Business Activity Monitoring' was originally coined by analysts Gartner, Inc and refers to the aggregation, analysis, and presentation of real time information about activities inside organizations and involving customers and partners. Although BAM systems usually use a computer dashboard display to present data, BAM is distinct from the dashboards used by Business Intelligence (BI) in that it has three distinct characteristics not found in BI tools:<br /><br />

                            BAM systems are driven by business events, fed directly from integration software or from Business Process Management software applications.<br /><br />

                            BAM systems are real time where data displayed is not dependent upon a user refreshing a query.<br /><br />

                            BAM systems are process oriented.<br /><br />

                            The goals of Business Activity Monitoring are to provide real time information about the status and results of various operations, processes, and transactions so business decisions can be informed, quickly address problem areas, and re-position organizations to take full advantage of emerging opportunities.<br /><br />

                            Typically BAM software is capable of, for example, providing real time visibility into how business events such as orders, process queues, network failures, database overloads, etc.) affect the progress of business transactions, permitting real-time business decisions in response to system events – e.g., rescheduling business process instances that have stalled as a result of a credit reporting service slowdown, automate real-time notification of violation or pending violation of business-level policies, and provide statistics on business process performance.<br /><br />

                            Increasingly BAM is being built in as a feature of Integration Software and Business Process Management software, although there are many independent vendors as well.<br /><br />

                            Some BAM features and capabilities are being built into broader Real time business intelligence products.<br /><br />

                            Our BAM solutions provides increased business visibility to management and enables to change Business Processes to meet business KPI’s.<br /><br />

                            This solution also empowers businesses to stay competitive and provide better service operations..</p>

                    </div>
                </div>
                <div id="5" className="Container hidden">
                    <div className="row descriptionHead">
                        <div className="col-lg-12 text-center descriptionContent">
                            <h2 className="section-heading contentHeading" >Information Connectivity Services</h2>
                            <img className='contentImage' src='/img/description/sample.jpg' />
                        </div>
                    </div>
                    <div className="text-muted para_style">
                        <p>



                            Information Connectivity Services: The integration market is currently evolving towards complex integration due to mergers and acquisitions and also due to the strategies that include linking with suppliers, customers, and trading partners, building portals and intranet and participating in B2B marketplaces. Despite the market trends connecting legacy applications to the web and other packaged software applications still requires tradional integrationInfoConn.

                            Renaissance, provides tradional Enterprise Application Integration (EAI) solutions designed to help companies quickly integrate systems ranging from Siebel, PeopleSoft, EDI, SWIFT, SAP iDOC's to XML using WebSphere family of products and Web Services built on open industry standards.

                            Many legacy systems still play a vital role in day-to-day operation, and replacing them would disrupt business. Application integration is a cost effective solution to link legacy systems to other software applications or to the web. By using IBM WebSphere family of products and adapters, your company will be integrating components that could be part of a strategic integration platform that will lower the costs and speed up the integration of future applications.

                            Our Consultants have extensive experience in integration solutions. Our extensive knowledge and experience on IBM software makes us the primary choice for providing integration solutions to the customers.
                            </p>
                    </div>
                </div>
                <div id="6" className="Container hidden">
                    <div className="row descriptionHead">
                        <div className="col-lg-12 text-center descriptionContent">
                            <h2 className="section-heading contentHeading" >Portal Services</h2>
                            <img className='contentImage' src='/img/description/sample.jpg' />
                        </div>
                    </div>
                    <div className="text-muted para_style">
                        <p>


                            Renaissance InfoSystems provide services to help you design, develop, implement and integrate a scalable and secure portal solutions using IBM WebSphere Portal Server.

    363  Our portal solutions aim at helping our enterprise customers to achieve:

    363  Evaluate and Design tailored portal solutions.

    363  Build re-usable portal interface components and Personalize.

    363  Manage enterpise wide contents.

    363  Integrate online marketplace, procurement and third party systems.

    363 Design portal architecture to support scalable, manageable and re-usable architecture.

   </p>

                    </div>
                </div>
                <div id="7" className="Container hidden">
                    <div className="row descriptionHead">
                        <div className="col-lg-12 text-center descriptionContent">
                            <h2 className="section-heading contentHeading" >Software Migration Services</h2>
                            <img className='contentImage' src='/img/description/sample.jpg' />
                        </div>
                    </div>
                    <div className="text-muted para_style">
                        <p>


                            Software Migration Services are promising alternative to expensive, time intensive and often high risk re-writes for businesses. Migrating software systems eases the burden of IT executives as well as programmers by preserving a company’s existing investment in complex software systems and their demonstrated, time-tested reliability.montagemigration

    For years, many companies have been re-writing their software systems from scratch to take advantage of different development tools, languages or platforms. Migration is a way to reduce development costs and improve ROI. Migration transforms an existing software system and is inherently less risky and inexpensive than new development. Companies are finding this particularly important with the uncertainty in the economy.

    In addition to preserving the integrity and tremendous financial investment of a company’s existing software system, migrations provide solutions to challenges such as dwindling vendor support services, standardization projects, shortage of expert staff, and the expense of ongoing runtime fees. Possessing a depth of experience that is rare in the volatile Client-Server (CSP, Smalltalk, VisualAge etc.) and Web enabling (Java, J2EE, Web Services, XML etc.) programming segment, Renaissance InfoSystems focuses on transitioning companies from one technology to another in the areas of Object Technology and Web-based software
</p>
                    </div>
                </div>
                <div id="8" className="Container hidden">
                    <div className="row descriptionHead">
                        <div className="col-lg-12 text-center descriptionContent">
                            <h2 className="section-heading contentHeading" >Maintenance & Support</h2>
                            <img className='contentImage' src='/img/description/sample.jpg' />
                        </div>
                    </div>
                    <div className="text-muted para_style">
                        <p>

                            oftware maintenance is one of the phases in the software development process, and follows deployment of the software into the field. The software maintenance phase involves changes to the software in order to correct defects and deficiencies found during field usage as well as the addition of new functionality to improve the software's maintainusability and applicability.Software just like most other products, is typically released with a known set of defects and deficiencies. The software is released with the issues because the development organization decides the utility and value of the software at a particular level of quality outweighs the impact of the known defects and deficiencies.The known issues are normally documented in a letter of operational considerations or release notes so that the users of the software will be able to work around the known issues and will know when the use of the software would be inappropriate for particular tasks.With the release of the software, other, undocumented defects and deficiencies will be discovered by the users of the software. As these issues are reported into the development organization, they will be entered into the defect tracking system.The people involved in the software maintenance phase are expected to work on these known issues, address them, and prepare for a new release of the software, known as a maintenance release, which will address the documented issues.

    Renaissance has a wealth of experience in the hardware and software systems that comprise both modern and legacy environments.

    Our experience, flexibility, responsiveness and belief in proactive systems maintenance can reduce costs and increase the availability of your IT infrastructure.
                           </p>
                    </div>
                </div>
                <div id="9" className="Container hidden">
                    <div className="row descriptionHead">
                        <div className="col-lg-12 text-center descriptionContent">
                            <h2 className="section-heading contentHeading" >Education and Training</h2>
                            <img className='contentImage' src='/img/description/sample.jpg' />
                        </div>
                    </div>
                    <div className="text-muted para_style">
                        <p>
                            Renaissance provide training services to the corporate professionals. Our training courses emphasize on the practical solutions rather than just the product training.
    
    Extensive hands-on exposure during the course coupled with discussion and lectures assure a complete understanding of the complex solutions in real life scenarios.
    
    
    
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default DescriptionComponent;