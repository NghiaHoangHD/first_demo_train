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
      <div className="profile_bg"></div>
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
