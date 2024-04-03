<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ankur Laroia | Portfolio</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="bg-dark py-3">
        <div class="container">
            <nav class="navbar navbar-dark navbar-expand-lg">
                <a class="navbar-brand" href="#">Ankur Laroia</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><a class="nav-link" href="#hi">Hi</a></li>
                        <li class="nav-item"><a class="nav-link" href="resume.html">Resume</a></li>
                        <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
                        <li class="nav-item"><a class="nav-link" href="#github">GitHub</a></li>
                        <li class="nav-item"><a class="nav-link" href="#linkedin">LinkedIn</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>

    <main>
        <section id="hi" class="py-5">
            <div class="container">
                <h2>Hi!</h2>
                <p>Welcome to my portfolio website. Feel free to explore!</p>
            </div>
        </section>

        <section id="resume" class="py-5">
            <div class="container">
                <h2>Resume</h2>
                <div class="row">
                    <div class="col-md-6">
                        <h3>Ankur Laroia</h3>
                        <ul>
                            <li><strong>Phone:</strong> +1-945-244-7727</li>
                            <li><strong>Email:</strong> ankurlaroia28@gmail.com</li>
                            <li><strong>Location:</strong> Plano, Texas, 75075</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <h3>Education</h3>
                        <ul>
                            <li>
                                <h4>Master of Science, Business Analytics Data Science Cohort</h4>
                                <p><strong>The University of Texas at Dallas</strong>, May. 2024</p>
                            </li>
                            <li>
                                <h4>Bachelor of Technology, Computer Science Engineering</h4>
                                <p><strong>SRM Institute of Science and Technology, Chennai, India</strong>, May. 2021</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <h3>Certification</h3>
                        <ul>
                            <li><strong>AWS Cloud Practitioner Certification</strong>, Dec. 2023</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <h3>Skills</h3>
                        <ul>
                            <li>Effective communication, customer service, and decision-making with an analytical approach.</li>
                            <li>Self-motivated team player with extensive experience in content creation.</li>
                            <li>Social media marketing, and design leadership.</li>
                            <li>Programming languages: R, Python, SQL.</li>
                            <li>Machine learning libraries and frameworks: TensorFlow, scikit-learn, Pandas, Numpy, Matplotlib.</li>
                        </ul>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <h3>Projects</h3>
                        <h4>Credit Risk Modeling</h4>
                        <p>Developed and deployed a sophisticated machine learning model using TensorFlow, achieving a 96.1% accuracy rate in predicting customer churn.</p>
                    </div>
                    <div class="col-md-6">
                        <h3>Professional Experience</h3>
                        <h4>Data Science Intern</h4>
                        <p><strong>Wolters Kluwer, Houston, Texas</strong>, Jun. 2023 - Aug. 2023</p>
                        <p>Demonstrated expertise in designing predictive models and implementing AI solutions to address governance, risk, and compliance challenges within dynamic markets during an internship tenure.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="github" class="bg-light py-5">
            <div class="container">
                <h2>Github</h2>
                <p>Add your GitHub link here:</p>
                <p><a href="https://github.com/ankurlaroia">https://github.com/ankurlaroia</a></p>
            </div>
        </section>

        <section id="linkedin" class="bg-light py-5">
            <div class="container">
                <h2>LinkedIn</h2>
                <p>Add your LinkedIn link here:</p>
                <p><a href="https://www.linkedin.com/in/ankurlaroia1/">https://www.linkedin.com/in/ankurlaroia1/</a></p>
            </div>
        </section>

        <div id="chat-widget" class="chat-widget">
            <div class="chat-form">
                <form id="message-form" action="/send-email" method="post">
                    <input type="text" id="name-input" name="name" placeholder="Your Name" class="form-control mb-2">
                    <input type="email" id="email-input" name="email" placeholder="Your Email Address" required class="form-control mb-2">
                    <textarea id="message-input" name="message" placeholder="Type your message..." required class="form-control mb-2"></textarea>
                    <input type="submit" value="Send" class="btn btn-primary">
                </form>
                <button id="minimize-button" class="minimize-button btn btn-secondary">minimize</button>
            </div>
        </div>
        <!-- Minimized chat button -->
        <div id="minimized-chat-button" class="minimize-button minimized">Chat</div>
    </main>

    <footer class="bg-dark py-3 text-white">
        <div class="container text-center">
            <p>&copy; 2024 Ankur Laroia</p>
        </div>
    </footer>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
