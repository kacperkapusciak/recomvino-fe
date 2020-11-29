import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { Accordion, AccordionDetails, AccordionSummary, Card, Typography } from '@material-ui/core';
import { ExpandMoreTwoTone } from '@material-ui/icons';
import { Spinner, Detail } from '..';
import { IWine } from '../../types';
import { getWine } from '../../api';

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface RecommendationProps {
  id: string;
  name: string;
}

export const Recommendation = ({ id, name }: RecommendationProps): ReactElement => {
  const [expanded, setExpanded] = useState(false);
  const [details, setDetails] = useState<IWine>();
  const [loading, setLoading] = useState(false);

  const handleExpanded = () => {
    setExpanded((pervState) => !pervState);
    fetchDetails(id);
  };

  const fetchDetails = async (wineId: string) => {
    setLoading(true);
    try {
      const { data } = await getWine({ wineId });
      setDetails(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card style={{ marginBottom: 16 }}>
      <Accordion style={{ padding: 8 }} expanded={expanded} onChange={handleExpanded}>
        <AccordionSummary expandIcon={<ExpandMoreTwoTone />} id={`accordion-${id}`}>
          <Typography style={{ fontSize: 18 }}>{name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {loading ? (
            <Spinner />
          ) : (
            details && (
              <Flex>
                <Detail label="gatunek" body={details.brand} />
                <Detail label="smak" body={details.flavor} />
                <Detail label="cena" body={`${details.price} ,-`} />
              </Flex>
            )
          )}
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};
