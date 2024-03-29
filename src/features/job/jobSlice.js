import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import customFetch from "../../utils/axios"
import { getUserFromLocalStorage } from "../../utils/localStorage"
import { logoutUser } from "../user/userSlice"
import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobsSlice"

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

export const createJob = createAsyncThunk(
  "job/createJob",
  async (job, thunkAPI) => {
    try {
      const resp = await customFetch.post("/jobs", job, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      thunkAPI.dispatch(clearValues())
      toast.success("Job Created...")
      return resp.data
    } catch (error) {
      // logout user
      if (error.response.status === 401) {
        thunkAPI.dispatch(logoutUser())
        return thunkAPI.rejectWithValue("Unauthorized! Logging Out...")
      }
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

export const deleteJob = createAsyncThunk(
  "job/deleteJob",
  async (jobId, thunkAPI) => {
    thunkAPI.dispatch(showLoading())
    try {
      const resp = await customFetch.delete(`/jobs/${jobId}`, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      thunkAPI.dispatch(getAllJobs())
      return resp.data
    } catch (error) {
      thunkAPI.dispatch(hideLoading())
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value
    },
    clearValues: () => {
      return {
        ...initialState,
        jobLocation: getUserFromLocalStorage()?.location || "",
      }
    },
  },
})

export const { handleChange, clearValues } = jobSlice.actions
export default jobSlice.reducer
