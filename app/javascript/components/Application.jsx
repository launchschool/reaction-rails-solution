import React from "react";
import { Route, Redirect } from "react-router-dom";
import TopNav from "./shared/TopNav";
import BoardContainer from "./board/BoardContainer";
import CardModalContainer from "./card/CardModalContainer";
import SignupContainer from "./user/SignupContainer";
import LoginContainer from "./user/LoginContainer";
import BoardsDashboardContainer from "./dashboard/BoardsDashboardContainer";
import AuthRoute from "./shared/AuthRoute";
import { checkAuth } from "../utils/helpers";

class Application extends React.Component {
  state = {
    redirect: false,
  };

  componentDidMount() {
    if (checkAuth()) {
      return;
    }
    this.props.onLogout();
  }

  componentDidUpdate(prevProps) {
    let logoutTimer;

    if (
      prevProps.isLoggedIn !== this.props.isLoggedIn &&
      this.props.isLoggedIn
    ) {
      logoutTimer = setTimeout(this.props.onLogout, 1000 * 60 * 60);
      this.setState({ redirect: true });
    } else if (
      prevProps.isLoggedIn !== this.props.isLoggedIn &&
      !this.props.isLoggedIn
    ) {
      this.setState({ redirect: false });
    } else if (!this.props.token) {
      clearTimeout(logoutTimer);
    }
  }
  render() {
    if (!this.props.isLoggedIn && this.state.redirect) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <TopNav
          user={this.props.user}
          isLoggedIn={this.props.isLoggedIn}
          onLogout={this.props.onLogout}
        />
        <Route path="/login" exact component={LoginContainer} />
        <AuthRoute exact path="/" component={BoardsDashboardContainer} />
        <AuthRoute
          exact
          path="/(boards|cards)/:id"
          component={BoardContainer}
        />
        <AuthRoute exact path="/cards/:id" component={CardModalContainer} />
        <Route path="/signup" component={SignupContainer} />
      </div>
    );
  }
}

export default Application;
