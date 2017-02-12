import { Movies } from '../collections/movies.js';

Meteor.methods({
  parseUpload( data ) {
    check( data, Array );

    for ( let i = 0; i < data.length; i++ ) {
      let item = data[i],
          exists = Movies.findOne({ movieId: item.Id });

      if ( !exists ) {
        Movies.insert( item );
        console.log(`Movie: ${item.Title} imported successfully`);
      } else {
        console.warn( 'Rejected: item already exists.' );
      }
    }
  }
});
