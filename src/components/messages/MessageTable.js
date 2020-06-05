import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { Link } from "react-router-dom";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import SmsIcon from "@material-ui/icons/Sms";
import Tooltip from "@material-ui/core/Tooltip";
import PropTypes from "prop-types";
// import APIURL from '../../helpers/environment';

const useStyles = makeStyles({
  table: {
    minWidth: 50,
  },
  tableCell: {
    maxWidth: 50,
  },
});

const MessageTable = (props) => {
  const propTypes = {
    onMessageSend: PropTypes.func.isRequired,
  };
  console.log(props.messages);
  const { messageSet } = props;
  const { messages } = props;
  const { token } = props;
  const { fetchMessages } = props;
  const classes = useStyles();

  const deleteMessage = (message) => {
    console.log("==================" + message.id);
    fetch(`http://localhost:3000/message/${message.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token,
      }),
    }).then(() => fetchMessages());
  };

  const updateMessage = (message) => {
    fetch(`http://localhost:3000/message/${message.id}`, {
      method: "PUT",
      body: JSON.stringify({
        message: {
          message: "Messaged removed for privacy.",
          contactId: message.contactId,
          userId: message.userId,
          salesUserId: message.salesUserId,
          sent: message.sent,
          service: message.service,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token,
      }),
    }).then(() => fetchMessages());
  };

  const handleFormSubmit = () => {};

  const messageMapper = () => {
    return messages.map((message, index) => {
      return (
        // <TableContainer>
        // <Table className={classes.table}>
        // <TableBody>
        <TableRow key={message.id}>
          {/* {" "} */}
          {/*works w index*/}
          {!message.sent ? (
            <TableCell
              className={classes.tableCell}
              component="th"
              scope="row"
              align="left"
            >
              {message.message}
            </TableCell>
          ) : (
            <TableCell> </TableCell>
          )}
          {message.sent ? (
            <TableCell
              className={classes.tableCell}
              component="th"
              scope="row"
              align="right"
            >
              {message.message}
            </TableCell>
          ) : (
            <TableCell> </TableCell>
          )}
          <TableCell align="left">
            <Tooltip title="Edit">
              <Button
                onClick={() => {
                  updateMessage(message);
                }}
              >
                <UpdateIcon />
              </Button>
            </Tooltip>
          </TableCell>
          <TableCell align="left">
            <Tooltip title="Delete">
              <Button
                onClick={() => {
                  deleteMessage(message);
                }}
              >
                <DeleteIcon />
              </Button>
            </Tooltip>
          </TableCell>
        </TableRow>
        // </TableBody>
        // </Table>
        // </TableContainer>
      );
    });
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left"> </TableCell>
            <TableCell align="left"> </TableCell>
            <TableCell align="left"> </TableCell>
            <TableCell align="left"> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{messageMapper()}</TableBody>
      </Table>
    </TableContainer>
  );
};
export default MessageTable;
