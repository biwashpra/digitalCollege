import * as Yup from "yup";

export const regSchema = Yup.object({
  fname: Yup.string().min(3).required("Please Enter Your FirstName"),
  // mname: Yup.string("Please Enter Your MiddleName"),
  lname: Yup.string().min(3).required("Please Enter Your LastName"),
  dob: Yup.date()
    .max(9999, "Year must be 4 digits")
    .required("Enter Valid Birth Date"),
  gender: Yup.string().required("Select valid gender"),
  mobileNumber: Yup.number()
    .typeError("That doesnot look like a number")
    .integer()
    .positive("Number must be positive")
    .min(1111111111, "Not a number")
    .max(9999999999, "Number must be 10 digits")
    .required("Please Enter Valid MobileNumber"),
  address: Yup.string().required("Enter your address"),
  email: Yup.string().email().required("Please Enter Valid Email"),
  password: Yup.string()
    .min(6, "Password must be 6 character long!")
    .required("Please enter your password"),
  //For confirm_Pass: Yup.string().oneOf([Yup.ref('password), null,] "warning")
  cpassword: Yup.string()
    .required("Re-type Password!")
    .oneOf([Yup.ref("password"), null], "Password must match!"),
  fatherName: Yup.string().required("Please Enter Your FatherName"),
  motherName: Yup.string().required("Please Enter Your MotherName"),
  guardianNumber: Yup.number()
    .typeError("That doesnot look like a number")
    .integer()
    .positive("Number must be positive")
    .min(1111111111, "Not a number")
    .max(9999999999, "Number must be 10 digits")
    .required("Please Enter Valid GuardianNumber"),
  passedYear1: Yup.number()
    .max(9999, "Year must be 4 digits")
    .min(1111, "Not an year")
    .required("Please Enter Passed Year")
    .positive(),
  marks1: Yup.string().required("Please Enter Your Marks"),
  passedYear2: Yup.number()
    .max(9999, "Year must be 4 digits")
    .min(1111, "Not an year")
    .required("Please Enter Passed Year")
    .positive(),
  marks2: Yup.string().required("Please Enter Your Marks"),
});
