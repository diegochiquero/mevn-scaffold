Feature: Add a couple of new users

	As a user
	I want to add some new one users

	Scenario Outline: User enter a name and email in the form fields
		Given I am on a form page
		When I fill First name field with "<username>"
		And I fill email field with "<email>"
		And I submit the form
		Then User is created

		Examples:
			| username	| email			|
			| John Doe	| doe@mail.es	|
			| Bruce lee	| lee@mail.com |
