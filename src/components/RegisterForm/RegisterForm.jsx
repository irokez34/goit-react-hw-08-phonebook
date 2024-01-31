import css from './RegisterForm.module.css'
export const RegisterForm = ({ register }) => {
  const handleSubmit = e => {
    const { name, email, password } = e.target.elements;
    register({
      name: name.value,
      email: email.value,
      password: password.value,
    });
    e.preventDefault();
    
  };
  return (
    <form
      className={css.form}
      onSubmit={handleSubmit}
      autoComplete="off"
      id="form"
    >
      <label className={css.label}>
        Name
        <input type="text" name="name" className={css.input}/>
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" className={css.input}/>
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" className={css.input}/>
      </label>
      <button type="submit" className={css.button}>Sign up</button>
    </form>
  );
};
