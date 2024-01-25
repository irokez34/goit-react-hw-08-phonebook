

// export const LogInApi = async body => {
//   const { data } = await axios.post('/users/login', body);
//   return data;
// };
// export const SignUpApi = async body => {
//   const { data } = await axios.post('/users/signup', body, {
//     headers: { 'Content-Type': 'application/json' },
//   });
//   return data;
// };

// export const LogOutApi = async token => {
//   const { data } = await axios.post(
//     '/users/logout',
//     {},
//     { headers: { Authorization: `Bearer ${token}` } }
//   );
//   return data;
// };

// export const isUserApi = async token => {
//   const { data } = await axios.get(`/users/current`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   console.log(data);
//   return data;
// };
// export const createUser = createAsyncThunk(
//   'auth/register',
//   async (newObj, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post(
//         '/users/signup',
//         JSON.stringify(newObj),
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       setAuthHeader(data.token);
//       return data;
//     } catch (error) {
//       rejectWithValue(error.message);
//     }
//   }
// );