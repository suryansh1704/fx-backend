<h1> NEST JS JWT AUTH</h1>

<br/>
<h3>Overview of the project</h3>
<img src='/readme_assets/auth-flow-high-abstraction.png' alt='Authentication FLow'/>

<br/>
<h3>JWT MECHANISM</h3>
<img src='/readme_assets/jwt-mechanism.png' alt='jwt mechanism'/>


<br/>
<h3>Login Flow</h3>
<p>Part1: For User validation and generation of access token</p>
<img src='/readme_assets/login-working.png' alt='Login Endpoint Flow'/>

<br/>
<h3>Auth me Flow (client: allow me )</h3>
<p>Part2: Validating the user for the request made by session token in auth guard<br/>#access control</p>
<img src='/readme_assets/authme-access-control.png' alt='Client Request Guard Endpoint Flow'/>

<br/>
<h3>Project Sturcture</h3>
<img src='/readme_assets/auth-arc.png' alt='Project Structure'/>

<p>
  TODO: 
  Database connections ( realife - async)
  Hashing for password
  Exception Handling
  May be cookie related stuff
</p>
