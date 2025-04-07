import React from "react";
import {
  Section,
  SourceColumn,
  SourceLink,
  SourceItem,
  SourceTitle,
  SourceNumber,
  SourceGrid,
} from "../assets/styles";
import { FiExternalLink } from "react-icons/fi";

const Sources = () => {
  return (
    <div id="sources">
      <Section>
        <h2>Sources & References</h2>
        <SourceGrid>
          {/* Column 1 */}
          <SourceColumn>
            <SourceItem>
              <SourceNumber>1</SourceNumber>
              <div>
                <SourceTitle>U.S. Trade Representative</SourceTitle>
                <SourceLink
                  href="https://ustr.gov"
                  target="_blank"
                  rel="noreferrer"
                >
                  ustr.gov <FiExternalLink size={12} />
                </SourceLink>
              </div>
            </SourceItem>

            <SourceItem>
              <SourceNumber>2</SourceNumber>
              <div>
                <SourceTitle>IMF World Economic Outlook</SourceTitle>
                <SourceLink
                  href="https://imf.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  imf.org <FiExternalLink size={12} />
                </SourceLink>
              </div>
            </SourceItem>
          </SourceColumn>

          {/* Column 2 */}
          <SourceColumn>
            <SourceItem>
              <SourceNumber>3</SourceNumber>
              <div>
                <SourceTitle>World Bank Trade Data</SourceTitle>
                <SourceLink
                  href="https://worldbank.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  worldbank.org <FiExternalLink size={12} />
                </SourceLink>
              </div>
            </SourceItem>

            <SourceItem>
              <SourceNumber>4</SourceNumber>
              <div>
                <SourceTitle>OECD Economic Surveys</SourceTitle>
                <SourceLink
                  href="https://oecd.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  oecd.org <FiExternalLink size={12} />
                </SourceLink>
              </div>
            </SourceItem>
          </SourceColumn>

          {/* Column 3 */}
          <SourceColumn>
            <SourceItem>
              <SourceNumber>5</SourceNumber>
              <div>
                <SourceTitle>Bloomberg Economics</SourceTitle>
                <SourceLink
                  href="https://bloomberg.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  bloomberg.com <FiExternalLink size={12} />
                </SourceLink>
              </div>
            </SourceItem>

            <SourceItem>
              <SourceNumber>6</SourceNumber>
              <div>
                <SourceTitle>WTO Trade Monitoring</SourceTitle>
                <SourceLink
                  href="https://wto.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  wto.org <FiExternalLink size={12} />
                </SourceLink>
              </div>
            </SourceItem>
          </SourceColumn>
        </SourceGrid>
      </Section>
    </div>
  );
};

export default Sources;
