import css from './LoginForm.module.css';

export const LoginForm = ({ login }) => {
  
  const handleSubmit = e => {
    const form = e.currentTarget;

    const { email, password } = e.target.elements;
    login({ email: email.value, password: password.value });
    e.preventDefault();
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input type="email" name="email" className={css.input}/>
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" className={css.input}/>
      </label>
      <button type="submit" className={css.button}>Log In</button>
    </form>
  );
};
