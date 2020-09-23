import Validator from "is_js";
import { isEmpty } from "lodash";

function validateInput(data, type) {
    let errors = {};
    var mobileRegx = /^[0-9]*$/;
    var regex = /^[A-Za-z ]*$/;

    if (type === "0") {

        if (Validator.empty(data.first_name)) {
            errors.first_name = "First name is required";
        }


        if (!Validator.empty(data.first_name) && (data.first_name.length < 3 || data.first_name.length > 31)) {
            errors.first_name = "Please enter a valid First name"
        }

        if (!Validator.empty(data.first_name)) {
            if (!(regex.test(data.first_name))) {
                errors.first_name = "Please enter a valid First name"
            }
        }

        if (Validator.empty(data.last_name)) {
            errors.last_name = "Last name is required";
        }


        if (!Validator.empty(data.last_name) && (data.last_name.length < 3 || data.last_name.length > 31)) {
            errors.last_name = "Please enter a valid Last name"
        }

        if (!Validator.empty(data.last_name)) {
            if (!(regex.test(data.last_name))) {
                errors.last_name = "Please enter a valid Last name"
            }
        }

        if (Validator.empty(data.email)) {
            errors.email = "Email is required";
        }

        if (!Validator.empty(data.email) && !Validator.email(data.email)) {
            errors.email = "Invalid email";
        }

        if (Validator.empty(data.phone)) {
            errors.phone = "Phone number is required";
        }

        if (!Validator.empty(data.phone) && !mobileRegx.test(data.phone)) {
            errors.phone = "Enter a valid Phone number";
        }

        if (!Validator.empty(data.phone) && (data.phone.length !== 10)) {
            errors.phone = "Enter a valid Phone number";
        }

        if (Validator.empty(data.salary)) {
            errors.salary = "Salary is required";
        }

        if (!Validator.empty(data.salary) && !mobileRegx.test(data.salary)) {
            errors.salary = "Enter a valid Salary";
        }

        if (!Validator.empty(data.salary) && (data.salary.length > 10)) {
            errors.salary = "Enter a valid Salary";
        }

    }


    if (type === "1") {
        if (Validator.empty(data.image)) {
            errors.image = "Image is required";
        }
    }


    if (type === "2") {
        if (!data.password) {
            if (Validator.empty(data.password)) {
                errors.password = "Password is required";
            }
        }

        if (
            !Validator.empty(data.password) &&
            data.password &&
            data.password.length < 6
        ) {
            errors.password = "Your password must be atleast 6 characters long";
        }
    }




    return {
        isValid: isEmpty(errors),
        errors
    };
}

export default validateInput;
