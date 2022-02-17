import React from 'react';

const Profile = ({ hike, list }) => {
  if (!profiles.length) {
    return <h3>No Hikes or Comments yet!</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{hike}</h3>
      <div className="flex-row justify-space-between my-4">
        {profiles &&
          profiles.map((profile) => (
            <div key={profile._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {profile.name} <br />
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    currently hiked {profile.list ? profile.list.length : 0}{' '}
                    trails
                    {profile.hikes && profile.list.length === 1 ? '' : 's'}
                  </span>
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Profile;
