Let's create a curriculum registration form based on the following specification:

1. Create a <fieldset> for the following personal data:
* Name - Text
  * 40 character limit
  * Required field
* Email - Text
  * 50 character limit
  * Required field
* CPF - Text
  * 11 character limit
  * Required field
* Address - Text
  * 200 character limit
  * Required field
* City - Text
  * 28 character limit
  * Required field
* Status - ComboBox
  * All States of Brazil
  * Use repetition structures via JavaScript to generate the <option>
  * Required field
* Type - Radio Button
  * House, Apartment
  * Required field

2. Create another <fieldset> for data from your last job

* Resume Summary - TextArea
  * 1000 character limit
  * Required field
* Title - Text
  * 40 character limit
  * Required field
* Job description - Text
  * 500 character limit
  * Required field
* Start date - Text
  * Check the date format mm / dd / yyyy.
  * The day must be> 0 and <= 31.
  * The month must be> 0 and <= 12.
  * The year cannot be negative.
  * If any of the conditions is invalid when sending the form, display a contextualized error message.
  * Required field

3. Right below the form, create a button that:

* Call a JavaScript function and stop the automatic flow of the form using preventDefault ().
* Perform the validations that were requested during the form assembly.
* Set up a <div> with the consolidated data that was inserted in the form.

4. Create a Clear button that clears all fields on the form and the <div> with your resume as well.