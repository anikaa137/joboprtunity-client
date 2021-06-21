import React, { useContext, useState } from 'react'
import "./AddPost.css"
import { useForm } from "react-hook-form";
import axios from 'axios';
import { UserContext } from '../../../App';
import Sidebar from "../../LogInComponent/ShareComponent/Sidebar/Sidebar"

const Addpost = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit,formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = (data, e) => {
        console.log(data);
        const newData = { ...loggedInUser };
        newData.jobInfo = data;
        newData.status = "pending";
        setLoggedInUser(newData);

        const url = `http://localhost:5000/addJob`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(loggedInUser),
        }).then((res) => res.json())
            .then((res) => {
                if (res) {
                    alert('Service added succefully')
                    e.target.reset()
            }
        })
     };

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "d371491237d968517d992b8f6982be6a");
        imageData.append("image", event.target.files[0]);

        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                console.log(response);
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className="add-service-area">
            <div className="row m-0">
                <div className="col-md-3 p-0 m-0">
                   <Sidebar/>
                </div>
                <div className="col-md-9">
                    <form onSubmit={handleSubmit(onSubmit)} className="row g-2 mt-5 p-5">
                        <div class="col-6">
                            <label for="inputname" class="form-label">
                                 Employ Name
                            </label>
                            <input
                                defaultValue={loggedInUser.displayName}
                                {...register("displayName",{ required: true } )}
                                type="text"
                                class="form-control"
                                id="employName"

                            />
                            {errors.employName && <span>This field is required</span>}
                        </div>
                        <div class="col-6">
                            <label for="inputWight" class="form-label">
                             Company Name
                            </label>
                            <input

                                {...register("companyName",{ required: true })}
                                type="text"
                                class="form-control"
                                id="companeyName"
                            />
                            {errors.companyName && <span>This field is required</span>}
                        </div>
                        <div class="col-6 mt-3">
                            <label for="inputWight" class="form-label">
                              Title
                            </label>
                            <input

                                {...register("title",{ required: true })}
                                type="text"
                                class="form-control"
                                id="Title"
                            />
                            {errors.title && <span>This field is required</span>}
                        </div>
                        <div class="col-6 mt-3">
                            <label for="inputWight" class="form-label">
                             Location
                            </label>
                            <input

                                {...register("location",{ required: true })}
                                type="text"
                                class="form-control"
                                id="Location"
                            />
                            {errors.location && <span>This field is required</span>}
                        </div>

                        <div class="col-6 mt-3">
                            <label for="inputWight" class="form-label">
                              Type
                            </label>
                            <input

                                {...register("type",{ required: true })}
                                type="text"
                                class="form-control"
                                id="Type"
                            />
                            {errors.type && <span>This field is required</span>}
                        </div>

                        <div class="col-6 mt-3">
                            <label for="inputWight" class="form-label">
                             Skill
                            </label>
                            <input

                                {...register("Skill",{ required: true })}
                                type="text"
                                class="form-control"
                                id="Skill"
                            />
                            {errors.Skill && <span>This field is required</span>}
                        </div>
                        <div class="col-6 mt-3">
                            <label for="inputPhoto" class="form-label">
                                Add Photo
                            </label>
                            <input
                                type="file"
                                class="form-control"
                                onChange={handleImageUpload}
                                id="Photo"
                            />
                        </div>
                        <div class="col-6 mt-3">
                            <label for="inputWight" class="form-label">
                                 Job Detailes
                            </label>
                            <textarea

                                {...register("jobDetailes",{ required: true })}
                                type="text"
                                class="form-control"
                                id="jobDetailes"
                            />
                        {errors.jobDetailes && <span>This field is required</span>}
                        </div>

                        <input type="submit" class="col-2" />

                    </form>


                </div>
            </div>
        </div>
    );
};

export default Addpost;