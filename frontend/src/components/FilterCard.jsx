import React, { useEffect, useState } from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';

const filterData = [
  {
    filterType: 'Location',
    array: ['Delhi NCR', 'Bangalore', 'Hyderabad', 'Pune', 'Mumbai'],
  },
  {
    filterType: 'Industry',
    array: ['Frontend Developer', 'Backend Developer', 'FullStack Developer'],
  },
  {
    filterType: 'Salary',
    array: ['0-40k', '42-1lakh', '1lakh to 5lakh'],
  },
];

const FilterCard = () => {
  const dispatch = useDispatch();

  // Maintain selected values per category, initialize empty strings
  const [selectedValues, setSelectedValues] = useState(() => {
    const initial = {};
    filterData.forEach((f) => (initial[f.filterType] = ''));
    return initial;
  });

  // Handle changes for each filter category
  const changeHandler = (filterType, value) => {
    setSelectedValues((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  // Dispatch combined query string or object - here, just join for demo
  useEffect(() => {
    // Example: join all selected values as a single string separated by commas
    const query = Object.values(selectedValues)
      .filter(Boolean) // remove empty strings
      .join(', ');

    dispatch(setSearchedQuery(query));
  }, [selectedValues, dispatch]);

  return (
    <div className="w-full max-w-md mx-auto bg-white p-4 rounded-md shadow-md">
      <h1 className="font-bold text-xl mb-4">Filter Jobs</h1>
      <div className="space-y-6">
        {filterData.map(({ filterType, array }) => (
          <div key={filterType}>
            <h2 className="font-semibold text-lg mb-2">{filterType}</h2>
            <RadioGroup
              value={selectedValues[filterType]}
              onValueChange={(value) => changeHandler(filterType, value)}
              className="flex flex-wrap gap-4"
            >
              {array.map((item, idx) => {
                const itemId = `${filterType}-${idx}`;
                return (
                  <div
                    className="flex items-center space-x-2"
                    key={itemId}
                  >
                    <RadioGroupItem value={item} id={itemId} />
                    <Label htmlFor={itemId}>{item}</Label>
                  </div>
                );
              })}
            </RadioGroup>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterCard;
