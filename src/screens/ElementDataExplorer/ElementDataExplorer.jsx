import React from "react";
import { ButtonBigIcon } from "../../components/ButtonBigIcon";
import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
import { DataFilterHeadings } from "../../components/DataFilterHeadings";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Icon } from "../../components/Icon";
import { Topic } from "../../components/Topic";
import { Topics } from "../../components/Topics";
import "./style.css";

export const ElementDataExplorer = () => {
  return (
    <div className="element-data-explorer">
      <div className="div-14">
        <div className="data-explorer-states">
          <div className="frame-105">
            <div className="frame-106">
              <h1 className="text-wrapper-56">Data Explorer</h1>
              <p className="text-wrapper-57">Use the Filters on the left to create custom tables.</p>
            </div>
            <div className="frame-107">
              <div className="filter-set-horiz">
                <DataFilterHeadings className="design-component-instance-node-7" level="one" />
                <div className="div-15">
                  <DataFilterHeadings
                    className="design-component-instance-node-7"
                    level="two"
                    text="Use the filters to select a Data Set"
                  />
                  <div className="filter-horiz">
                    <div className="frame-108">
                      <div className="text-wrapper-58">Data Set(s)</div>
                      <div className="text-wrapper-58">[1]</div>
                    </div>
                    <Icon icon="arrow-forward" />
                  </div>
                  <div className="frame-109">
                    <Topic text="State Performance Reports (SPR)" type="element" />
                  </div>
                </div>
                <div className="div-15">
                  <DataFilterHeadings
                    className="design-component-instance-node-7"
                    level="two"
                    text="Use the filters to select year(s)"
                    text1="Select Years"
                  />
                  <div className="filter-horiz">
                    <div className="frame-108">
                      <div className="text-wrapper-58">Year(s)</div>
                      <div className="text-wrapper-58">[3]</div>
                    </div>
                    <Icon icon="arrow-forward" />
                  </div>
                  <div className="frame-109">
                    <Topic className="topic-9" text="2020" type="element" />
                    <Topic className="topic-10" text="2021" type="element" />
                    <Topic className="topic-11" text="2022" type="element" />
                  </div>
                  <div className="frame-110">
                    <div className="text-wrapper-59">Clear Selections</div>
                  </div>
                </div>
                <div className="div-15">
                  <DataFilterHeadings
                    className="design-component-instance-node-7"
                    level="two"
                    text="Use the filters to select States &amp; Territories"
                    text1="Select States &amp; Territories"
                  />
                  <div className="filter-horiz-2">
                    <div className="text-wrapper-60">States &amp; Territories</div>
                    <Icon icon="arrow-forward" />
                  </div>
                </div>
              </div>
              <div className="options-hoirz">
                <div className="frame-111">
                  <Icon icon="arrow-back" />
                  <DataFilterHeadings
                    className="data-filter-headings-2"
                    dataExplorerClassName="data-filter-headings-instance"
                    hasUseTheFiltersTo={false}
                    level="one"
                    text2="Select Geographic Area"
                  />
                </div>
                <div className="frame-112">
                  <div className="filter-horiz-3">
                    <div className="year-s">National</div>
                    <Icon icon="arrow-forward" />
                  </div>
                  <div className="filter-horiz-4">
                    <div className="text-wrapper-60">States &amp; Territories</div>
                    <Icon icon="arrow-forward" />
                  </div>
                  <div className="filter-horiz-3">
                    <div className="year-s">Tribal Organizations by Name</div>
                    <Icon icon="arrow-forward" />
                  </div>
                  <div className="filter-horiz-3">
                    <div className="year-s">Tribal Organizations by State</div>
                    <Icon icon="arrow-forward" />
                  </div>
                </div>
              </div>
              <div className="options-hoirz-2">
                <div className="frame-111">
                  <Icon icon="arrow-back" />
                  <DataFilterHeadings
                    className="data-filter-headings-2"
                    dataExplorerClassName="data-filter-headings-3"
                    hasUseTheFiltersTo={false}
                    level="one"
                    text2="Select States &amp; Territories"
                  />
                </div>
                <div className="frame-113">
                  <div className="frame-114">
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="United States (National Data)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="All States and Territories"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="All Territories"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      stateIndependentClassName="checkbox-instance-wrapper"
                      text="Select All States and Territories"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Alabama (AL)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Alaska (AK)"
                    />
                    <Topics
                      className="topics-4"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected />}
                      info={false}
                      level="state"
                      selected
                      text="Arizona (AZ)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Arkansas (AR)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="California (CA)"
                    />
                    <Topics
                      className="topics-4"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected />}
                      info={false}
                      level="state"
                      selected
                      text="Colorado (CO)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Connecticut (CT)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Delaware (DE)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="District of Columbia (DC)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Florida (FL)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Georgia (GA)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Hawaii (HI)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Idaho (ID)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Illinois (IL)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Indiana (IN)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Iowa (IA)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Kansas (KS)"
                    />
                  </div>
                  <div className="frame-114">
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Kentucky (KY)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Louisiana (LA)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Maine (ME)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Maryland (MD)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Massachusetts (MA)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Michigan (MI)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Minnesota (MN)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Mississippi (MS)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Missouri (MO)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Montana (MT)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Nebraska (NE)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Nevada (NV)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="New Hampshire (NH)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="New Jersey (NJ)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="New Mexico (NM)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="New York (NY)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="North Carolina (NC)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="North Dakota (ND)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="North Dakota (ND)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Ohio (OH)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Oklahoma (OK)"
                    />
                  </div>
                  <div className="frame-114">
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Oregon (OR)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Pennsylvania (PA)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Rhode Island (RI)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="South Carolina (SC)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="South Dakota (SD)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Tennessee (TN)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Texas (TX)"
                    />
                    <Topics
                      className="topics-4"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected />}
                      info={false}
                      level="state"
                      selected
                      text="Utah (UT)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Vermont (VT)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Virginia (VA)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Washington (WA)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="West Virginia (WV)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Wisconsin (WI)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Wyoming (WY)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="American Samoa (AS)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Guam (GU)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Northern Mariana Islands (MP)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Puerto Rico (PR)"
                    />
                    <Topics
                      className="checkbox-wrapper"
                      dataAvailable="yes"
                      expanded={false}
                      icon={<ConcreteComponentNode selected={false} />}
                      info={false}
                      level="state"
                      selected={false}
                      text="Virgin Islands (VI)"
                    />
                  </div>
                </div>
                <div className="frame-115">
                  <div className="text-wrapper-61">Clear Selections</div>
                  <ButtonBigIcon
                    className="icon-instance-wrapper"
                    icon={<Icon icon="check" />}
                    playTheVideoClassName="button-big-icon-3"
                    size="big-icon"
                    state="default"
                    text="Confirm"
                  />
                </div>
              </div>
            </div>
          </div>
          <Footer
            className="design-component-instance-node-7"
            hasReturnToTop={false}
            icon={<Icon icon="facebook" />}
            icon1={<Icon icon="youtube" />}
            icon2={<Icon icon="instagram" />}
            icon3={<Icon icon="rss-feed" />}
            override={<Icon icon="twitter" />}
          />
        </div>
        <div className="home-data-explorer-wrapper">
          <p className="home-data-explorer">Home&nbsp;&nbsp;&gt;&nbsp;&nbsp;Data Explorer</p>
        </div>
        <Header
          breadcrumbs="off"
          className="header-19"
          groupClassName="header-22"
          navLinkText="FAQ"
          navLinkVisible={false}
          navLinkVisible1={false}
          quickSearchSearchGroupClassName="header-20"
          quickSearchSearchOverlapClassName="header-21"
          to="/09-contact"
          to1="/01-home-page"
          to2="/07-release-notes"
          to3="/03-data-set-3"
          to4="/08-data-explorer"
          to5="/10-glossary"
          version="MVP"
        />
        <div className="frame-116">
          <img className="coverimage-5" alt="Coverimage" />
          <div className="text-wrapper-62">Figma</div>
        </div>
      </div>
    </div>
  );
};
