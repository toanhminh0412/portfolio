<div class="max-w-[500px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1500px] mx-auto bg-base-100 px-4 md:px-12 lg:px-16 py-16 prose">
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
  <p>This are all SaaS products that I've built with a purpose of solving real-world problems that I've encountered. Two of them have failed but they sure taught me a lot.</p>
  <!-- name of each tab group should be unique -->
  <div class="tabs tabs-lift">
    <label class="tab">
      <input type="radio" name="project-tab" />
      Analyzing Machine (Latest)
    </label>
    <div class="tab-content bg-base-100 border-base-300 p-6">
      <div class="flex flex-row gap-2">
        <div class="badge badge-primary">Start: Mar 2025</div>
        <div class="badge badge-primary">End: Ongoing</div>
        <div class="badge badge-warning">Latest</div>
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
      <input type="radio" name="project-tab" checked/>
      <img src="/img/easierform.png" alt="EasierForm" class="w-8 h-8 not-prose">
      EasierForm
    </label>
    <div class="tab-content bg-base-100 border-base-300 p-6">
      <div class="flex flex-row gap-2">
        <div class="badge badge-primary">Start: May 2024</div>
        <div class="badge badge-primary">End: Dec 2024</div>
      </div>
      <h3 class="mb-8">EasierForm - A fully-customizable drag-and-drop form builder</h3>
      <div class="flex flex-row gap-2">
        <a href="https://easierform.com" target="_blank" class="btn bg-purple-700 hover:bg-purple-900 duration-300 text-white btn-sm">
          <i class="fa-solid fa-globe"></i>
          Live demo
        </a>
        <a href="https://github.com/toanhminh0412/easier-form" target="_blank" class="btn bg-blue-700 hover:bg-blue-900 duration-300 text-white btn-sm">
          <i class="fa-brands fa-github"></i>
          GitHub
        </a>
      </div>
      <p><strong>Problem:</strong> Most forms built with Google Forms look the same due to the limited customization options. Also, Google Forms is not designed for complex forms.</p>
      <p><strong>Solution:</strong> Build a fully-customizable drag-and-drop form builder that allows users to create complex and beautiful forms with ease.</p>
      <p>
        <strong>Tech stack:</strong> Django, Next.js, MongoDB, Vercel, Stripe API, EmailJS
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
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 me-2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
      Love
    </label>
    <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
  </div>
</div>
