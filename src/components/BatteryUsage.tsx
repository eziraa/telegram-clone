import React from "react";
import { BsArrowsExpand, BsEmojiWink } from "react-icons/bs";
import { Toggle } from "./Toggle";
import { Checkbox } from "./Checkbox";
import { IoCall } from "react-icons/io5";
import { Button } from "./Button";

export const BatteryUsage = () => {
  return (
    <div className="battery-usage">
      <div className="header">
        <h3 className="header__text">Power Usage</h3>
      </div>
      <div className="battery-usage__body">
        <div className="section">
          <div className="section__power-saving-options">
            <h3 className="header">Power saving options</h3>
            <div className="section-item">
              <div className="option">
                <div className="outer">
                  <BsEmojiWink />

                  <p className="title">
                    Animated stickers <span className="value">2</span>/{" "}
                    <span className="total">2</span>
                  </p>
                  <BsArrowsExpand />
                </div>
                <div className="inner">
                  <div className="item">
                    <Checkbox />
                    <p className="title">Autoplay in panel</p>
                  </div>
                  <div className="item">
                    <Checkbox />
                    <p className="title">Autoplay in chat</p>
                  </div>
                </div>
              </div>
              <Toggle />
            </div>

            <div className="section-item">
              <div className="option">
                <div className="outer">
                  <BsEmojiWink />

                  <p className="title">
                    Animated Emoji <span className="value">4</span>/{" "}
                    <span className="total">4</span>
                  </p>
                  <BsArrowsExpand />
                </div>
                <div className="inner">
                  <div className="item">
                    <Checkbox />
                    <p className="title">Autoplay in panel</p>
                  </div>
                  <div className="item">
                    <Checkbox />
                    <p className="title">Autoplay in reactions menu</p>
                  </div>

                  <div className="item">
                    <Checkbox />
                    <p className="title">Autoplay in messages</p>
                  </div>
                  <div className="item">
                    <Checkbox />
                    <p className="title">Autoplay in premium status</p>
                  </div>
                </div>
              </div>
              <Toggle />
            </div>
            <div className="section-item">
              <div className="option">
                <div className="outer">
                  <BsEmojiWink />

                  <p className="title">
                    Animation in Chats <span className="value">2</span>/{" "}
                    <span className="total">2</span>
                  </p>
                  <BsArrowsExpand />
                </div>
                <div className="inner">
                  <div className="item">
                    <Checkbox />
                    <p className="title">Wallpaper rotation</p>
                  </div>
                  <div className="item">
                    <Checkbox />
                    <p className="title">Animated spoiler effect</p>
                  </div>
                </div>
              </div>
              <Toggle />
            </div>
            <div className="section-item">
              <IoCall className="icon" />
              <p className="title">Animation in Calls</p>
              <Toggle />
            </div>
            <div className="section-item">
              <IoCall className="icon" />
              <p className="title">Interface animation</p>
              <Toggle />
            </div>
          </div>
          <div className="section__save-power">
            <div className="section-item">
              <p className="title">Save Power on low Battery</p>
              <Toggle />
            </div>
          </div>
          <div className="section__footer">
            <div className="section-item">
              <p className="footer-text">
                Automatically disable all animations when your laptop is in a
                battery saving mode
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="section-item">
          <Button text="Cancel" />
          <Button text="Save" />
        </div>
      </div>
    </div>
  );
};
