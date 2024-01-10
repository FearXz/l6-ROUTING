import ProfileHeader from "./ProfileHeader";
import ProfileMain from "./ProfileMain";

function Profile(props) {
  return (
    <>
      <div className="bg-darkgray" data-bs-theme="dark">
        <ProfileHeader callbackDetailPage={props.callbackDetailPage} />
        <ProfileMain />
      </div>
    </>
  );
}

export default Profile;
