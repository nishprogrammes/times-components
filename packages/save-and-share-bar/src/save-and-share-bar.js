import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import {
  IconEmail,
  IconFacebook,
  IconTwitter,
  IconCopyLink,
  IconSaveBookmark
} from "@times-components/icons";
import SharingApiUrls from "./constants";
import styles from "./styles";
import BarItem from "./bar-item";

const SaveAndShareBar = ({
  articleUrl,
  onCopyLink,
  onSaveToMyArticles,
  onShareOnEmail
}) => (
  <View style={styles.container}>
    <View style={styles.rowItem}>
      <Text style={styles.label}>Share</Text>
      <BarItem onPress={onShareOnEmail}>
        <IconEmail
          fillColour="currentColor"
          height={styles.svgIcon.height}
          title="Share by email client"
        />
      </BarItem>
      <BarItem
        target="_blank"
        url={`${SharingApiUrls.twitter}?text=${articleUrl}`}
      >
        <IconTwitter
          fillColour="currentColor"
          height={styles.svgIcon.height}
          title="Share on Twitter"
        />
      </BarItem>
      <BarItem
        target="_blank"
        url={`${SharingApiUrls.facebook}?text=${articleUrl}`}
      >
        <IconFacebook
          fillColour="currentColor"
          height={styles.svgIcon.fb.height}
          title="Share on Facebook"
        />
      </BarItem>
      <BarItem onPress={onCopyLink}>
        <IconCopyLink
          fillColour="currentColor"
          height={styles.svgIcon.height}
          title="Copy link to clipboard"
        />
      </BarItem>
    </View>
    <View style={styles.rowItem}>
      <Text style={styles.label}>Save</Text>
      <BarItem onPress={onSaveToMyArticles}>
        <IconSaveBookmark
          fillColour={styles.svgIcon.save.fillColour}
          strokeColour="currentColor"
          title="Save to My Articles"
        />
      </BarItem>
    </View>
  </View>
);

SaveAndShareBar.propTypes = {
  articleUrl: PropTypes.string.isRequired,
  onCopyLink: PropTypes.func.isRequired,
  onSaveToMyArticles: PropTypes.func.isRequired,
  onShareOnEmail: PropTypes.func.isRequired
};

export default SaveAndShareBar;
