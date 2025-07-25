import { profile } from "../data/profile";
import Image from "next/image";
import InfoCard from "../components/InfoCard";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center py-12 gap-8 bg-background">
      <div className="flex flex-row items-start justify-center w-full max-w-4xl gap-10">
        <div className="flex-shrink-0 pl-4 pr-8">
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={200}
            height={200}
            className="rounded-full border-4 border-primary shadow-lg bg-white"
          />
        </div>
        <div className="flex flex-col gap-6 items-start w-full max-w-md">
          <InfoCard
            content={
              <div className="profileCardContent">
                <span className="profileName">{profile.name}</span>
                <span className="profileTitle">{profile.title}</span>
                <span className="profileDescription">
                  {profile.description}
                </span>
              </div>
            }
          />
        </div>
      </div>
      {profile.about && (
        <div className="flex justify-center mt-4">
          <InfoCard
            content={<span className="aboutCardContent">{profile.about}</span>}
          />
        </div>
      )}
      <div className="flex gap-4 justify-center mt-6">
        <InfoCard content={profile.social.github} />
        <InfoCard content={profile.social.linkedin} />
        <InfoCard content={profile.social.twitter} />
      </div>
    </section>
  );
}
