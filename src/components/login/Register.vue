<template>
<div class="register">
	<div class="jumbotron">
		<h2>{{msg}}</h2>
		<div class="form-container">
			<hr>
			<form>
				<div class="form-group">
					<label for="exampleInputEmail1">Email address</label>
					<input type="email"
					       class="form-control"
					       id="exampleInputEmail1"
					       aria-describedby="emailHelp"
					       placeholder="Enter email"
					       v-model="form_details.email">
					<small id="emailHelp"
					       class="form-text text-muted">We'll never share your email with anyone else.</small>
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">Password</label>
					<input type="password"
					       class="form-control"
					       id="exampleInputPassword1"
					       placeholder="Password"
					       v-model="form_details.password">
				</div>
				<div class="form-group form-check">
					<input type="checkbox"
					       class="form-check-input"
					       id="exampleCheck1">
					<label class="form-check-label"
					       for="exampleCheck1">Check me out</label>
				</div>
				<button type="submit"
				        class="btn btn-primary"
				        @click="register">Submit</button>
			</form>
		</div>
	</div>

</div>
</template>

<script>
import Authentication from '@/services/Authentication'

export default {
	data() {
		return {
			msg: 'register component',
			form_details: {
				email: '',
				password: ''
			}
		}
	},
	methods: {
		async register() {
			console.log('register user');
			let details = {};

			details['email'] = this.form_details.email;
			details['password'] = this.form_details.password;
			details['age'] = 26;

			// send axios request to backend
			// const response = await Authentication.register({
			// 	email: this.form_details.email,
			// 	password: this.form_details.password
			// });

			const response = await Authentication.register(details);

			console.log('request response');
			console.log(response.data);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
.form-container{
    width: 50%;
    margin: auto;
}
</style>
