import React from 'react'
import ReactDOM from 'react-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import '../../assets/scss/pages/profile.scss'
enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other',
}

interface IFormInput {
  fullName: String
  email: String
  password: String
  city: String

  gender: GenderEnum
}

export default function Profile() {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="profile">
      <div className="profile_bg">
        <div className="profile_bg__left">
          <img
            className="profile__avatar"
            src="https://media.istockphoto.com/photos/happy-smiling-africanamerican-child-girl-yellow-background-picture-id1168369629?k=20&m=1168369629&s=612x612&w=0&h=cOqiMS2ibSZPXOTy6OkRZrGJRUNmIKkv89iVO4TjW3M="
          ></img>
          <h2>Account Admin </h2>
        </div>
        <div className="profile_bg__right">
          <a className="profile_bg__right__link">
            <i className="fab fa-facebook-square link__facebook"></i>
          </a>
          <a className="profile_bg__right__link link__linkedin">
            <i className="fab fa-linkedin"></i>
          </a>
          <a className="profile_bg__right__link link__github">
            <i className="fab fa-github-square"></i>
          </a>
        </div>
      </div>
      <div className="form_profile">
        <div className="form_profile__left">
          <label>Full Name</label>
          <input {...register('fullName')} />
          <label>Email </label>
          <input {...register('email')} />
          <label>Password</label>
          <input {...register('password')} />
        </div>

        <div className="form_profile__right">
          <label>City</label>
          <input {...register('city')} />
          <label>Gender Selection</label>
          <select {...register('gender')}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          <input type="submit" />
        </div>
      </div>
    </form>
  )
}
