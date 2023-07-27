import React from "react";
import { Link } from "react-router-dom";
import { Checkbox67 } from "../../icons/Checkbox67";
import { Checkbox9 } from "../../icons/Checkbox9";
import { Icon122 } from "../../icons/Icon122";
import { Icon128 } from "../../icons/Icon128";
import { Icon129 } from "../../icons/Icon129";
import { Icon135 } from "../../icons/Icon135";
import { Icon143 } from "../../icons/Icon143";
import { Icon150 } from "../../icons/Icon150";
import { Icon38 } from "../../icons/Icon38";
import { Line4 } from "../../icons/Line4";
import { Search6 } from "../../icons/Search6";
import { Socials5 } from "../../icons/Socials5";
import "./style.css";

export const Screen6 = () => {
  return (
    <div className="screen-6">
      <div className="element-6">
        <div className="data-explorer-states">
          <div className="frame-75">
            <img className="image" alt="Image" src="/img/image-5.png" />
            <div className="frame-76">
              <h1 className="text-wrapper-99">Data Explorer</h1>
              <p className="text-wrapper-100">Use the Filters on the left to create custom tables.</p>
            </div>
            <div className="frame-77">
              <div className="filter-set-horiz">
                <div className="data-filter-headings">
                  <div className="text-wrapper-101">Data Explorer</div>
                  <p className="text-wrapper-102">Use the filters to create a custom query.</p>
                </div>
                <div className="div-6">
                  <div className="data-filter-headings">
                    <div className="text-wrapper-103">Select Data Set</div>
                    <p className="use-the-filters-to">Use the filters to select a Data Set</p>
                  </div>
                  <div className="filter-horiz">
                    <div className="frame-78">
                      <div className="text-wrapper-104">Data Set(s)</div>
                      <div className="text-wrapper-104">[1]</div>
                    </div>
                    <Icon143 className="icon-instance-node-3" color="#71767A" />
                  </div>
                  <div className="frame-79">
                    <div className="topic">
                      <div className="data-element-name">State Performance Reports (SPR)</div>
                      <Icon122 className="icon-51" />
                    </div>
                  </div>
                </div>
                <div className="div-6">
                  <div className="data-filter-headings">
                    <div className="text-wrapper-103">Select Years</div>
                    <p className="use-the-filters-to">Use the filters to select year(s)</p>
                  </div>
                  <div className="filter-horiz">
                    <div className="frame-78">
                      <div className="text-wrapper-104">Year(s)</div>
                      <div className="text-wrapper-104">[3]</div>
                    </div>
                    <Icon143 className="icon-instance-node-3" color="#71767A" />
                  </div>
                  <div className="frame-79">
                    <div className="topic-2">
                      <div className="data-element-name">2020</div>
                      <Icon122 className="icon-51" />
                    </div>
                    <div className="topic-3">
                      <div className="data-element-name">2021</div>
                      <Icon122 className="icon-51" />
                    </div>
                    <div className="topic-4">
                      <div className="data-element-name">2022</div>
                      <Icon122 className="icon-51" />
                    </div>
                  </div>
                  <div className="frame-80">
                    <div className="text-wrapper-105">Clear Selections</div>
                  </div>
                </div>
                <div className="div-6">
                  <div className="data-filter-headings">
                    <div className="text-wrapper-103">Select States &amp; Territories</div>
                    <p className="use-the-filters-to">Use the filters to select States &amp; Territories</p>
                  </div>
                  <div className="filter-horiz-2">
                    <div className="text-wrapper-106">States &amp; Territories</div>
                    <Icon143 className="icon-instance-node-3" color="var(--colors-primary-primary)" />
                  </div>
                </div>
                <div className="frame-81">
                  <div className="button-big-icon-4">
                    <div className="play-the-video-4">Run Query</div>
                    <Icon128 className="icon-52" />
                  </div>
                  <div className="text-wrapper-107">Clear All Selections</div>
                </div>
              </div>
              <div className="options-hoirz">
                <div className="frame-82">
                  <Icon129 className="icon-instance-node-3" />
                  <div className="data-filter-headings-2">
                    <div className="data-explorer">Select Geographic Area</div>
                  </div>
                </div>
                <div className="frame-83">
                  <div className="filter-horiz-3">
                    <div className="year-s">National</div>
                    <Icon143 className="icon-instance-node-3" color="var(--colors-primary-primary)" />
                  </div>
                  <div className="filter-horiz-4">
                    <div className="text-wrapper-106">States &amp; Territories</div>
                    <Icon143 className="icon-instance-node-3" color="var(--colors-primary-primary)" />
                  </div>
                  <div className="filter-horiz-3">
                    <div className="year-s">Tribal Organizations by Name</div>
                    <Icon143 className="icon-instance-node-3" color="var(--colors-primary-primary)" />
                  </div>
                  <div className="filter-horiz-3">
                    <div className="year-s">Tribal Organizations by State</div>
                    <Icon143 className="icon-instance-node-3" color="var(--colors-primary-primary)" />
                  </div>
                </div>
              </div>
              <div className="options-hoirz-2">
                <div className="frame-82">
                  <Icon129 className="icon-instance-node-3" />
                  <div className="data-filter-headings-2">
                    <div className="data-explorer-2">Select States &amp; Territories</div>
                  </div>
                </div>
                <div className="frame-84">
                  <div className="frame-85">
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">United States (National Data)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">All States and Territories</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">All Territories</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <p className="state-name-2">Select All States and Territories</p>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Alabama (AL)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Alaska (AK)</div>
                      </div>
                    </div>
                    <div className="topics-3">
                      <div className="check-label-info-2">
                        <Checkbox67 className="icon-instance-node-3" />
                        <div className="state-name-3">Arizona (AZ)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Arkansas (AR)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">California (CA)</div>
                      </div>
                    </div>
                    <div className="topics-3">
                      <div className="check-label-info-2">
                        <Checkbox67 className="icon-instance-node-3" />
                        <div className="state-name-3">Colorado (CO)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Connecticut (CT)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Delaware (DE)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">District of Columbia (DC)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Florida (FL)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Georgia (GA)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Hawaii (HI)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Idaho (ID)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Illinois (IL)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Indiana (IN)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Iowa (IA)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Kansas (KS)</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-85">
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Kentucky (KY)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Louisiana (LA)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Maine (ME)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Maryland (MD)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Massachusetts (MA)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Michigan (MI)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Minnesota (MN)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Mississippi (MS)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Missouri (MO)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Montana (MT)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Nebraska (NE)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Nevada (NV)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">New Hampshire (NH)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">New Jersey (NJ)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">New Mexico (NM)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">New York (NY)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">North Carolina (NC)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">North Dakota (ND)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">North Dakota (ND)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Ohio (OH)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Oklahoma (OK)</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-85">
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Oregon (OR)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Pennsylvania (PA)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Rhode Island (RI)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">South Carolina (SC)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">South Dakota (SD)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Tennessee (TN)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Texas (TX)</div>
                      </div>
                    </div>
                    <div className="topics-3">
                      <div className="check-label-info-2">
                        <Checkbox67 className="icon-instance-node-3" />
                        <div className="state-name-3">Utah (UT)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Vermont (VT)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Virginia (VA)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Washington (WA)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">West Virginia (WV)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Wisconsin (WI)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Wyoming (WY)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">American Samoa (AS)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Guam (GU)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Northern Mariana Islands (MP)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Puerto Rico (PR)</div>
                      </div>
                    </div>
                    <div className="topics-2">
                      <div className="check-label-info-2">
                        <Checkbox9 className="icon-instance-node-3" />
                        <div className="state-name">Virgin Islands (VI)</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-86">
                  <div className="text-wrapper-107">Clear Selections</div>
                  <div className="button-big-icon-5">
                    <div className="play-the-video-4">Confirm</div>
                    <Icon135 className="icon-52" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-4">
            <div className="primary-links-4">
              <div className="footer-primary-link-4">
                <div className="text-wrapper-108">Legal</div>
              </div>
              <div className="footer-primary-link-4">
                <div className="text-wrapper-108">Accessibility</div>
              </div>
              <div className="footer-primary-link-4">
                <div className="text-wrapper-108">Privacy</div>
              </div>
              <div className="footer-primary-link-4">
                <div className="text-wrapper-108">Cookies</div>
              </div>
              <div className="footer-primary-link-4">
                <div className="text-wrapper-108">Account</div>
              </div>
            </div>
            <div className="ACL-3">
              <div className="contact-4">
                <Socials5 className="socials-5" />
                <div className="agency-contact-4">
                  <div className="text-wrapper-109">Contact</div>
                  <div className="group-20">
                    <div className="frame-87">
                      <div className="text-wrapper-110">(202) 401-4634</div>
                      <div className="text-wrapper-110">info@gov.gov</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="site-map-4">
              <div className="frame-88">
                <div className="column-6">
                  <div className="column-6">
                    <div className="column-7">
                      <div className="discover-4">
                        <div className="text-wrapper-111">Programs</div>
                        <div className="footer-link-6">
                          <div className="footer-link-7">All Programs</div>
                        </div>
                        <div className="footer-link-6">
                          <div className="footer-link-7">Center for Independent Living</div>
                        </div>
                        <div className="footer-link-6">
                          <div className="footer-link-7">Independent Living Services</div>
                        </div>
                        <div className="footer-link-6">
                          <p className="footer-link-7">Title III - State Programs</p>
                        </div>
                        <div className="footer-link-6">
                          <p className="footer-link-7">Title VI - Native Americans</p>
                        </div>
                        <div className="footer-link-6">
                          <p className="footer-link-7">Title VII - Long Term Care Ombudsman</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-89">
                <div className="column-6">
                  <div className="discover-4">
                    <div className="text-wrapper-111">Topics</div>
                    <div className="footer-link-6">
                      <div className="footer-link-7">Topic Navigator</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-88">
                <div className="column-6">
                  <div className="column-6">
                    <div className="discover-4">
                      <div className="text-wrapper-111">Data</div>
                      <div className="footer-link-6">
                        <div className="footer-link-7">About&nbsp;&nbsp;the Data</div>
                      </div>
                      <div className="footer-link-6">
                        <div className="footer-link-7">Data Products</div>
                      </div>
                      <div className="footer-link-6">
                        <div className="footer-link-7">Data Sets</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-89">
                <div className="column-6">
                  <div className="discover-4">
                    <div className="text-wrapper-111">Data Tools</div>
                    <div className="footer-link-6">
                      <p className="footer-link-7">How to Use Data Tools</p>
                    </div>
                    <div className="footer-link-6">
                      <div className="footer-link-7">Compare Data</div>
                    </div>
                    <div className="footer-link-6">
                      <div className="footer-link-7">Data Maps</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-89">
                <div className="column-6">
                  <div className="discover-4">
                    <div className="text-wrapper-111">New &amp; Resources</div>
                    <div className="footer-link-6">
                      <p className="footer-link-7">News / Briefs / Fact Sheets</p>
                    </div>
                    <div className="footer-link-6">
                      <div className="footer-link-7">Release Notes</div>
                    </div>
                    <div className="footer-link-6">
                      <div className="footer-link-7">Tutorials</div>
                    </div>
                    <div className="footer-link-6">
                      <div className="footer-link-7">Webinars</div>
                    </div>
                    <div className="footer-link-6">
                      <div className="footer-link-7">FAQ</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="identifier-default-4">
              <div className="frame-90">
                <div className="frame-91">
                  <div className="frame-92">
                    <div className="text-wrapper-112">Accessibility support</div>
                  </div>
                  <div className="frame-92">
                    <div className="text-wrapper-112">FOIA requests</div>
                    <div className="text-wrapper-113">No FEAR Act data</div>
                  </div>
                  <div className="frame-92">
                    <p className="text-wrapper-112">Office of the Inspector General</p>
                    <div className="text-wrapper-113">Performance reports</div>
                  </div>
                  <div className="text-wrapper-112">Privacy Policy</div>
                </div>
                <p className="looking-for-u-s-4">
                  <span className="text-wrapper-114">
                    Looking for U.S. government information and services?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="text-wrapper-115">Visit USA.gov</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-93">
          <p className="home-programs-center-4">Home&nbsp;&nbsp;&gt;&nbsp;&nbsp;Data Explorer</p>
        </div>
        <div className="header-7">
          <div className="top-banner-6">
            <div className="banner-content-7">
              <img className="us-flag-small-7" alt="Us flag small" src="/img/us-flag-small.png" />
              <div className="content-10">
                <p className="text-wrapper-116">An official website of the United States government</p>
                <div className="here-s-how-you-know-6">
                  <div className="overlap-group-11">
                    <div className="text-wrapper-117">Here’s how you know</div>
                    <Icon38 className="icon-53" color="var(--colors-primary-primary)" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="top-menu-6">
          <div className="right-side-menu-6 logo-img">
            <div className="nav-link-20">
                <div className="frame-94">
                  <img src="/img/logo.png" alt="" className="coverImg" />
                </div>
              </div>
              </div>
            <div className="right-side-menu-6">
              <div className="nav-link-20">
                <div className="frame-94">
                  <div className="link-7">Help</div>
                </div>
              </div>
              <Link className="nav-link-20" to="/08">
                <div className="frame-94">
                  <div className="link-7">Contact</div>
                </div>
              </Link>
            </div>
          </div>
          <div className="logo-and-search-7">
            <div className="text-wrapper-118">Administration</div>
            <div className="quick-search-7">
              <div className="text-wrapper-119">Quick Search</div>
              <Search6 className="search-2" />
            </div>
          </div>
          <div className="main-menu-12">
            <Line4 className="line-6" />
            <Line4 className="line-6" />
            <div className="main-menu-12">
              <Line4 className="line-6" />
              <Line4 className="line-6" />
              <div className="main-menu-12">
                <Line4 className="line-6" />
                <div className="main-menu-13">
                  <div className="menu-7">
                    <Link className="nav-link-21" to="/01-home-page">
                      <div className="frame-95">
                        <div className="section-9">Home</div>
                      </div>
                    </Link>
                    <Link className="nav-link-12" to="/06">
                      <div className="frame-35">
                        <div className="section-6">Release Notes</div>
                      </div>
                    </Link>
                    <div className="nav-link-21">
                      <div className="frame-95">
                        <div className="section-9">Search by Topics</div>
                        <Icon150 className="icon-51" color="#565C65" />
                      </div>
                    </div>
                    <Link className="nav-link-12" to="/05">
                      <div className="frame-35">
                        <div className="section-6">Data Sets</div>
                      </div>
                    </Link>
                    <div className="nav-link-21">
                      <div className="frame-95">
                        <div className="section-9">Data Explorer</div>
                      </div>
                    </div>
                    <div className="nav-link-21">
                      <div className="frame-95">
                        <div className="section-9">Reports</div>
                        <Icon150 className="icon-51" color="#565C65" />
                      </div>
                    </div>
                    <Link className="nav-link-12" to="/09">
                      <div className="frame-35">
                        <div className="section-6">FAQ</div>
                      </div>
                    </Link>
                  </div>
                </div>
                <Line4 className="line-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
