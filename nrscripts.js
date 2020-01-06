//Single Page Navigation Part
var pages = ['page1', 'page2'];
var currentPageIndex = 0;
var showNextPage = function(){
  document.getElementById(pages[currentPageIndex]).classList.add('hidden');
  currentPageIndex = (currentPageIndex + 1) % pages.length;
  document.getElementById(pages[currentPageIndex]).classList.remove('hidden');
}



document.getElementById(my-signin2).addEventListener('click', showNextPage);


// [START authstatelistener]

/*firebase.auth().onAuthStateChanged(function (googleUser) {
    if (googleUser) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // [START_EXCLUDE]

        document.getElementById('my-signin2').textContent = 'Signed in';
        // [END_EXCLUDE]
            
        $("#my-signin2").addClass("hidden");
        $("#page1").addClass("hidden");
        $("#page2").removeClass("hidden"); //launch homepage;
           
        history.pushState({
        page: "page2"
            },"page2", null);
        } else {
            // User is signed out.
            // [START_EXCLUDE]
            //document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
            
            document.getElementById('my-signin2').textContent = 'Sign in with Google';
            //document.getElementById('quickstart-account-details').textContent = 'null';
            //document.getElementById('quickstart-oauthtoken').textContent = 'null';
            $('#createacct').addClass("hidden");
            $("#createPost").addClass("hidden");
            $("#page2").addClass("hidden");
            $("#page1").removeClass("hidden");
            history.pushState({
                page: "page1"
            },"page1", null);
            // [END_EXCLUDE]
        }
        // [START_EXCLUDE]
        document.getElementById('my-signin2').disabled = false;
        // [END_EXCLUDE]
    });
    // [END authstatelistener]

    document.getElementById('my-signin2').addEventListener('click', my-signin2, false);
}

window.onload = function () {
    initApp();
};*/
 
