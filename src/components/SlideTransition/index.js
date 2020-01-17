import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styled from 'styled-components'

const StyledTransition = styled(ReactCSSTransitionGroup)`
  .SlideIn-appear {
    transform: translateX(30px);
    opacity: 0;
  }
  
  .SlideIn-appear.SlideIn-appear-active {
    opacity: 1;
    transform: translateX(0);;
    transition: all 0.6s linear;
  }
  
  .SlideIn-enter {
      opacity: 0;
      transform: translateX(30px);
  }
  
  .SlideIn-enter.SlideIn-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: all 0.2s linear 0.4s;
  }
  
  .SlideIn-leave {
      opacity: 1.0;
      transform: translateX(0);
  }
  
  .SlideIn-leave.SlideIn-leave-active {
      opacity: 0;
      position: absolute;
      width: 100%;
      transform: translateX(-30px);
      transition: all 0.2s linear;
  }
  
  .SlideOut-appear {
    transform: translateX(-30px);
    opacity: 0;
  }
  
  .SlideOut-appear.SlideOut-appear-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 0.6s linear;
  }
  
  .SlideOut-enter {
      opacity: 0;
      transform: translateX(-30px);
  }
  
  .SlideOut-enter.SlideOut-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: all 0.2s linear 0.4s;
  }
  
  .SlideOut-leave {
      opacity: 1.0;
      transform: translateX(0);
  }
  
  .SlideOut-leave.SlideOut-leave-active {
      opacity: 0;
      position: absolute;
      width: 100%;
      transform: translateX(30px);
      transition: all 0.2s linear;
  }
`

export default function SlideTransition ({ children, type }) {
  return (
    <StyledTransition
      transitionAppear
      transitionAppearTimeout={600}
      transitionEnterTimeout={600}
      transitionLeaveTimeout={200}
      transitionName={type}
    >
      {children}
    </StyledTransition>
  )
}
