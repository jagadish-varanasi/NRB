import * as yup from "yup";

export const schema = yup
  .object({
    email: yup.string().email().required("Email is required"),
    name: yup
      .string()
      .required("Name is required")
      .min(5, "Name must be atleast 5 characters")
      .max(15, "Name can contain atmost 15 characters"),
    image: yup
      .mixed()
      .test("required", "You need to provide a image file", (value) => {
        return value && value.length;
      })
      .test("fileSize", "The image is too large", (value, context) => {
        return value && value[0] && value[0].size <= 400000;
      })
      .test("type", "We only support jpeg", function (value) {
        return value && value[0] && value[0].type === "image/jpeg";
      }),
  })
  .required();
