import React, { useState } from "react";
// import {
//   Form,
//   FormGroup,
//   Input,
//   Label,
//   Modal,
//   ModalBody,
//   ModalFooter,
//   ModalHeader,
// } from 'reactstrap';
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";

import { useApolloClient, useMutation } from "@apollo/client";
import { GET_SPEAKERS } from "../graphql/queries";
import { ADD_SPEAKERS } from "../graphql/mutations";

const Toolbar = () => {
  const apolloClient = useApolloClient();
  const [modal, setModal] = useState(false);
  const [addSpeaker] = useMutation(ADD_SPEAKERS);

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [favorite, setFavorite] = useState(false);

  const sortByIdDescending = () => {
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
  };

  const insertSpeakerEvent = (first, last, favorite) => {
    addSpeaker({
      variables: {
        first,
        last,
        favorite,
      },
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
  };

  const toggle = () => {
    setModal(!modal);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(first, last, favorite);
    insertSpeakerEvent(first, last, favorite);
    setFirst("");
    setLast("");
    setFavorite(false);
    setModal(!modal);
  };

  return (
    <section className="toolbar">
      <div className="container mx-auto text-center">
        <div className="">
          <Button variant="contained" color="primary" onClick={toggle}>
            <span>Insert Speaker</span>
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={sortByIdDescending}
          >
            <span>Sort Speaker</span>
          </Button>
          <Modal open={modal} onClose={toggle} className="text-center">
            <div className="w-full max-w-xs text-center">
              <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit}
              >
                <div variant="h2" toggle="{toggle}">
                  Insert Speaker Dialog
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="First name"
                  >
                    First Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="first"
                    id="first"
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => setFirst(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="Last Name"
                  >
                    Last Name
                  </label>
                  <input
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    name="last"
                    id="last"
                    type="last"
                    placeholder="Last Name"
                    onChange={(e) => setLast(e.target.value)}
                  />
                </div>
                <div classname="md-6">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-radio"
                      name="accountType"
                      onChange={(e) => setFavorite(e.target.value === "on")}
                    />
                    <span className="ml-2">Favorite</span>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    color="primary"
                    variant="contained"
                    type="submit"
                  >
                    Submit
                  </Button>
                  <Button onClick={toggle} color="primary">
                    Disagree
                  </Button>
                </div>
              </form>
            </div>
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default Toolbar;
