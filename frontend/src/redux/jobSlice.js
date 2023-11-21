import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  specialtyJobs: JSON.parse(localStorage.getItem("jobs")) || [],
  specialty: localStorage.getItem("specialty") || "",
  specialtyBackground: localStorage.getItem("bg") || "",
  selectJob: JSON.parse(localStorage.getItem("job")) || {},
  search: [],
  searchSpecialty: [],
};
export const jobSlice = createSlice({
  name: "medical",
  initialState,
  reducers: {
    getJobs: (state, action) => {
      state.jobs = action.payload;
    },
    getJob: (state, action) => {
      const { id } = action.payload;
      state.selectJob = state.jobs.find((job) => job.id === id);
      localStorage.setItem("job", JSON.stringify(state.selectJob));
    },
    searchJob: (state, action) => {
      const searchedJob = action.payload.toLowerCase();
      const foundJobs = state.jobs.filter((job) => {
        return (
          job.title.toLowerCase().includes(searchedJob) ||
          job.specialty.toLowerCase().includes(searchedJob)
        );
      });

      state.search = foundJobs;
    },
    searchJobBySpecialty: (state, action) => {
      const searchedJob = action.payload.toLowerCase();
      const foundJobs = state.specialtyJobs.filter((job) => {
        return (
          job.title.toLowerCase().includes(searchedJob) ||
          job.specialty.toLowerCase().includes(searchedJob)
        );
      });

      state.searchSpecialty = foundJobs;
    },
    getSpecialty: (state, action) => {
      state.specialty = action.payload.title;
      state.specialtyBackground = action.payload.url;
      state.specialtyJobs = state.jobs.filter((job) => {
        return job.specialty === action.payload.title;
      });
      localStorage.setItem("jobs", JSON.stringify(state.specialtyJobs));
      localStorage.setItem("specialty", state.specialty);
      localStorage.setItem("bg", state.specialtyBackground);
    },
  },
});

export default jobSlice.reducer;
export const {
  getJobs,
  getJob,
  searchJob,
  getSpecialty,
  searchJobBySpecialty,
} = jobSlice.actions;
