import React, { useState, useEffect, ReactElement } from 'react';
import { getPeople } from '../../api';
import { IPerson } from '../../types';
import { AddPerson, PersonCard, Spinner, Panel } from '..';

export const PeoplePanel = (): ReactElement => {
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
    <Panel title="Użytkownicy">
      <AddPerson refetchPeople={fetchPeople} />
      {loading && <Spinner />}
      {people.map((person: IPerson) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </Panel>
  );
};
