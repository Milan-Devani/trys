import React, { Component } from "react";
import { showErrorAlert } from "./Error/showErrorAlert";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    showErrorAlert(error.toString());
    console.error("Error caught in Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="text-white">Something went wrong!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
