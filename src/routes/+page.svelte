<div class="max-w-[500px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1500px] mx-auto bg-base-100/70 px-4 md:px-12 lg:px-16 py-16 prose">
  <div class="flex flex-col lg:flex-row gap-12">
    <figure class="w-full lg:w-1/2 lg:max-w-[400px] not-prose">
      <img
        src="/img/profile.jpeg"
        alt="Profile"
        class="w-full h-full object-cover" />
    </figure>
    <div>
      <h1 class="mb-2">Archie To</h1>
      <h3 class="mt-0">Full Stack Developer | Django and React enthusiast | Cloud infrastructure builder</h3>
      <div class="flex flex-row gap-2">
        <!-- GitHub -->
        <a href="https://github.com/toanhminh0412" target="_blank" class="btn btn-primary">
          <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="black" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
          GitHub
        </a>

        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/archie-to-75a4a81a2/" target="_blank" class="btn bg-[#0967C2] text-white border-[#0059b3]">
          <svg aria-label="LinkedIn logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fill-rule="evenodd"></path></svg>
          LinkedIn
        </a>
      </div>
      <div class="mt-4">Contact me at <a href="mailto:toanhminh0412@gmail.com">toanhminh0412@gmail.com</a></div>
      <h2>A bit about me</h2>
      <ul>
        <li>Years of experience: 3</li>
        <li>Degree: Bachelor of Science in Computer Science - University of Victoria</li>
        <li>Location: Victoria, BC, Canada</li>
        <li>Hobbies: Badminton, piano, cooking</li>
      </ul>
    </div>
  </div>

  <h2>Projects</h2>
  <p>Some of these are SaaS products that I've built with a purpose of solving real-world problems that I've encountered. Two of them have failed but they sure taught me a lot.</p>
  <!-- name of each tab group should be unique -->
  <div class="tabs tabs-lift">
    <label class="tab">
      <input type="radio" name="project-tab" checked />
      Analyzing Machine (Latest)
    </label>
    <div class="tab-content border-base-300 p-6">
      <div class="flex flex-row gap-2">
        <div class="badge badge-primary">Start: Mar 2025</div>
        <div class="badge badge-primary">End: Ongoing</div>
        <div class="badge badge-warning">Latest</div>
        <div class="badge badge-secondary">SaaS</div>
      </div>
      <h3 class="mb-8">Analyzing Machine (AM) - Quality evaluation AI for Air Traffic Control communication</h3>
      <p><strong>Problem:</strong> There are tens of thousands of Air Traffic Control communication recordings that need to be reviewed by auditors every month. This is a very time-consuming and expensive process.</p>
      <p>
        <strong>Solution:</strong> Apply state-of-the-art AI models to detect violations of Air Traffic Control communication standards and provide suggestions for improvement. This reduces the time and cost of the review process significantly.
      </p>
      <p>
        <strong>Tech stack:</strong> Django, Next.js, PostgreSQL, NGINX, AWS
        <br>
        <strong>My role:</strong> Develop features, build infrastructure, and deploy the application.
      </p>
      <div>
        <strong>Key features:</strong>
        <ul>
          <li>
            <strong>AI model:</strong>
            Fine-tune and deploy a Whisper model to transcribe audio recordings of conversations between Air Traffic Controllers and pilots.
            The transcriptions are passed to ChatGPT to detect violations of Air Traffic Control communication standards.
          </li>
          <li>
            <strong>App functionality:</strong>
            Build a user-friendly interface with features to upload audio files, review and analyze the results, and export the findings.
          </li>
          <li>
            <strong>Infrastructure:</strong>
            Deploy the app on an AWS EC2 instance, use NGINX as a reverse proxy, PostgreSQL as the database, RabbitMQ for asynchronous task processing, S3 for file storage and Route 53 for DNS.
          </li>
        </ul>
      </div>
    </div>

    <label class="tab">
      <input type="radio" name="project-tab"/>
      STRAP platform
    </label>
    <div class="tab-content border-base-300 p-6">
      <div class="flex flex-row gap-2">
        <div class="badge badge-primary">Start: Jan 2023</div>
        <div class="badge badge-primary">End: Ongoing</div>
        <div class="badge badge-accent">Work project</div>
        <div class="badge badge-secondary">Open source</div>
      </div>
      <h3 class="mb-8">STRAP platform - Self-serve app deployment platform for researchers</h3>
      <div class="flex flex-row gap-2">
        <a href="https://arcsoft.uvic.ca/projects/strap/" target="_blank" class="btn bg-purple-700 hover:bg-purple-900 duration-300 text-white btn-sm">
          <i class="fa-solid fa-globe"></i>
          More about STRAP
        </a>
        <a href="https://gitlab.com/uvic-arcsoft/strap" target="_blank" class="btn bg-orange-700 hover:bg-orange-900 duration-300 text-white btn-sm">
          <i class="fa-brands fa-gitlab"></i>
          Gitlab
        </a>
      </div>
      <p><strong>Problem:</strong> Researchers have a web app that they want to deploy. However, most of them don't have the expertise and resources to deploy and manage the infrastructure. That haven't even included the price management when it comes to cloud services.</p>
      <p>
        <strong>Solution:</strong> Our team, (ARCsoft), built a platform that researchers can deploy their apps and necessary infrastructure with just a few clicks.
      </p>
      <p>
        <strong>Tech stack:</strong> Django, Kubernetes, Helm, Terraform, OpenStack
        <br>
        <strong>My role:</strong> Develop the platform and automate the deployment process.
      </p>
      <div>
        <strong>Key features:</strong>
        <ul>
          <li>
            <strong>User-facing web app:</strong>
            Build a user-friendly web app that performs complex functionalities such as invoking the deployment processes, providing a real-time deployment and app log and implementing a complex list of admin settings that modify the connected infrastructure.
          </li>
          <li>
            <strong>Infrastructure:</strong>
            Deploy authentication services with Keycloak, Harbor image scanner, object storage with MinIO, PostgreSQL database and more.
          </li>
          <li>
            <strong>Deployment automation:</strong>
            Automate deployment processes with Terraform and Helm. Develop Terraform modules to deploy necessary infrastructure for each app.
          </li>
          <li>
            <strong>Open source:</strong>
            The platform is open source and available on Gitlab. During the project, we've made quite a few contributions to other open source projects such Traefik forward auth and Harbor Helm.
          </li>
        </ul>
      </div>
    </div>

    <label class="tab">
      <input type="radio" name="project-tab"/>
      <img src="/img/easierform.png" alt="EasierForm" class="w-8 h-8 not-prose">
      EasierForm
    </label>
    <div class="tab-content border-base-300 p-6">
      <div class="flex flex-row gap-2">
        <div class="badge badge-primary">Start: May 2024</div>
        <div class="badge badge-primary">End: Dec 2024</div>
        <div class="badge badge-secondary">SaaS</div>
      </div>
      <h3 class="mb-8">EasierForm - A fully-customizable drag-and-drop form builder</h3>
      <div class="flex flex-row gap-2">
        <a href="https://easierform.com" target="_blank" class="btn bg-purple-700 hover:bg-purple-900 duration-300 text-white btn-sm">
          <i class="fa-solid fa-globe"></i>
          Visit website
        </a>
        <a href="https://github.com/toanhminh0412/easier-form" target="_blank" class="btn bg-blue-700 hover:bg-blue-900 duration-300 text-white btn-sm">
          <i class="fa-brands fa-github"></i>
          GitHub
        </a>
      </div>
      <div>
      
      <video class="mt-8 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10" autoPlay loop muted playsInline>
        <source src="https://firebasestorage.googleapis.com/v0/b/easier-form.appspot.com/o/videos%2FMaking%20Form%20-%20EasierForm.mp4?alt=media&token=5cdca4d3-c66d-45b6-8ebf-2b1f6643c027" type="video/mp4" /> Your browser does not support the video tag.
      </video>

      </div>
      <p><strong>Problem:</strong> Most forms built with Google Forms look the same due to the limited customization options. Also, Google Forms is not designed for complex forms.</p>
      <p><strong>Solution:</strong> Build a fully-customizable drag-and-drop form builder that allows users to create complex and beautiful forms with ease.</p>
      <p>
        <strong>Tech stack:</strong> Next.js, MongoDB, Vercel, Stripe API, EmailJS
        <br>
        <strong>My role:</strong> Develop features, build infrastructure, and deploy the application.
      </p>
      <div>
        <strong>Key features:</strong>
        <ul>
          <li>
            <strong>Drag-and-drop form builder:</strong>
            Implement drag-and-drop and scalable widgets with different input types and grids to build any form layout. Support responsive design for different screen sizes.
          </li>
          <li>
            <strong>Real-time updates and action stack:</strong>
            Implement real-time updates to avoid change loss and keep track of user's actions to allow undo/redo.
          </li>
          <li>
            <strong>View responses in different ways:</strong>
            Allow users to view responses in table, form view. Export responses as CSV and Excel files.
          </li>
          <li>
            <strong>Payment integration:</strong>
            Integrate Stripe API to manage user subscription and payment.
          </li>
          <li>
            <strong>Email integration:</strong>
            Integrate EmailJS to send emails to form owners on new submissions.
          </li>
        </ul>
      </div>
    </div>

    <label class="tab">
      <input type="radio" name="project-tab" />
      <img src="/img/eport.png" alt="Eport" class="w-4 h-4 not-prose mr-2">
      Eport
    </label>
    <div class="tab-content border-base-300 p-6">
      <div class="flex flex-row gap-2">
        <div class="badge badge-primary">Start: July 2023</div>
        <div class="badge badge-primary">End: Apr 2024</div>
        <div class="badge badge-secondary">SaaS</div>
      </div>
      <h3 class="mb-8">Eport - Simple portfolio website builder for job seekers, freelancers and small businesses</h3>
      <div class="flex flex-row gap-2">
        <a href="https://eport.site" target="_blank" class="btn bg-purple-700 hover:bg-purple-900 duration-300 text-white btn-sm">
          <i class="fa-solid fa-globe"></i>
          Visit website
        </a>
        <a href="https://github.com/toanhminh0412/eport" target="_blank" class="btn bg-blue-700 hover:bg-blue-900 duration-300 text-white btn-sm">
          <i class="fa-brands fa-github"></i>
          GitHub
        </a>
      </div>
      
      <div class="relative overflow-hidden w-full pt-[56.25%] mt-8">
        <iframe src="https://www.youtube.com/embed/6xItzgh8OAs?si=WHcXfsd0SZ64Sjxf" class="text-center absolute top-0 left-0 bottom-0 right-0 w-full h-full" title="Freelancer Demo Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      
      <p><strong>Problem:</strong> Popular website builders such as WordPress and Wix are too technical and complicated for people to just want to create a simple website to advertise their services with only enough information.</p>
      <p><strong>Solution:</strong> Design pre-built professional-looking templates that users can grab, put their information and publish within minutes.</p>
      <p>
        <strong>Tech stack:</strong> Next.js, Firebase, Vercel, Stripe API, EmailJS
        <br>
        <strong>My role:</strong> Develop features, build infrastructure, and deploy the application.
      </p>
      <div>
        <strong>Key features:</strong>
        <ul>
          <li>
            <strong>Pre-built dynamic and aesthetic templates:</strong>
            Design templates for different sections such as Home, About, Services, Contact, etc. Each section is designed to be responsive and look good regardless of the amount of content.
          </li>
          <li>
            <strong>Content management:</strong>
            Allow users to add, edit and delete content for each section.
          </li>
          <li>
            <strong>Email integration:</strong>
            Integrate EmailJS to allow users to create working contact forms.
          </li>
          <li>
            <strong>Payment integration:</strong>
            Integrate Stripe API to manage user subscription and payment.
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
