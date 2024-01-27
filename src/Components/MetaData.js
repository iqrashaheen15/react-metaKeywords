import React, { useState } from "react";

const MetaData = () => {
  const [metaData, setMetaData] = useState([
    { page: 1, start_time: 0 },
    { page: 2, start_time: 16 },
    { page: 4, start_time: 56 },
    { page: 6, start_time: 66 },
    { page: 8, start_time: 108 },
    { page: 10, start_time: 129 },
    { page: 12, start_time: 159 },
    { page: 14, start_time: 168 },
    { page: 16, start_time: 194 },
    { page: 18, start_time: 214 },
    { page: 20, start_time: 233 },
    { page: 22, start_time: 238 },
    { page: 24, start_time: 251 },
    { page: 26, start_time: 280 },
    { page: 28, start_time: 295 },
    { page: 30, start_time: 319 },
    { page: 32, start_time: 321 },
  ]);

// Function to handle page changes
const handlePageChange = (index, value) => {
    const newPage = +value; 
    if (!isNaN(newPage)) { 
      const newList = [...metaData];
      newList[index].page = newPage;
      setMetaData(newList);
      console.log(newList);
      
    }
  };
  

  // Function to handle start_time changes
  const handleStartTimeChange = (index, value) => {
    const newTime = +value; 
    if (!isNaN(newTime)) { 
    const newList = [...metaData];
    newList[index].start_time = newTime;
    setMetaData(newList);
    console.log(newList);
   
    }
  };

  // Function to remove a metadata field
  const handleRemoveMetadataField = (index) => {
    const newList = [...metaData];
    newList.splice(index, 1);
    setMetaData(newList);
  };

  return (
    <div className="px-10">
      {metaData.map((metadata, index) => (
        <div key={index}>
          <div className="flex flex-row gap-6">
            <div className="w-1/2 my-3">
              <label htmlFor={`page-${index}`}>Page:</label>
              <input
                type="text"
                id={`page-${index}`}
                name={`page-${index}`}
                placeholder="Enter page number"
                value={metadata.page}
                className="h-10 w-full px-2 rounded-md outline-none mt-4 bg-[#F5F5F5]"
                onChange={(e) => handlePageChange(index, e.target.value)}
              />
            </div>
            <div className="w-1/2 my-3">
              <label htmlFor={`start_time-${index}`}>Start Time:</label>
              <input
                type="text"
                id={`start_time-${index}`}
                name={`start_time-${index}`}
                placeholder="Enter start time"
                value={metadata.start_time}
                className="h-10 w-full px-2 rounded-md outline-none mt-4 bg-[#F5F5F5]"
                onChange={(e) => handleStartTimeChange(index, e.target.value)}
              />
            </div>
            <button
              type="button"
              className="mt-6 text-[#DB3558]"
              onClick={() => handleRemoveMetadataField(index)}
            >
              &times;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetaData;
