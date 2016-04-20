function UserProfile() {
	return {
		transclude: {
			name: 'h4',
			position: 'h6',
			description: 'p'
		},
		template: [
			'<div>',
				'<h3>User Profile</h3>',
				'<h4>Name: <div ng-transclude="name"></div></h4>',
				'<h6>Position: <div ng-transclude="position"></div></h4>',
				'<p>Description: <div ng-transclude="description"></div></h4>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);