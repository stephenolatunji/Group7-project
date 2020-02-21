import React from 'react'
export const Log =  props => {
    const {className,...rest}=props
    const cName = (className||'') + ' svg-icon log-svg'
    return (
<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 131.578 132.666"><g data-name="229884e26702bd5ae0d4352c2cf3ac0a"><g data-name="Group 370"><path d="M25.987.4a11.793 11.793 0 00-8.715 13.185 11.858 11.858 0 0015.419 9.581 11.99 11.99 0 008.045-13.241A11.962 11.962 0 0025.987.4z" data-name="Path 24"/><path d="M89.731 15.009c-1.955.391-2.291 2.011-2.513 11.816-.14 6.592-.112 8.156.223 8.939.223.587 2.709 3.213 6.285 6.676l5.894 5.726-7.458 13.269c-5.085 9.022-8.185 14.218-9.692 16.258a74.89 74.89 0 00-9.749 17.039 136.575 136.575 0 00-4.637 16.481c-.783 3.436-1.676 7.094-2.011 8.185-.726 2.513-.755 4.553-.028 5.783a4.234 4.234 0 003.6 2.179c2.29 0 2.43-.251 8.213-15.084l5.139-13.269 9.832-10 9.833-10 8.716-13.464c6.313-9.749 8.771-13.743 8.855-14.5.251-1.788-.308-2.6-3.24-4.609-1.481-1.034-5.419-3.883-8.771-6.313l-6.118-4.468.168-1.7c.559-5.951.755-10.811.447-11.76a2.927 2.927 0 00-2.654-2.094c-1.7 0-2.542 1.732-3.8 7.905-.5 2.4-.951 4.358-.977 4.3-.056-.056-.587-3.24-1.2-7.068-1.173-7.262-1.341-8.045-2.262-9.33a1.85 1.85 0 00-2.095-.897z" data-name="Path 25"/><path d="M117.022 20.345a13.007 13.007 0 00-5.168 3.519 15.528 15.528 0 00-1.536 2.6c-.67 1.4-.755 1.928-.755 4.526 0 2.766.056 3.073.894 4.777a11.785 11.785 0 005.615 5.364 7.263 7.263 0 004.386.866 9.774 9.774 0 006.509-1.983 10.5 10.5 0 004.609-9.022 10.566 10.566 0 00-4.413-9.022 11.8 11.8 0 00-10.141-1.625z" data-name="Path 26"/><path d="M16.544 25.708c-3.966.391-5.558 1.173-8.268 4.106-2.681 2.877-4.581 7.235-5.419 12.458a78.36 78.36 0 00-.14 14.554A113.961 113.961 0 006.6 75.514c.447 1.4 2.123 7.709 3.771 14l3.023 11.477-6.29 11.564C3.165 119.79.623 124.79.316 125.855a5.9 5.9 0 00.475 5 5.767 5.767 0 003.492 1.815c2.039 0 4.609-2.123 8.017-6.649 5.726-7.6 15.42-21.2 15.726-22.1.642-1.787.447-3.519-1.034-8.8a247.653 247.653 0 00-1.676-5.866 2.167 2.167 0 01-.168-.922c.056-.056 1.9 2.039 4.106 4.637l4.023 4.721-.056 1.788c-.056.977-.336 7.011-.643 13.409-.53 10.726-.53 11.788-.14 13.381.5 1.955 1.285 3.156 2.347 3.715 2.849 1.425 5.336.251 6.817-3.157.838-1.955 1.4-4.664 3.994-18.883 2.179-11.928 2.347-13.241 2.094-14.554-.419-1.983-1.006-2.766-7.57-10.224-3.157-3.575-5.977-6.928-6.23-7.4a42.913 42.913 0 01-3.686-13.768l-.168-2.654 1.676 2.234a15.328 15.328 0 002.57 2.766c1.815 1.062 5 .447 6.09-1.2.977-1.4 7.626-15.615 7.766-16.537a3.909 3.909 0 00-1.621-3.408 3.963 3.963 0 00-3.938-.111 30.363 30.363 0 00-3.547 4.245 39.052 39.052 0 01-2.989 3.771 6.737 6.737 0 01-1.285-1.536l-1.034-1.508.559-2.039a24.772 24.772 0 00.755-4.637c.083-1.4.2-2.57.223-2.57.056 0 2.626.391 5.754.866s6.257.838 6.956.838 6.732-.783 13.409-1.7c8.575-1.2 12.4-1.843 12.989-2.207a4.206 4.206 0 002.094-3.8 4.087 4.087 0 00-2.513-3.966l-1.257-.615-12.347.838-12.347.838-11.4-1.7c-6.257-.922-12.262-1.872-13.352-2.094a21.222 21.222 0 00-6.703-.404z" data-name="Path 27"/><path d="M92.274 94.621c-3.492 3.8-6.592 7.347-6.872 7.877-.475.949-.475.949.419 3.073.5 1.173 2.151 4.692 3.659 7.821 5.168 10.783 7.1 13.939 9.19 14.917a3.564 3.564 0 004.023-.53c.67-.643.726-.894.7-2.877-.028-2.039-.2-2.626-3.855-12.319-2.094-5.587-3.8-10.336-3.8-10.558s.7-3.436 1.536-7.151c.866-3.687 1.509-6.816 1.481-6.956-.057-.113-2.962 2.903-6.481 6.703z" data-name="Path 28"/></g></g></svg>)}
export const Crest =  props => {
    const {className,...rest}=props
    const cName = (className||'') + ' svg-icon Crest-svg'
    return (
<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.342 54.185"><g data-name="Group 378"><g data-name="304752"><path d="M1.045.068a1.6 1.6 0 00-.94.851l-.089.191-.013 15.056c-.008 10.5 0 15.306.034 15.882a19.2 19.2 0 00.7 4.477 12.017 12.017 0 003.135 5.37c1.321 1.326 2.329 2.016 5.756 3.956.462.263 1.279.746 1.821 1.072a42.641 42.641 0 003.816 2.109c.911.457 1.787.915 1.948 1.017a9.844 9.844 0 012.922 3.041c.517.754.784.974 1.313 1.072a1.382 1.382 0 00.809-.093 1.677 1.677 0 00.788-.712 12.885 12.885 0 014.375-4.091c.415-.241 1.436-.758 2.9-1.474.407-.2 1.156-.61 1.664-.915s1.368-.8 1.906-1.11c1.351-.766 2.533-1.474 3.117-1.859 3.985-2.634 5.815-5.878 6.281-11.16.042-.512.055-3.617.055-16.094V1.196l-.11-.233a1.528 1.528 0 00-1.52-.923 1.8 1.8 0 00-1.186.648 7.042 7.042 0 01-1.592 1.11 15.582 15.582 0 01-7.17 1.537 13.322 13.322 0 01-8.708-2.7c-.754-.534-.94-.614-1.376-.614a1.178 1.178 0 00-.61.131 4.529 4.529 0 00-.572.343 13.282 13.282 0 01-6.654 2.736 28.465 28.465 0 01-3.663.068 15.329 15.329 0 01-5.54-1.385 7.4 7.4 0 01-1.9-1.309 3.4 3.4 0 00-.618-.47A1.545 1.545 0 001.045.068z" data-name="Path 44"/></g><text font-family="SourceSansPro-Regular, Source Sans Pro" font-size="29" transform="translate(21.918 35.777)"><tspan x="-8.28" y="0">C</tspan></text></g></svg>)}
export const Call =  props => {
    const {className,...rest}=props
    const cName = (className||'') + ' svg-icon Call-svg'
    return (
<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" data-name="Group 381" viewBox="0 0 30.304 30.236"><g data-name="Group 380"><path d="M29.624 23.914l-4.68-4.681a2.44 2.44 0 00-3.441.065l-2.357 2.358-.465-.259a23.463 23.463 0 01-5.671-4.1 23.594 23.594 0 01-4.11-5.683c-.087-.158-.171-.31-.254-.455l1.582-1.58.778-.779a2.438 2.438 0 00.063-3.441L6.389.679a2.438 2.438 0 00-3.44.065L1.63 2.07l.036.036A7.627 7.627 0 00.579 4.023 7.948 7.948 0 00.1 5.967c-.618 5.123 1.723 9.805 8.077 16.159 8.782 8.782 15.86 8.118 16.165 8.086a7.908 7.908 0 001.95-.49 7.6 7.6 0 001.91-1.082l.029.026 1.336-1.308a2.442 2.442 0 00.057-3.444z" data-name="Path 46"/></g></svg>)}
export const Message =  props => {
    const {className,...rest}=props
    const cName = (className||'') + ' svg-icon Message-svg'
    return (
<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" data-name="Group 398" viewBox="0 0 29.647 23.294"><path d="M2.846 7.18q.563.4 3.392 2.358t4.335 3.019q.165.116.7.5t.893.629q.356.24.86.538a4.991 4.991 0 00.951.446 2.622 2.622 0 00.827.149h.033a2.624 2.624 0 00.827-.149 5 5 0 00.951-.446q.5-.3.86-.538t.893-.629q.538-.389.7-.5 1.532-1.059 7.75-5.377a7.859 7.859 0 002.018-2.035 4.369 4.369 0 00.811-2.5A2.67 2.67 0 0027 0H2.647a2.363 2.363 0 00-1.96.86A3.339 3.339 0 000 3.011a3.864 3.864 0 00.91 2.258A8.212 8.212 0 002.846 7.18z" data-name="Path 60"/><path d="M27.993 8.95q-5.426 3.672-8.239 5.708-.943.695-1.53 1.084a9.445 9.445 0 01-1.563.794 4.76 4.76 0 01-1.82.405h-.033a4.762 4.762 0 01-1.82-.405 9.45 9.45 0 01-1.563-.794q-.587-.389-1.53-1.084Q7.661 13.02 1.673 8.95A8.763 8.763 0 010 7.511v13.136a2.548 2.548 0 00.778 1.87 2.549 2.549 0 001.87.778H27a2.655 2.655 0 002.647-2.647V7.511a9.124 9.124 0 01-1.654 1.439z" data-name="Path 61"/></svg>)}
export const Group399 =  props => {
    const {className,...rest}=props
    const cName = (className||'') + ' svg-icon Group 399-svg'
    return (
<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.289 24.234"><g data-name="Group 399"><g data-name="Group 380"><path d="M23.744 19.167l-3.751-3.751a1.956 1.956 0 00-2.758.052l-1.89 1.889-.373-.207a18.806 18.806 0 01-4.545-3.288 18.91 18.91 0 01-3.294-4.556l-.2-.364L8.2 7.678l.624-.624a1.954 1.954 0 00.05-2.758L5.121.544a1.954 1.954 0 00-2.758.052L1.306 1.659l.029.029a6.113 6.113 0 00-.871 1.536 6.37 6.37 0 00-.388 1.559c-.5 4.106 1.381 7.859 6.473 12.951 7.039 7.039 12.711 6.507 12.956 6.481a6.338 6.338 0 001.563-.393 6.092 6.092 0 001.531-.867l.023.021 1.071-1.049a1.958 1.958 0 00.051-2.76z" data-name="Path 46"/></g></g></svg>)}
export const Twitter =  props => {
    const {className,...rest}=props
    const cName = (className||'') + ' svg-icon Twitter-svg'
    return (
<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.441 19.863"><path d="M24.441 2.351a10 10 0 01-2.88.789A5.028 5.028 0 0023.766.366a10.038 10.038 0 01-3.184 1.216 5.019 5.019 0 00-8.545 4.574A14.234 14.234 0 011.697.917a5.02 5.02 0 001.552 6.695 4.979 4.979 0 01-2.271-.628v.064a5.017 5.017 0 004.023 4.916 5.034 5.034 0 01-2.264.087 5.02 5.02 0 004.684 3.482 10.122 10.122 0 01-7.424 2.076A14.26 14.26 0 0021.953 5.595c0-.217 0-.434-.015-.648a10.169 10.169 0 002.5-2.6z" data-name="Path 54"/></svg>)}
export const Accident =  props => {
    const {className,...rest}=props
    const cName = (className||'') + ' svg-icon accident-svg'
    return (
<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145.919 123.547"><g><path d="M125.085 113.294a5.577 5.577 0 003.742-6.942l-2.853-9.527a5.577 5.577 0 00-6.942-3.742l-9.414 2.82-1.8 1.8 12.232 1.567-15.026 1.93-9.029-10.406a3.983 3.983 0 00-6.019 5.218l10.425 12.024a4.023 4.023 0 003.516 1.341l16.592-2.131-15.251 5.712a7.365 7.365 0 01-5.518-.641 11.178 11.178 0 01-3.405-3.132l-6.31 6.31v.005a10.042 10.042 0 0011.594 4.7c8.584-2.517 21.531-6.322 23.466-6.906z"/><path d="M85.222 94.164a7.788 7.788 0 013.893-7.535l-6.444-6.444 19.69-19.69 8.913 13.941-.117.117-13 13c.547.484.3.241 5.357 6.07l16.055-16.055a3.546 3.546 0 00.48-4.412l-16.293-25.484-11.184-11.409a7.875 7.875 0 00-12.272-9.7l-3 3a18.787 18.787 0 01-26.569 26.569L29.876 76.986a18.787 18.787 0 01-26.569 26.569l-1 1a7.874 7.874 0 008.961 12.675l2.678 2.678a12.428 12.428 0 0017.575 0l7.9-7.9 33.656 9.492a3.462 3.462 0 003.466-.9l15.9-15.9c-5.497-6.347-6.909-7.333-7.221-10.536zm-12.515 18.84l-17.827-5.028 22.077-22.077 6.772 6.772-5.712 1.085-12.011 12.011 16.918-2.98z"/><path d="M64.016 30.829a12.017 12.017 0 11-12.017 12.017 12.017 12.017 0 0112.017-12.017z"/><circle cx="12.017" cy="12.017" r="12.017" transform="translate(4.575 78.253)"/><circle cx="8.255" cy="8.255" r="8.255" transform="translate(129.408 90.218)"/><path d="M8.732 27.588a8.31 8.31 0 004.056-1.048 8.6 8.6 0 008.2 6.557 5.452 5.452 0 107.9-4.864 8.562 8.562 0 00.85-3.685 6.367 6.367 0 00-3.253-11.814 9.454 9.454 0 10-18.323-3.28 9.541 9.541 0 00.109 1.443 8.352 8.352 0 00.461 16.691z"/><circle cx="3.505" cy="3.505" r="3.505" transform="translate(29.299 41.332)"/></g></svg>)}
export const BurningHome =  props => {
    const {className,...rest}=props
    const cName = (className||'') + ' svg-icon burning-home-svg'
    return (
<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.546 114.236"><defs><linearGradient id="a" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#f21717"/><stop offset=".163" stop-color="#f55326"/><stop offset="1" stop-color="#fab03c"/></linearGradient></defs><path d="M84.669 95.967v2.073a3.541 3.541 0 01-3.541 3.544H68.183a3.541 3.541 0 01-3.544-3.544V85.088a3.538 3.538 0 013.541-3.541h12.54a63.075 63.075 0 01-.722-7.713H68.184a3.538 3.538 0 01-3.545-3.541V57.342a3.541 3.541 0 013.541-3.543h12.949a3.452 3.452 0 011.644.457 46.634 46.634 0 014.685-9.953 6.86 6.86 0 011.823-1.9l-26.18-22.588a3.544 3.544 0 00-4.625 0L16.681 55.878a3.55 3.55 0 00-1.226 2.682v52.131a3.536 3.536 0 003.541 3.541h78.481c-5.321-4.303-9.733-10.741-12.808-18.265zm-27.73 2.073a3.544 3.544 0 01-3.544 3.544H40.446a3.541 3.541 0 01-3.54-3.544V85.088a3.538 3.538 0 013.54-3.541h12.945a3.541 3.541 0 013.548 3.541zm0-27.746a3.541 3.541 0 01-3.544 3.541H40.446a3.538 3.538 0 01-3.54-3.541V57.342a3.54 3.54 0 013.54-3.543h12.945a3.543 3.543 0 013.544 3.543z" data-name="Path 33"/><path d="M94.232 41.072a6.736 6.736 0 011.573.331 7.013 7.013 0 014.486 4.878l1.482 1.276a57.294 57.294 0 014.071-10.511L64.25 1.284a5.313 5.313 0 00-6.926 0L1.854 48.978a5.312 5.312 0 106.926 8.057l52.007-44.719z" data-name="Path 34"/><path d="M232.875 118.736a6.348 6.348 0 00-2.137-.365c-5.671 0-11.794 7.069-16.114 13.782-.618-5.131-2.788-10.488-5.313-16.716l-1.15-2.851c-3.71-9.281-.736-19.672 2.933-25.752a1.772 1.772 0 00-1.9-2.643c-13.7 3.079-25.026 21.426-25.714 39.907a22.259 22.259 0 00-4.915-3.487c-3.436-1.961-5.509-3.143-4.851-9.374a1.771 1.771 0 00-3.26-1.129c-13.292 21.075-5.07 54.253 11.011 64.582a1.77 1.77 0 002.306-.341 2.419 2.419 0 00.354-1.708c-.52-3.223-1.783-12.368-.611-19.045a10.517 10.517 0 002.568 1.86 6.589 6.589 0 013.609 3.844 1.762 1.762 0 003.092.442c1.748-2.387 2.529-6.086 3.355-10.012 1.087-5.141 2.2-10.41 5.37-12.969a18.612 18.612 0 00.075 12.8l.678 1.674c2.008 4.982 3.467 8.574 2.629 11.989a1.773 1.773 0 003.3 1.219 30.126 30.126 0 015.509-7.861 45.231 45.231 0 00-1.32 8.469 51.175 51.175 0 01-1.495 9.5 1.776 1.776 0 001.7 2.275 1.8 1.8 0 00.99-.3 25.923 25.923 0 006.771-6.741c5.462-7.881 6.437-18.272 7.308-27.429.807-8.581 1.573-16.681 5.833-20.655a1.762 1.762 0 00.527-1.654 1.785 1.785 0 00-1.138-1.311z" data-name="Path 35" transform="translate(-78.501 -62.971)"/></svg>)}
export const Clock =  props => {
    const {className,...rest}=props
    const cName = (className||'') + ' svg-icon clock-svg'
    return (
<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.095 27.095"><g data-name="Group 400"><path d="M13.547 0A13.548 13.548 0 1027.1 13.547 13.548 13.548 0 0013.547 0zM19.4 16.124h-5.739c-.019 0-.037 0-.057-.005s-.037.005-.057.005a.937.937 0 01-.937-.937V5.622a.937.937 0 111.874 0v8.628H19.4a.937.937 0 010 1.874z" data-name="Path 62"/></g></svg>)}
export const CommentBlackOvalBubbleShape =  props => {
    const {className,...rest}=props
    const cName = (className||'') + ' svg-icon comment-black-oval-bubble-shape-svg'
    return (
<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.726 27.198"><path d="M29.6 5.639a14.351 14.351 0 00-5.772-4.125A20.58 20.58 0 0015.861 0 21.052 21.052 0 009.7.893 17.231 17.231 0 004.637 3.31a12.077 12.077 0 00-3.382 3.62A8.433 8.433 0 000 11.33a8.591 8.591 0 001.6 4.975A13 13 0 005.982 20.2a11.251 11.251 0 01-.46 1.345q-.266.637-.478 1.045a7.192 7.192 0 01-.576.9q-.363.5-.549.7l-.611.673q-.425.47-.549.611a1.237 1.237 0 00-.142.159l-.124.15-.106.159q-.089.133-.08.168a.472.472 0 01-.035.177.234.234 0 00.009.213v.018a.89.89 0 00.31.513.694.694 0 00.54.159 13.289 13.289 0 002.018-.389 19.35 19.35 0 008.151-4.282 24.221 24.221 0 002.567.142 20.574 20.574 0 007.967-1.514 14.349 14.349 0 005.766-4.125 8.686 8.686 0 000-11.383z" data-name="Path 45"/></svg>)}
export const Crime =  props => {
    const {className,...rest}=props
    const cName = (className||'') + ' svg-icon crime-svg'
    return (
<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 119.804"><g data-name="Group 372"><g data-name="Group 371"><path d="M79.776 66.81l-2.569-2.573-37.874 38.365a17.157 17.157 0 0015.233-4.961 15.857 15.857 0 002.759-4.453 3.589 3.589 0 013.882-1.923 32.744 32.744 0 0028.847-9.044 31.751 31.751 0 005.936-8.368 25.084 25.084 0 01-16.214-7.043z" data-name="Path 36"/></g></g><g data-name="Group 374"><g data-name="Group 373"><path d="M120.886 35.977a11.164 11.164 0 00-15.414 0l-7.707 7.71-9.138-9.138a14.348 14.348 0 006.573-3.714 14.536 14.536 0 10-20.562-20.551 14.353 14.353 0 00-3.711 6.565l-11.7-11.7a18 18 0 00-25.2 0L23.745 15.422a10.891 10.891 0 000 15.414l.006.005a11.153 11.153 0 0015.3.084c.033-.032.073-.054.1-.086l7.714-7.704L52 28.27c-14.813 14.817-2 2.1-13.725 13.825l-1.064 1.064H10.893A10.827 10.827 0 000 53.959v20.555a10.9 10.9 0 1021.793 0v-9.655h14.172L8.324 92.5c-3.637 3.64-4.428 10.982 0 15.414a11.165 11.165 0 0015.421 0l50.894-51.379a3.633 3.633 0 015.138 0l5.138 5.141a18.617 18.617 0 0025.7 0l10.13-10.276a10.918 10.918 0 00.141-15.423z" data-name="Path 37"/></g></g><g data-name="Group 376"><g data-name="Group 375"><path d="M68.62 98.003a10.9 10.9 0 1010.9 10.9 10.912 10.912 0 00-10.9-10.9z" data-name="Path 38"/></g></g></svg>)}
export const EmergencyAmbulance =  props => {
    const {className,...rest}=props
    const cName = (className||'') + ' svg-icon emergency-ambulance-svg'
    return (
<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.754 45.084"><path d="M52.794 25.924l-.129-.12c-.079-.073-.158-.145-.234-.221l-12.3-12.3a1.215 1.215 0 00-.084-.077 5.509 5.509 0 00-2.084-1.092V9.105a1.32 1.32 0 00-1.32-1.32h-5.982a1.32 1.32 0 00-1.32 1.32v2.815H3.9a3.9 3.9 0 00-3.9 3.9v23.36a1.32 1.32 0 001.32 1.32h3.446a5.9 5.9 0 0011.506 0H38.89a5.9 5.9 0 0011.51-.008 4.516 4.516 0 004.356-4.506v-5.533a6.234 6.234 0 00-1.962-4.529zM31.98 10.425h3.343v1.5H31.98v-1.5zm-21.461 32.02a3.264 3.264 0 113.265-3.265 3.268 3.268 0 01-3.265 3.265zm6.789-18.926a1.32 1.32 0 01-1.32 1.32h-2.141v2.141a1.32 1.32 0 01-1.32 1.32H9.976a1.32 1.32 0 01-1.32-1.32v-2.142H6.515a1.32 1.32 0 01-1.32-1.32v-2.55a1.32 1.32 0 011.32-1.32h2.142v-2.141a1.32 1.32 0 011.32-1.32h2.551a1.32 1.32 0 011.32 1.32v2.141h2.141a1.32 1.32 0 011.32 1.32v2.551zm16.081 1.284a1.164 1.164 0 01-1.162-1.162v-6.229a.648.648 0 01.647-.647h4.155a1.526 1.526 0 011.087.45l6.349 6.349a.726.726 0 01-.513 1.239zm11.253 17.642a3.264 3.264 0 113.265-3.265 3.268 3.268 0 01-3.265 3.265zM33.652 6.334a1.32 1.32 0 01-1.32-1.32V1.32a1.32 1.32 0 112.639 0v3.695a1.319 1.319 0 01-1.319 1.319zm6.407 1.122a1.32 1.32 0 01-.933-2.253l2.327-2.323a1.32 1.32 0 011.866 1.866l-2.328 2.328a1.314 1.314 0 01-.933.382zm-12.193 0a1.315 1.315 0 01-.933-.387L24.6 4.741a1.32 1.32 0 111.871-1.861L28.8 5.203a1.32 1.32 0 01-.933 2.253z"/></svg>)}
export const Facebook =  props => {
    const {className,...rest}=props
    const cName = (className||'') + ' svg-icon facebook-svg'
    return (
<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.503 27.12"><path d="M11.999 13.537H8.288V27.12H2.672V13.537H0V8.759h2.672v-3.09C2.672 3.459 3.722 0 8.341 0l4.162.017v4.635H9.488a1.144 1.144 0 00-1.192 1.3v2.81h4.2z" data-name="Path 52"/></svg>)}
export const File =  props => {
    const {className,...rest}=props
    const cName = (className||'') + ' svg-icon file-svg'
    return (
<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.119 42.335"><path d="M28.358 0H0v42.335h41.119V10.292zM9.624 9.878h8.749a.8.8 0 01.875.706.8.8 0 01-.875.706H9.624a.8.8 0 01-.875-.706.8.8 0 01.875-.706zM31.5 33.868H9.624a.722.722 0 110-1.411H31.5a.722.722 0 110 1.411zm0-5.645H9.624a.722.722 0 110-1.411H31.5a.722.722 0 110 1.411zm0-5.645H9.624a.722.722 0 110-1.411H31.5a.722.722 0 110 1.411zm0-5.645H9.624a.8.8 0 01-.875-.706.8.8 0 01.875-.706H31.5a.8.8 0 01.875.706.8.8 0 01-.875.707zm-4.374-5.645V1.411l12.248 9.878z"/></svg>)}
export const FloodedHouse =  props => {
    const {className,...rest}=props
    const cName = (className||'') + ' svg-icon flooded-house-svg'
    return (
<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 116.998 116.897"><path d="M34.073 71.47a7.661 7.661 0 008.283 0l.13-.088v-26.7h31.862v26.583l.3.205a7.659 7.659 0 008.283 0l7.915-5.35a14.507 14.507 0 016.414-2.348V44.811l7.529 6.935 4.893-4.527L58.418 0 7.148 47.218l4.893 4.527 7.529-6.935v18.94a14.542 14.542 0 016.588 2.37zm0 0" data-name="Path 29"/><path d="M26.481 95.191l7.834 5.35a7.518 7.518 0 008.2 0l7.834-5.35a14.741 14.741 0 0116.3 0l7.834 5.35a7.515 7.515 0 008.2 0l7.834-5.35a14.743 14.743 0 0116.3 0L117 102.146V88.091l-.273.348-13.96-9.532a7.513 7.513 0 00-8.2 0l-7.835 5.35a14.743 14.743 0 01-16.3 0L62.6 78.911a7.515 7.515 0 00-8.2 0l-7.835 5.35a14.741 14.741 0 01-16.3 0l-7.835-5.35a7.516 7.516 0 00-8.2 0L.273 88.442 0 88.091v14.05l10.181-6.95a14.744 14.744 0 0116.3 0zm0 0" data-name="Path 30"/><path d="M102.765 100.352a7.516 7.516 0 00-8.2 0l-7.835 5.35a14.742 14.742 0 01-16.3 0l-7.834-5.35a7.518 7.518 0 00-8.2 0l-7.834 5.35a14.742 14.742 0 01-16.3 0l-7.834-5.35a7.518 7.518 0 00-8.2 0L.273 109.884 0 109.537v7.36h117v-7.36l-.274.348zm0 0" data-name="Path 31"/><path d="M66.093 70.281l.632.463V55.237H50.099v15.625l.792-.58a12.983 12.983 0 0115.202-.001zm0 0" data-name="Path 32"/></svg>)}
export const GooglePlus =  props => {
    const {className,...rest}=props
    const cName = (className||'') + ' svg-icon google-plus-svg'
    return (
<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.721 17.617"><g data-name="Group 386"><path d="M.005 8.82a8.8 8.8 0 005.938 8.326 8.687 8.687 0 009.5-2.531 9.956 9.956 0 001.783-7.043c-2.814-.025-5.623-.017-8.427-.017v3c1.682.046 3.364.025 5.046.059a4.866 4.866 0 01-2.86 3.334A5.563 5.563 0 117.238 3.482c1.8-.635 3.663.08 5.206 1.018.782-.732 1.514-1.514 2.233-2.3A8.854 8.854 0 00.001 8.823z" data-name="Path 48"/><path d="M22.688 5.035c-.008.837-.017 1.678-.021 2.515-.841.008-1.678.013-2.515.017v2.506c.837 0 1.678.008 2.515.017.008.837.008 1.673.017 2.515h2.506c0-.841.008-1.678.017-2.519l2.515-.013V7.567c-.837 0-1.678-.008-2.515-.017 0-.837-.013-1.678-.017-2.515z" data-name="Path 49"/><g data-name="Group 385"><path d="M.005 8.82a8.854 8.854 0 0114.678-6.623c-.719.791-1.451 1.573-2.233 2.3-1.544-.938-3.4-1.653-5.206-1.018a5.563 5.563 0 103.747 10.466 4.867 4.867 0 002.86-3.334c-1.685-.029-3.368-.008-5.049-.056 0-1-.008-2 0-3 2.8 0 5.614-.013 8.422.013a9.953 9.953 0 01-1.783 7.043 8.686 8.686 0 01-9.5 2.531A8.8 8.8 0 01.005 8.82z" data-name="Path 50"/><path d="M22.688 5.035h2.5c0 .837.013 1.678.017 2.515.837.008 1.678.013 2.515.017v2.506l-2.515.013c-.008.841-.013 1.678-.017 2.519h-2.506c-.008-.841-.008-1.678-.017-2.515-.837-.009-1.678-.013-2.515-.017V7.567q1.255-.006 2.515-.017c.006-.837.014-1.683.023-2.515z" data-name="Path 51"/></g></g></svg>)}
export const Linkedin =  props => {
    const {className,...rest}=props
    const cName = (className||'') + ' svg-icon linkedin-svg'
    return (
<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.688 18.813"><g data-name="Group 387"><path d="M19.688 11.531v7.28h-4.221v-6.79c0-1.705-.609-2.87-2.138-2.87a2.309 2.309 0 00-2.165 1.543 2.889 2.889 0 00-.14 1.029v7.09h-4.22s.057-11.5 0-12.694h4.221v1.8c-.008.014-.02.028-.028.042h.028v-.042a4.191 4.191 0 013.8-2.1c2.777 0 4.859 1.814 4.859 5.713zM2.388-.003a2.2 2.2 0 10-.055 4.387h.027a2.2 2.2 0 10.028-4.387zM.251 18.813H4.47V6.119H.251z" data-name="Path 53"/></g></svg>)}
export const MapsAndFlags =  props => {
    const {className,...rest}=props
    const cName = (className||'') + ' svg-icon maps-and-flags-svg'
    return (
<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.141 29.188"><g data-name="Group 397"><path d="M10.571 0A10.583 10.583 0 000 10.571c0 7.233 9.46 17.853 9.862 18.3a.952.952 0 001.416 0c.4-.449 9.862-11.068 9.862-18.3A10.583 10.583 0 0010.571 0zm0 15.889a5.318 5.318 0 115.318-5.318 5.324 5.324 0 01-5.318 5.318z" data-name="Path 59"/></g></svg>)}
export const Vandalism =  props => {
    const {className,...rest}=props
    const cName = (className||'') + ' svg-icon vandalism-svg'
    return (
<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104.332 138.797"><g data-name="noun_Man Destroying Toilet_637607"><g data-name="Group 367"><path d="M0 81.186v57.113h45.516l4.028-19.334s12.688-2.215 12.688-11.782v-4.834H43.8l-4.518 5.53.4 5.337-5.438-4.834 3.122-2.719-1.333-3.315H21.449s-3.826-.906-3.826-3.852v-17.31A3.625 3.625 0 0014 77.561H3.625A3.625 3.625 0 000 81.186z" data-name="Path 5"/><circle cx="13.591" cy="13.591" r="13.591" data-name="Ellipse 2" transform="rotate(-13.109 59.837 -284.208)"/><path d="M90.322 96.915a40.067 40.067 0 01.315-5.024c3.974-2.471 6.1-7.885 6.056-13.44a63.549 63.549 0 015.637-27.188 16.14 16.14 0 00-3.283-18.174c-4.812-4.718-13.258-3.348-17.635 5.179-.39.77-.765 1.549-1.132 2.334a30.467 30.467 0 002.239-1.062 32.694 32.694 0 005.137-3.3 5.437 5.437 0 016.978 8.34 41.923 41.923 0 01-6.7 4.4 36.775 36.775 0 01-12.373 4.166 88.389 88.389 0 00-3.065 16.073l-7.77-4.518a7.538 7.538 0 00-9.068 1.118L36.022 84.952a7.553 7.553 0 1010.542 10.819l15.527-15.13 13.747 8a55.877 55.877 0 00-.621 8.274c-.054 10.75 3.295 25.626 15.99 39.43a7.554 7.554 0 0011.144-10.2c-9.897-10.878-11.976-21.33-12.029-29.23z" data-name="Path 6"/><path d="M26.675 80.382l-6.177 4.732a.906.906 0 00.443 1.619l8.761 1.057a.848.848 0 00.111.007.906.906 0 00.108-1.8l-6.554-.791 5.334-4.086a.907.907 0 00.013-1.43l-8.95-7.11 8.978.117a.908.908 0 00.842-1.272l-4.157-9.462 8.5 4.206a.907.907 0 001.3-.718l1.084-10.354 5.419 9.285a.905.905 0 001.518.072l4.777-6.646.674 6.966a.906.906 0 101.8-.173l-.906-9.364a.906.906 0 00-1.639-.442l-5.366 7.468-6.099-10.481a.906.906 0 00-1.684.362l-1.238 11.817-9.569-4.736a.907.907 0 00-1.232 1.177l4.594 10.457-10.223-.132a.907.907 0 00-.576 1.617z" data-name="Path 7"/><path d="M71.951 43.724a14.041 14.041 0 01-7.5-2.066 22.143 22.143 0 01-7.49-8.355 4.231 4.231 0 00-7.368 4.16 30.5 30.5 0 0010.468 11.426 22.664 22.664 0 0011.82 3.294h.069a27.52 27.52 0 004-.317 35.644 35.644 0 0011.421-3.951 41.2 41.2 0 006.491-4.261 4.23 4.23 0 00-5.4-6.513 33.563 33.563 0 01-5.377 3.469 31.276 31.276 0 01-3.533 1.59 21.769 21.769 0 01-7.511 1.523h-.088z" data-name="Path 8"/></g></g></svg>)}
export const Rape =  props => {
    const {className,...rest}=props
    const cName = (className||'') + ' svg-icon rape-svg'
    return (
<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.016 134.116"><g data-name="noun_Sexual Assault_1466037"><path d="M62.981 37.269a10.163 10.163 0 1111.861-7.989 10.129 10.129 0 01-11.861 7.989" data-name="Path 9"/><path d="M32.994 31.745l-.018.01c-1.5.921-9.216 4.1-17.861-4.01a24.882 24.882 0 01-5.117-8.9s3.695 1.661 6.574.552a12.667 12.667 0 004.261-3.556 9.951 9.951 0 013.326-2.46 10.2 10.2 0 018.837 18.364z" data-name="Path 10"/><g data-name="Group 368"><path d="M38.507 80.642a7.225 7.225 0 012.333-9.945l2.926-1.814a89.379 89.379 0 00-5.106-19.181h2.778l5.48 17.227 7.253-4.5-5.725-17.722c-.921-3.229-4.438-8.954-11.507-8.954H20.913c-7.068 0-10.585 5.725-11.506 8.954L.259 73.024c-1.788 6.088 6.02 8.419 7.863 2.74L16.415 49.7h2.777a90.732 90.732 0 00-6.1 30.338c-.2 10.6 6.046 49.884 6.046 49.884.5 5.456 7.7 5.469 7.873 0l.002-42.965h3.838l-.007 42.965c.171 5.469 7.368 5.456 7.872 0 0 0 5.048-31.754 5.92-45.865a7.215 7.215 0 01-6.129-3.415z" data-name="Path 11"/></g><path d="M99.511 66.182L84.229 39.095a8.982 8.982 0 00-12.98-1.29 11.712 11.712 0 00-3.223 4l-9.815 20.711-16.212 10.051a5.023 5.023 0 105.294 8.538l16.825-10.387a10.246 10.246 0 002.538-2.563l6.078-10.239L85.84 80.198l-.042 45.259c.069 6.833 5.29 8.6 7.454 8.657 3.561.087 7.731-2.345 7.761-8.079V72.203a10.81 10.81 0 00-1.502-6.021z" data-name="Path 12"/><path d="M32.078 8.851h-2.124V-.003h2.124z" data-name="Path 13"/><path d="M38.532 11.331l-1.579-1.418 6.373-7.081 1.579 1.422z" data-name="Path 14"/><path d="M41.777 17.477l-.625-2.03 9.2-2.832.625 2.03z" data-name="Path 15"/></g></svg>)}
export const Thief1 =  props => {
    const {className,...rest}=props
    const cName = (className||'') + ' svg-icon thief (1)-svg'
    return (
<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.412 121.724"><g data-name="thief (1)"><g data-name="Group 377"><path d="M4.806 48.594l1.4 2.421a8.587 8.587 0 011.148-.075h5.865l1.348-2.346a1.718 1.718 0 00-1.473-2.571H6.278a1.728 1.728 0 00-1.472 2.571z" data-name="Path 39"/><path d="M74.264 98.484c8.91-3.669 17.7-7.388 26.605-11.081 2.6-.8 4.492-2.621 4.542-5.591-.025-3.145-1.048-5.84-3.918-7.587a6.239 6.239 0 00-6.065-.175c-5.466 2.221-10.807 4.467-16.273 6.689a9.351 9.351 0 01-1.672.6c-.225-.524-.449-1.023-.649-1.547-2.221-5.466-2.047-4.817-4.318-10.158-.075-.175-.874-2.072-1.647-3.669a21.665 21.665 0 01-6.913 10.033l-3.394 2.77c2.421 5.69 4.767 11.481 7.113 17 1.351 3.315 3.145 4.189 6.589 2.716z" data-name="Path 40"/><path d="M13.167 67.012H6.229a4.174 4.174 0 00-4.218 3.095L.164 78.792a7.8 7.8 0 007.637 9.384h3.744a7.8 7.8 0 007.637-9.384l-1.8-8.685a4.174 4.174 0 00-4.215-3.095z" data-name="Path 41"/><path d="M41.943 84.557c4.443-2.5 8.91-5.091 13.4-7.712l5.516-4.467c.849-.649 9.559-8.111 3.844-17.271L51.228 33.393a13.471 13.471 0 00-.948-1.522 7.636 7.636 0 011.173-.1c5.291 0 10.682.05 16.023-.075a2.021 2.021 0 012 1.1c1.9 3.045 3.819 6.115 5.715 9.16s5.241 3.968 7.962 2.221c3.195-1.547 3.868-4.992 1.972-8.036-2.671-4.368-5.316-8.71-7.987-13.078a4.683 4.683 0 00-4.297-2.448c-8.71.05-17.57.025-26.331.2a10.008 10.008 0 00-4.742 1.5c-4.917 2.992-9.583 6.386-14.425 9.581a8.019 8.019 0 00-3.943 7.263c-.025 4.268-.025 8.536-.05 12.828a13.6 13.6 0 00.025 1.722 9.875 9.875 0 01-1.547-.05c-4.867.025-9.559 0-14.426.025-3.569-.025-5.89 2.2-5.915 5.466a5.492 5.492 0 005.84 5.641c7.712-.025 15.549 0 23.261 0 2.421-.025 3.644-1.248 3.669-3.794.025-3.569-.05-7.288-.025-10.857a2.353 2.353 0 00.125-.674c3.719 5.641 7.363 11.106 10.932 16.7a4.979 4.979 0 01-1.348.874c-4.567 2.845-9.21 5.84-13.852 8.511a6.347 6.347 0 00-3.22 5.84c.05 11.156.1 22.312.05 33.394.025 4.143 2.671 6.789 6.888 6.938 4.093.1 6.689-1.722 7.437-4.992a7.581 7.581 0 00.075-1.972c-.05-9.434-.075-18.868-.125-28.3.001-.778-.049-1.353.749-1.902z" data-name="Path 42"/><path d="M11.869 13.2a13.091 13.091 0 0013.178 12.9 12.915 12.915 0 0012.978-13.028 13.078 13.078 0 10-26.156.125z" data-name="Path 43"/></g></g></svg>)}
export const WomanWithHeadset =  props => {
    const {className,...rest}=props
    const cName = (className||'') + ' svg-icon woman-with-headset-svg'
    return (
<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.19 45.291"><path d="M18.625 23.863a2.269 2.269 0 11-2.269-2.269 2.269 2.269 0 012.269 2.269zm9.21-2.269a2.269 2.269 0 102.269 2.269 2.269 2.269 0 00-2.27-2.269zm9.692 9.236v-.258a19.989 19.989 0 01-.908 2.169 13.47 13.47 0 00.371 1.705 11.294 11.294 0 005.372 3.754 6.158 6.158 0 01-3.284.409 9.8 9.8 0 004.584 3.214c-4.85 4.377-12.845 4.471-18.434 1.077a10.355 10.355 0 01-6.267 0C13.372 46.3 5.377 46.2.525 41.826a9.792 9.792 0 004.65-3.3 6.208 6.208 0 01-2.634-.468 11.723 11.723 0 004.305-2.547 13.512 13.512 0 00.725-2.773 19.963 19.963 0 01-.908-2.169v.259H3.92A3.92 3.92 0 010 26.908V22.6a3.919 3.919 0 012.055-3.449c.041-6.122 1.825-10.9 5.311-14.209C10.823 1.663 15.779 0 22.095 0s11.267 1.663 14.729 4.941c3.486 3.305 5.27 8.087 5.311 14.209a3.919 3.919 0 012.055 3.45v4.31a3.92 3.92 0 01-3.92 3.92h-2.744zm-1.633-6.953c0-1.009-.052-1.956-.128-2.875-1.769-1.618-5-2.838-9.084-3.269a4.921 4.921 0 011.5 2.459c-2.372-1.734-7.344-2.271-9-4.129-2.629-1.74-3.318-4.232-3.341-3.2-.106 4.947-3.613 8.8-7.506 9.348a35.927 35.927 0 00-.045 1.667 17.75 17.75 0 00.922 5.714c2.187 2.638 5.8 3.383 9 3.581a4.087 4.087 0 013.476-1.6c2.1 0 3.807 1.21 3.807 2.7s-1.7 2.7-3.807 2.7a4 4 0 01-3.547-1.727 18.743 18.743 0 01-6.879-1.546c3.079 4.538 7.851 6.937 10.831 6.937 4.685.002 13.8-5.914 13.8-16.76zm2.373-5.2h1.508C39.525 8 33.428 2.352 22.095 2.352S4.662 8 4.415 18.678h1.508a18.823 18.823 0 013.486-8.839c2.82-3.628 7.088-5.468 12.685-5.468s9.868 1.84 12.686 5.468a18.824 18.824 0 013.482 8.839z" data-name="Path 64"/></svg>)}
