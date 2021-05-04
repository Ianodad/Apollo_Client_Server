import React from "react";

import { gql, useQuery, useMutation, useApolloClient} from "@apollo/client";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Toolbar from "../components/Toolbar";

const GET_SPEAKERS = gql`
  query {
    speakers {
      datalist {
        id
        first
        last
        favorite
      }
    }
  }
`;
const ADD_SPEAKERS = gql`
  mutation AddSpeaker($first: String, $last: String, $favorite: Boolean) {
    addSpeaker(speaker: { first: $first, last: $last, favorite: $favorite }) {
      id
      first
      last
      favorite
    }
  }
`;

const TOGGLE_SPEAKER_FAVORITE = gql`
  mutation ToggleSpeakerFavorite($speakerId: Int!) {
    toggleSpeakerFavorite(speakerId: $speakerId) {
      id
      first
      last
      favorite
    }
  }
`;

const DELETE_SPEAKER = gql`
  mutation DeleteSpeaker($speakerId: Int!) {
    deleteSpeaker(speakerId: $speakerId) {
      id
      first
      last
      favorite
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
const index = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const { loading, error, data } = useQuery(GET_SPEAKERS);
  const [toggleSpeakerFavorite] = useMutation(TOGGLE_SPEAKER_FAVORITE);
  const [deleteSpeaker] = useMutation(DELETE_SPEAKER);
  const [addSpeaker] = useMutation(ADD_SPEAKERS);
  const apolloClient = useApolloClient();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (loading === true) return <div className="col-sm6">Loading...</div>;
  if (error === true) return <div className="col-sm6">Error</div>;
  return (
    <div className="container">
      <Toolbar
        sortByIdDescending={() => {
          const { speakers } = apolloClient.cache.readQuery({
            query: GET_SPEAKERS,
          });
          apolloClient.cache.writeQuery({
            query: GET_SPEAKERS,
            data: {
              speakers: {
                __typename: "SpeakerResults",
                datalist: [...speakers.datalist].sort((a, b) => b.id - a.id),
              },
            },
          });
        }}
        insertSpeakerEvent={(first, last, favorite) => {
          addSpeaker({
            variables: {
              first,
              last,
              favorite,
            },
            //refetchQueries: [{query: GET_SPEAKERS}],
            update: (cache, { data: { addSpeaker } }) => {
              const { speakers } = cache.readQuery({
                query: GET_SPEAKERS,
              });
              cache.writeQuery({
                query: GET_SPEAKERS,
                data: {
                  speakers: {
                    __typename: "SpeakerResults",
                    datalist: [addSpeaker, ...speakers.datalist],
                  },
                },
              });
            },
          });
        }}
      />
      <div className="grid grid-rows-3 grid-flow-col gap-2">
        {data.speakers.datalist.map(({ id, first, last, favorite }, i) => {
          return (
            <Card className={classes.root} key={id}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {`${first.charAt(0)}`}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={`${first} ${last}`}
                subheader="September 14, 2016"
              />
              <CardMedia
                className={classes.media}
                image={`https://source.unsplash.com/random/400x400?sig=${i}`}
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  aria-label="add to favorites"
                  onClick={() => {
                    toggleSpeakerFavorite({
                      variables: {
                        speakerId: parseInt(id),
                      },
                      optimisticResponse: {
                        __typename: "Mutation",
                        toggleSpeakerFavorite: {
                          id,
                          first,
                          last,
                          favorite: !favorite,
                          __typename: "Speaker",
                        },
                      },
                    });
                  }}
                >
                  <FavoriteIcon
                    color={favorite === true ? "secondary" : "disable"}
                  />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  onClick={() => {
                    deleteSpeaker({
                      variables: {
                        speakerId: parseInt(id),
                      },
                      optimisticResponse: {
                        typename: "__mutation",
                        deleteSpeaker: {
                          id,
                          first,
                          last,
                          favorite,
                          __typename: "Speaker",
                        },
                      },
                      //refetchQueries: [{ query: GET_SPEAKERS }],
                      update: (cache, { data: { deleteSpeaker } }) => {
                        const { speakers } = cache.readQuery({
                          query: GET_SPEAKERS,
                        });
                        cache.writeQuery({
                          query: GET_SPEAKERS,
                          data: {
                            speakers: {
                              __typename: "SpeakerResults",
                              datalist: speakers.datalist.filter(
                                (rec) => rec.id != deleteSpeaker.id
                              ),
                            },
                          },
                        });
                      },
                    });
                  }}
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add
                    saffron and set aside for 10 minutes.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep
                    skillet over medium-high heat. Add chicken, shrimp and
                    chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate
                    and set aside, leaving chicken and chorizo in the pan. Add
                    pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and
                    fragrant, about 10 minutes. Add saffron broth and remaining
                    4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with
                    artichokes and peppers, and cook without stirring, until
                    most of the liquid is absorbed, 15 to 18 minutes. Reduce
                    heat to medium-low, add reserved shrimp and mussels, tucking
                    them down into the rice, and cook again without stirring,
                    until mussels have opened and rice is just tender, 5 to 7
                    minutes more. (Discard any mussels that don’t open.)
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and
                    then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default index;
