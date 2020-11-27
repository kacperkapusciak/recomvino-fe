import React, { useState, useEffect, ReactElement, Dispatch } from 'react';
import { getPeople } from '../../api';
import { IPerson } from '../../types';
import { AddPerson, PersonCard, Spinner, Panel } from '..';

interface PeoplePanelProps {
  currentPerson: IPerson;
  setCurrentPerson: Dispatch<IPerson>;
}

export const PeoplePanel = ({ currentPerson, setCurrentPerson }: PeoplePanelProps): ReactElement => {
  const [people, setPeople] = useState<IPerson[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPeople = async () => {
    setLoading(true);
    try {
      const { data } = await getPeople();
      setPeople(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <Panel title="People">
      <AddPerson refetchPeople={fetchPeople} />
      {loading && <Spinner />}
      {people.map((person: IPerson) => (
        <PersonCard key={person.id} person={person} currentPerson={currentPerson} onClick={setCurrentPerson} />
      ))}
    </Panel>
  );
};
