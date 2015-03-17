var work = {
  "jobs": [
    {
      "employer": "Kaseya",
      "title": "Senior Support Engineer",
      "location": "Miami",
      "dates": "2009 - Present",
      "description": "Misc"
  },
  {
    "employer": "IBM",
    "title": "Support Representative",
    "location": "Miami",
    "dates": "2007-2010",
    "description": "Misc"
  }
  ]
};

var projects = {
  "projects": [
  {
    "title": "Udacity",
    "dates": "2014",
    "description": "web dev",
    "images": "../../images/fry.jpg"
  },
  {
    "title": "Udacity",
    "dates": "2014",
    "description": "web dev",
    "images": []
  }
  ]
};

var bio = {
  "name": "Tito Esteves",
  "role": "Web Developer",
  "welcome message": "hi",
  "contacts": {
    "mobile": "954-123-4567",
    "email": "titoesteves@live.com",
    "github": "titoesteves@users.noreply.github.com",
    "location": "Miramar, FL"
  },
  "skills": ["html", "css", "javascript"],
  "bioPic": "../images/fry.jpg"
};

var education = {
  "schools": [
    {
      "name": "FIU",
      "location": "Miami",
      "degree": "BS",
      "majors": "Information Technology",
      "dates": "2008 - 2010",
      "url": "fiu.edu"
    },
    {
      "name": "BCC",
      "location": "FLL",
      "degree": "AS",
      "majors": "Network",
      "dates": "2006-2008",
      "url": "bcc.edu"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front End",
      "school": "Udacity",
      "dates": "2014",
      "url": "udacity.com"
    }
  ]
};


  

bio.display = function(){
  var formattedName = HTMLheaderName.replace("%data%", "Tito Esteves");
  var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile); 
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var combined = formattedMobile + formattedEmail + formattedGithub + formattedLocation;
  $("#topContacts").append(combined);
  $("#footerContacts").append(combined);


if(bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
}

};

work.display = function(){
  for (job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedDate =  HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDate + formattedLoc + formattedDesc;
    $(".work-entry:last").append(formattedEmployerTitle);
  }
};

projects.display = function(){
  
  for(project in projects.projects){
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDesc);
    
    if(projects.projects[project].length > 0){
      for (image in projects.projects[project].images){
        var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry").append(formattedImages);
      }
    }
  }

  education.display = function(){
    for(school in education.schools){
      $("#education").append(HTMLschoolStart);
      var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
      $(".education-entry:last").append(formattedName);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      $(".education-entry:last").append(formattedDegree);
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      $(".education-entry:last").append(formattedDates);
      var formattedLoc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      $(".education-entry:last").append(formattedLoc);
      var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
      $(".education-entry:last").append(formattedMajors);
    }
  };


};
  
  bio.display();
  projects.display();
  work.display();
  education.display();
  $("#mapDiv").append(googleMap);


