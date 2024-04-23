    // JSON data containing job listings
    const jobData = [
       {
    "id": "1",
    "title": "Software Engineer",
    "company": "TechCo",
    "location": "San Francisco, CA",
    "salary": "$100,000 - $120,000",
    "description": "TechCo is seeking a talented Software Engineer to join our team. You will be responsible for developing high-quality software solutions...",
    "postedDate": "2024-04-20"
  },
  {
    "id": "2",
    "title": "Data Analyst",
    "company": "DataCorp",
    "location": "New York, NY",
    "salary": "$80,000 - $100,000",
    "description": "DataCorp is looking for a skilled Data Analyst to analyze large datasets and provide valuable insights to our clients...",
    "postedDate": "2024-04-19"
  },
  {
    "id": "3",
    "title": "Marketing Manager",
    "company": "BrandX",
    "location": "Los Angeles, CA",
    "salary": "$90,000 - $110,000",
    "description": "BrandX is seeking an experienced Marketing Manager to lead our marketing campaigns and drive brand awareness...",
    "postedDate": "2024-04-18"
  },
  {
    "id": "4",
    "title": "Graphic Designer",
    "company": "DesignWorks",
    "location": "Chicago, IL",
    "salary": "$70,000 - $90,000",
    "description": "DesignWorks is hiring a creative Graphic Designer to produce visually appealing designs for print and digital media...",
    "postedDate": "2024-04-17"
  },
  {
    "id": "5",
    "title": "Financial Analyst",
    "company": "FinanceTech",
    "location": "Boston, MA",
    "salary": "$85,000 - $100,000",
    "description": "FinanceTech is seeking a Financial Analyst to perform financial modeling, forecasting, and analysis for our clients...",
    "postedDate": "2024-04-16"
  },
  {
    "id": "6",
    "title": "Product Manager",
    "company": "ProductX",
    "location": "Seattle, WA",
    "salary": "$110,000 - $130,000",
    "description": "ProductX is looking for a skilled Product Manager to oversee the development and launch of new products...",
    "postedDate": "2024-04-15"
  },
  {
    "id": "7",
    "title": "UX/UI Designer",
    "company": "DesignHub",
    "location": "Austin, TX",
    "salary": "$80,000 - $100,000",
    "description": "DesignHub is hiring a talented UX/UI Designer to create intuitive and user-friendly interfaces for our web and mobile applications...",
    "postedDate": "2024-04-14"
  },
  {
    "id": "8",
    "title": "Sales Representative",
    "company": "SalesPro",
    "location": "Denver, CO",
    "salary": "$60,000 - $80,000",
    "description": "SalesPro is seeking an energetic Sales Representative to generate leads, close deals, and build strong customer relationships...",
    "postedDate": "2024-04-13"
  },
  {
    "id": "9",
    "title": "HR Manager",
    "company": "HR Solutions",
    "location": "Atlanta, GA",
    "salary": "$90,000 - $110,000",
    "description": "HR Solutions is looking for an experienced HR Manager to oversee all aspects of human resources functions...",
    "postedDate": "2024-04-12"
  },
  {
    "id": "10",
    "title": "Software Developer",
    "company": "CodeTech",
    "location": "Portland, OR",
    "salary": "$95,000 - $115,000",
    "description": "CodeTech is hiring a skilled Software Developer to design, develop, and maintain software applications...",
    "postedDate": "2024-04-11"
  },
  {
    "id": "11",
    "title": "Network Engineer",
    "company": "NetWorks",
    "location": "Houston, TX",
    "salary": "$90,000 - $110,000",
    "description": "NetWorks is seeking a Network Engineer to design and implement network solutions for our clients...",
    "postedDate": "2024-04-10"
  },
  {
    "id": "12",
    "title": "Operations Manager",
    "company": "Operations Inc.",
    "location": "Philadelphia, PA",
    "salary": "$100,000 - $120,000",
    "description": "Operations Inc. is looking for an Operations Manager to oversee our daily operations and streamline processes...",
    "postedDate": "2024-04-09"
  },
  {
    "id": "13",
    "title": "Customer Service Representative",
    "company": "ServicePro",
    "location": "Miami, FL",
    "salary": "$40,000 - $50,000",
    "description": "ServicePro is hiring a Customer Service Representative to assist customers and resolve inquiries via phone and email...",
    "postedDate": "2024-04-08"
  },
  {
    "id": "14",
    "title": "Project Manager",
    "company": "ProjectX",
    "location": "San Diego, CA",
    "salary": "$95,000 - $115,000",
    "description": "ProjectX is seeking an experienced Project Manager to lead our project teams and deliver successful outcomes...",
    "postedDate": "2024-04-07"
  },
  {
    "id": "15",
    "title": "Accountant",
    "company": "AccuCount",
    "location": "Dallas, TX",
    "salary": "$70,000 - $90,000",
    "description": "AccuCount is looking for a detail-oriented Accountant to manage financial transactions and prepare financial reports...",
    "postedDate": "2024-04-06"
  },
  {
    "id": "16",
    "title": "Web Developer",
    "company": "WebTech",
    "location": "Austin, TX",
    "salary": "$80,000 - $100,000",
    "description": "WebTech is hiring a talented Web Developer to design and implement web applications and interfaces...",
    "postedDate": "2024-04-05"
  },
  {
    "id": "17",
    "title": "Human Resources Assistant",
    "company": "HR Solutions",
    "location": "Chicago, IL",
    "salary": "$45,000 - $55,000",
    "description": "HR Solutions is seeking a Human Resources Assistant to provide administrative support to the HR department...",
    "postedDate": "2024-04-04"
  },
  {
    "id": "18",
    "title": "Quality Assurance Analyst",
    "company": "QA Solutions",
    "location": "Seattle, WA",
    "salary": "$75,000 - $95,000",
    "description": "QA Solutions is looking for a Quality Assurance Analyst to develop and execute test plans to ensure software quality...",
    "postedDate": "2024-04-03"
  },
  {
    "id": "19",
    "title": "Content Writer",
    "company": "ContentWorks",
    "location": "New York, NY",
    "salary": "$60,000 - $80,000",
    "description": "ContentWorks is hiring a creative Content Writer to produce engaging and informative content for our audience...",
    "postedDate": "2024-04-02"
  },
  {
    "id": "20",
    "title": "Business Analyst",
    "company": "BizTech",
    "location": "San Francisco, CA",
    "salary": "$90,000 - $110,000",
    "description": "BizTech is seeking a Business Analyst to analyze business processes and identify opportunities for improvement...",
    "postedDate": "2024-04-01"
  },
  {
    "id": "21",
    "title": "Systems Administrator",
    "company": "SystemWorks",
    "location": "Boston, MA",
    "salary": "$85,000 - $105,000",
    "description": "SystemWorks is looking for a Systems Administrator to manage and maintain our IT infrastructure...",
    "postedDate": "2024-03-31"
  },
  {
    "id": "22",
    "title": "Digital Marketing Specialist",
    "company": "DigitalWorks",
    "location": "Los Angeles, CA",
    "salary": "$70,000 - $90,000",
    "description": "DigitalWorks is hiring a Digital Marketing Specialist to develop and execute digital marketing campaigns...",
    "postedDate": "2024-03-30"
  },
  {
    "id": "23",
    "title": "IT Support Technician",
    "company": "IT Solutions",
    "location": "Dallas, TX",
    "salary": "$50,000 - $60,000",
    "description": "IT Solutions is seeking an IT Support Technician to provide technical assistance and support to our employees...",
    "postedDate": "2024-03-29"
  },
  {
    "id": "24",
    "title": "Java Developer",
    "company": "JavaTech",
    "location": "Chicago, IL",
    "salary": "$95,000 - $115,000",
    "description": "JavaTech is hiring a skilled Java Developer to design and develop high-performance, scalable Java applications...",
    "postedDate": "2024-03-28"
  },
  {
    "id": "25",
    "title": "Administrative Assistant",
    "company": "AdminWorks",
    "location": "Seattle, WA",
    "salary": "$40,000 - $50,000",
    "description": "AdminWorks is seeking an Administrative Assistant to provide administrative support to our office...",
    "postedDate": "2024-03-27"
  },
  {
    "id": "26",
    "title": "Full Stack Developer",
    "company": "FullStackTech",
    "location": "San Francisco, CA",
    "salary": "$110,000 - $130,000",
    "description": "FullStackTech is looking for a talented Full Stack Developer to design and implement web applications...",
    "postedDate": "2024-03-26"
  },
  {
    "id": "27",
    "title": "Customer Success Manager",
    "company": "SuccessWorks",
    "location": "New York, NY",
    "salary": "$90,000 - $110,000",
    "description": "SuccessWorks is seeking a Customer Success Manager to ensure customer satisfaction and retention...",
    "postedDate": "2024-03-25"
  },
  {
    "id": "28",
    "title": "Software Tester",
    "company": "TestTech",
    "location": "Los Angeles, CA",
    "salary": "$75,000 - $95,000",
    "description": "TestTech is hiring a Software Tester to conduct manual and automated tests to ensure software quality...",
    "postedDate": "2024-03-24"
  },
  {
    "id": "29",
    "title": "UI Designer",
    "company": "DesignWorks",
    "location": "Chicago, IL",
    "salary": "$80,000 - $100,000",
    "description": "DesignWorks is seeking a creative UI Designer to design intuitive and user-friendly interfaces...",
    "postedDate": "2024-03-23"
  },
  {
    "id": "30",
    "title": "Digital Designer",
    "company": "DigitalArt",
    "location": "San Francisco, CA",
    "salary": "$70,000 - $90,000",
    "description": "DigitalArt is hiring a Digital Designer to create visually stunning designs for digital platforms...",
    "postedDate": "2024-03-22"
  },
  {
    "id": "31",
    "title": "Sales Manager",
    "company": "SalesPro",
    "location": "New York, NY",
    "salary": "$100,000 - $120,000",
    "description": "SalesPro is seeking an experienced Sales Manager to lead our sales team and drive revenue growth...",
    "postedDate": "2024-03-21"
  },
  {
    "id": "32",
    "title": "Network Administrator",
    "company": "NetWorks",
    "location": "Los Angeles, CA",
    "salary": "$90,000 - $110,000",
    "description": "NetWorks is looking for a Network Administrator to maintain and secure our network infrastructure...",
    "postedDate": "2024-03-20"
  },
  {
    "id": "33",
    "title": "Content Manager",
    "company": "ContentWorks",
    "location": "Chicago, IL",
    "salary": "$80,000 - $100,000",
    "description": "ContentWorks is seeking a Content Manager to oversee content strategy and creation for our digital platforms...",
    "postedDate": "2024-03-19"
  },
  {
    "id": "34",
    "title": "Business Development Manager",
    "company": "BizDev",
    "location": "San Francisco, CA",
    "salary": "$90,000 - $110,000",
    "description": "BizDev is hiring a Business Development Manager to identify new business opportunities and build client relationships...",
    "postedDate": "2024-03-18"
  },
  {
    "id": "35",
    "title": "Financial Advisor",
    "company": "FinancePro",
    "location": "New York, NY",
    "salary": "$80,000 - $100,000",
    "description": "FinancePro is seeking a Financial Advisor to provide financial planning and investment advice to clients...",
    "postedDate": "2024-03-17"
  },
  {
    "id": "36",
    "title": "UX Designer",
    "company": "DesignHub",
    "location": "Los Angeles, CA",
    "salary": "$85,000 - $105,000",
    "description": "DesignHub is hiring a UX Designer to create seamless and engaging user experiences for our products...",
    "postedDate": "2024-03-16"
  },
  {
    "id": "37",
    "title": "Frontend Developer",
    "company": "FrontEndTech",
    "location": "San Francisco, CA",
    "salary": "$95,000 - $115,000",
    "description": "FrontEndTech is looking for a skilled Frontend Developer to create responsive and user-friendly web interfaces...",
    "postedDate": "2024-03-15"
  },
  {
    "id": "38",
    "title": "Marketing Coordinator",
    "company": "BrandWorks",
    "location": "Chicago, IL",
    "salary": "$60,000 - $80,000",
    "description": "BrandWorks is seeking a Marketing Coordinator to assist in the implementation of marketing strategies...",
    "postedDate": "2024-03-14"
  },
  {
    "id": "39",
    "title": "Technical Support Engineer",
    "company": "TechSupport",
    "location": "Boston, MA",
    "salary": "$70,000 - $90,000",
    "description": "TechSupport is hiring a Technical Support Engineer to provide technical assistance to our customers...",
    "postedDate": "2024-03-13"
  },
  {
    "id": "40",
    "title": "Data Scientist",
    "company": "DataWorks",
    "location": "Seattle, WA",
    "salary": "$100,000 - $120,000",
    "description": "DataWorks is seeking a Data Scientist to analyze complex datasets and extract valuable insights...",
    "postedDate": "2024-03-12"
  },
  {
    "id": "41",
    "title": "Recruiter",
    "company": "RecruitPro",
    "location": "New York, NY",
    "salary": "$80,000 - $100,000",
    "description": "RecruitPro is looking for a Recruiter to source, screen, and recruit top talent for our clients...",
    "postedDate": "2024-03-11"
  },
  {
    "id": "42",
    "title": "IT Manager",
    "company": "IT Solutions",
    "location": "San Francisco, CA",
    "salary": "$110,000 - $130,000",
    "description": "IT Solutions is seeking an IT Manager to oversee our IT operations and infrastructure...",
    "postedDate": "2024-03-10"
  },
  {
    "id": "43",
    "title": "Software Architect",
    "company": "CodeTech",
    "location": "Chicago, IL",
    "salary": "$120,000 - $140,000",
    "description": "CodeTech is hiring a Software Architect to design and implement scalable software solutions...",
    "postedDate": "2024-03-09"
  },
  {
    "id": "44",
    "title": "Account Manager",
    "company": "AccountPro",
    "location": "Los Angeles, CA",
    "salary": "$90,000 - $110,000",
    "description": "AccountPro is seeking an Account Manager to foster strong client relationships and drive revenue growth...",
    "postedDate": "2024-03-08"
  },
  {
    "id": "45",
    "title": "Technical Writer",
    "company": "TechDocs",
    "location": "Seattle, WA",
    "salary": "$65,000 - $85,000",
    "description": "TechDocs is hiring a Technical Writer to create clear and concise documentation for our products...",
    "postedDate": "2024-03-07"
  },
  {
    "id": "46",
    "title": "Business Intelligence Analyst",
    "company": "BizIntel",
    "location": "San Francisco, CA",
    "salary": "$85,000 - $105,000",
    "description": "BizIntel is seeking a Business Intelligence Analyst to analyze data and provide actionable insights...",
    "postedDate": "2024-03-06"
  },
  {
    "id": "47",
    "title": "Social Media Manager",
    "company": "SocialWorks",
    "location": "New York, NY",
    "salary": "$70,000 - $90,000",
    "description": "SocialWorks is hiring a Social Media Manager to develop and execute social media strategies...",
    "postedDate": "2024-03-05"
  },
  {
    "id": "48",
    "title": "DevOps Engineer",
    "company": "DevOpsTech",
    "location": "Los Angeles, CA",
    "salary": "$100,000 - $120,000",
    "description": "DevOpsTech is looking for a DevOps Engineer to automate and streamline our software development processes...",
    "postedDate": "2024-03-04"
  },
  {
    "id": "49",
    "title": "IT Security Specialist",
    "company": "SecurityTech",
    "location": "Seattle, WA",
    "salary": "$95,000 - $115,000",
    "description": "SecurityTech is seeking an IT Security Specialist to implement and maintain security measures...",
    "postedDate": "2024-03-03"
  }

    ];

    // Function to create job listing cards
    function createJobListingCard(job) {
      const card = document.createElement("li");
      card.classList.add("card");
      card.innerHTML = `
        <h3>${job.title}</h3>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Salary:</strong> ${job.salary}</p>
        <p>${job.description}</p>
        <p><strong>Posted Date:</strong> ${job.postedDate}</p>
        <a class="apply-btn" href="#">Apply Now</a>
      `;
      return card;
    }

    // Display job listings
    const jobListingsContainer = document.getElementById("jobListingsContainer");
    jobData.forEach(job => {
      const jobCard = createJobListingCard(job);
      jobListingsContainer.appendChild(jobCard);
    });



