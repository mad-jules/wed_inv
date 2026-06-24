import css from "./PopupComponent.module.css";
import { Icon, IconName } from "./Icon";
import { Location } from "@/constants/locations";

export interface PopUpContent {
  img: string;
  alt: string;
  title: string;
  subTitle: string;
  description: string;
  address: string;
  time: string;
}

export default function PopupComponent({ lat, lng, name, address }: Location) {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  const wazeUrl = `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`;

  return (
    <div className={css["popUpWrapper"]}>
      <h2 className={css["title"]}>{name}</h2>
      <div className={css["iconWrapper"]}>
        <Icon
          iconName={IconName.Map}
          className={css["icon"]}
          style={{ width: 24, height: 24 }}
        />
        <div className={css["address"]}>{address}</div>
      </div>
      <div className={css.actions}>
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={css.button}
        >
          Google Maps
        </a>

        <a
          href={wazeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={css.button}
        >
          Waze
        </a>
      </div>
    </div>
  );
}
