/* eslint-disable @next/next/no-img-element */
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import {
  FormBox,
  IName,
  IDesc,
  IPrice,
  SCategory,
  Submit,
  CImg,
} from "../styles/AddStudent/AddStudentStyle";

interface Data {
  name: string;
  desc: string;
  price: number;
  category: string;
  img: string | ArrayBuffer | null | undefined;
  url?: string;
}
type Image = {
  event: {
    target: {
      files: {
        name: string;
      };
    };
  };
};
const Form: FC = () => {
  const [data, setData] = useState<Partial<Data>>({});

  const handleChange = (event: { target: { name: string; value: string } }) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleUploadImage = async (img: File) => {
    const storage = getStorage();
    const storageRef = ref(storage, `photos/${img?.name}_${Date.now()}`);
    await uploadBytes(storageRef, img).then((snapshot) =>
      console.log(snapshot)
    );
    const url = await getDownloadURL(storageRef);
    setData({ ...data, url });
  };

  const handleImage = (event: any) => {
    const image = event.target.files[0];
    const types = ["image/png", "image/jpeg", "image/jpg"];
    if (image && types.includes(image.type)) {
      handleUploadImage(image);
      let reader = new FileReader();
      reader.onloadend = (event) => {
        setData({
          ...data,
          img: event?.target?.result,
        });
      };
      reader.readAsDataURL(image);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  console.log(data);
  return (
    <main
      style={{
        background: "#E3E3E3",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FormBox onSubmit={handleSubmit}>
        <IName
          type="text"
          placeholder="Name"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        <IDesc
          placeholder="Description"
          name="desc"
          value={data.desc}
          onChange={handleChange}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <IPrice
              type="number"
              name="price"
              value={data.price}
              onChange={handleChange}
              placeholder="Price"
            />
            <SCategory
              name="category"
              placeholder="Category"
              onChange={handleChange}
            >
              <option value="Clothes">Clothes</option>
              <option value="Food">Food</option>
              <option value="Tecnology">Tecnology</option>
            </SCategory>
          </div>
          <CImg
            htmlFor="img"
            style={{
              background: data.url
                ? `url("${data.url}") no-repeat center/cover`
                : "#e3e3e3",
              backgroundSize: "cover",
            }}
          >
            {data.url === undefined ? (
              <svg
                width="52"
                height="52"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 4C22.6 4 28 9.4 28 16C28 22.6 22.6 28 16 28C9.4 28 4 22.6 4 16C4 9.4 9.4 4 16 4ZM16 2C8.3 2 2 8.3 2 16C2 23.7 8.3 30 16 30C23.7 30 30 23.7 30 16C30 8.3 23.7 2 16 2Z"
                  fill={data.img ? "white" : "#666666"}
                />
                <path
                  d="M24 15H17V8H15V15H8V17H15V24H17V17H24V15Z"
                  fill={data.img ? "white" : "#666666"}
                />
              </svg>
            ) : (
              <svg
                style={{
                  margin: "auto",
                  background: "rgb(241, 242, 243)",
                  display: "block",
                  shapeRendering: "auto",
                }}
                width="200px"
                height="200px"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
              >
                <circle
                  cx="50"
                  cy="50"
                  fill="none"
                  stroke="#2770f1"
                  strokeWidth="10"
                  r="35"
                  strokeDasharray="164.93361431346415 56.97787143782138"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    dur="1s"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                  ></animateTransform>
                </circle>
              </svg>
            )}
          </CImg>
        </div>
        <input
          type="file"
          name="img"
          id="img"
          style={{ display: "none" }}
          onChange={handleImage}
        />
        <Submit type="submit">Submit</Submit>
      </FormBox>
    </main>
  );
};

export default Form;
