import logoPng from "./assets/logo.png";
import heroVideoBg from "./assets/hero section video background.mp4";
import heroVideoPoster from "./assets/hero-video-poster.webp";
import forPublicFigurePhoto from "./assets/for puplic figure photo.webp";
import forArtistPhoto from "./assets/for artist photo.webp";
import forCorporatePhoto from "./assets/for coroporate photo.webp";
import moreThanStudio from "./assets/more than studio.webp";
import weHaveBeenThere from "./assets/we have been there.webp";
import talentSectionPhoto from "./assets/talent section phot.webp";
import digitalCinemaIcon from "./assets/Digital Cinema.png";
import digitalContentIcons from "./assets/digital content.png";
import musicProductionIcon from "./assets/music production icon.png";

export const ASSETS = {
  // Hero section
  heroVideoBg,
  heroVideoPoster,

  // Service cards (top row)
  forPublicFigurePhoto,
  forArtistPhoto,
  forCorporatePhoto,

  // Mid sections
  moreThanStudio,
  weHaveBeenThere,
  talentSectionPhoto,

  // “What we do” icons
  digitalCinemaIcon,
  digitalContentIcons,
  musicProductionIcon,

  // Nav / footer
  logo: logoPng,
} as const;

