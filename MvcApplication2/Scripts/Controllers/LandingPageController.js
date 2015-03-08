var LandingPageController = function ($scope) {
    $scope.models = {
        helloAngular: 'I work!'
    }
    $scope.payment =[       { "id": 0, "name": "Card Type" },
       { "id": 1, "name": "Card Number" },
       { "id": 2, "name": "Expiration Date" },
       { "id": 3, "name": "Security Code" }

    ];

    $scope.person = {
    title: 'Title',
    fname: 'First Name',
    lname: 'Last Name', 
    email: 'yourusername@yourdomain.com',
    tp: '07111111111', 
    city: 'City',
    postcode: 'Post Code'}



$scope.setPerson = function (person) {

    $scope.person = person;
}

$scope.getPerson = function () {
    return ($scope.person);
}
$scope.setTitle = function (value) {

    value ='';
}
    $scope.car=[
{ "id": 0, "name": "Registration No" },
{ "id": 1, "name": "Make" },
{ "id": 2, "name": "Model" },
{ "id": 3, "name": "Color" }       
    ];
    
}

// The $inject property of every controller (and pretty much every other type of object in Angular) needs to be a string array equal to the controllers arguments, only as strings
LandingPageController.$inject = ['$scope'];