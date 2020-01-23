import React from "react";

function AdvertisedActivities() {
  return (
    <div>
      <div className="advertised">
        <div className="advertisedRow">
          <div className="advertisedColumn upVoteableImage">
            <img
              className="GroupImage"
              src="https://www.insidesport.co/wp-content/uploads/2020/01/nfl.jpg"
              alt="activity type"
              width="100%"
            />
            <img
              className="upVoteArrow"
              src="images/Arrow.png"
              alt="Up Vote Arrow"
              width="15px"
              // onClick={this.state.UpVote()}
            />
            <p className="upVoteCount">575</p>
          </div>
          <div className="advertisedColumn upVoteableImage">
            <img
              className="GroupImage"
              src="https://www.insidesport.co/wp-content/uploads/2020/01/nfl.jpg"
              alt="activity type"
              width="100%"
            />
            <img
              className="upVoteArrow"
              src="images/Arrow.png"
              alt="Up Vote Arrow"
              width="15px"
              // onClick={this.state.UpVote()}
            />
            <p className="upVoteCount">575</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvertisedActivities;
