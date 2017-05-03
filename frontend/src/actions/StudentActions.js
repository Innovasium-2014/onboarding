import $ from 'jquery';
import { ADD_STUDENT, REMOVE_STUDENT, GET_FEED } from '../constants/ActionTypes'


export function addStudent(name){
	return dispatch => 
	$.post('http://localhost:3000/add_student', { name }).then(response => {
		dispatch({ type: ADD_STUDENT, newStudent: response.data });
	});


}
export function removeStudent(name){
	return dispatch => 
	$.ajax({
		url: 'http:/localhost:3000/remove_student',
		method: 'DELETE',
		data: { id },
		success: (response) => dispatch({type: REMOVE_STUDENT, studentId: id })
	});

}
export function getFeed(url){
	return dispatch => 
	$.post(url).then(response => {
		dispatch({ type: GET_FEED, feed: response.data });
	});


}