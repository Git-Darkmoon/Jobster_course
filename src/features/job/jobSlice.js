import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import customFetch from "../../utils/axios"
import { getUserFromLocalStorage } from "../../utils/localStorage"
import { logoutUser } from "../user/userSlice"
import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobsSlice"
import { createJobThunk, deleteJobThunk, editJobThunk } from "./jobThunk"

const initialState = {
  company: "",
  editJobId: "",
  isEditing: false,
  isLoading: false,
  jobLocation: "",
  jobType: "full-time",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  position: "",
  status: "pending",
  statusOptions: ["interview", "declined", "pending"],
}

export const createJob = createAsyncThunk("job/createJob", createJobThunk)

export const deleteJob = createAsyncThunk("job/deleteJob", deleteJobThunk)

export const editJob = createAsyncThunk("job/editJob", editJobThunk)

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value
    },
    setEditJob: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload }
    },
    clearValues: () => {
      return {
        ...initialState,
        jobLocation: getUserFromLocalStorage()?.location || "",
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // create job reducers
      .addCase(createJob.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createJob.fulfilled, (state) => {
        state.isLoading = false
        toast.success("Job Created...")
      })
      .addCase(createJob.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
      // delete job reducers
      .addCase(deleteJob.fulfilled, (state) => {
        toast.success("Job Deleted...")
      })
      .addCase(deleteJob.rejected, (state, { payload }) => {
        toast.error(payload)
      })
      // edit job reducers
      .addCase(editJob.pending, (state) => {
        state.isLoading = true
      })
      .addCase(editJob.fulfilled, (state) => {
        state.isLoading = false
        toast.success("Job Modified...")
      })
      .addCase(editJob.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
  },
})

export const { handleChange, clearValues, setEditJob } = jobSlice.actions
export default jobSlice.reducer
