import { createSelector } from '@reduxjs/toolkit';

//---------------------Contacts-Selectors-------------------------//
export const selectContacts = state => state.contacts.phoneBook.items;

//--------------------Root-Selectors---------------------------//
export const selectError = state => state.root.error;
export const selectIsLoading = state => state.root.isLoading;

//------------------ Filter-Selectors----------------------//
export const selectFilter = state => state.filter.filter;
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (items, filter) =>
    items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    )
);

// ------------------User-Selectors--------------------//
export const selectIsAuth = state => state.user.token;
export const selectUser = state => state.user.profile;
export const selectIsLoggedIn = state => state.user.isLoggedIn;
export const selectIsRefreshing = state => state.user.isRefreshing;
