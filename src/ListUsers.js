import React, { Component } from 'react';


// profiles = array 
// users & movies = object 

class ListUsers extends Component {
	render() {
      const allProps = this.props;

      return (
      	<ul>
        {allProps.profiles.map(profile => {
            const userName = allProps.users[profile.userID].name;
            const favoriteMovie = allProps.movies[profile.favoriteMovieID].name;

            return (
                <li key={profile.id}>
                    <p>{userName}'s favorite movie is {favoriteMovie}</p>
                </li>
            );
        })}
    	</ul>
	  );
	}
}

export default ListUsers;
