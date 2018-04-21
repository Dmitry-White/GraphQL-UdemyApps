import gql from 'graphql-tag';

export default gql`
    mutation AddLyricToSong($content: String, $songId: ID){
        addLyricToSong(content: $content, songId: $sondId) {
            id
            lyrics {
                content
            }
        }
    }
`;