import './App.css';
import JobList from './components/JobList.js'

const job_list = [
	{
		"title": "job",
		"id" : 1,
		"pay" :	15,
		"term" : "Spring 2022",
		"location" : "Remote",
		"description" : "text"
	},
	{
		"title": "job",
		"id" : 1,
		"pay" :	15,
		"term" : "Spring 2022",
		"location" : "Remote",
		"description" : "text"
	}
]

function App() {

  return (
    <div className="App">
		<JobList jobs={job_list}></JobList>
    </div>
  );
}

export default App;