// redux
import { useDispatch } from "react-redux";
import { setShowModalVal, handleEditOrAdd } from "../../Redux/DataSlice";

// graph
import { useQuery } from "@apollo/client";
// react hooks
import { useEffect, useState } from "react";
// queries
import { GET_EMP } from "../../queries";
// components
import PaginationControlled from "./PaginationControlled";
import DeleteModal from "../../components/Employess/DeleteModal";
import EmployeeCard from "./EmployeeCard/EmployeeCard";
import Search from "../search/Search";
import NewEmploee from "../NewEmploeeData/NewEmploee";

// libraries components
import { Spinner } from "flowbite-react";
import { Button } from "flowbite-react";

const EmployeeList = () => {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  const [searchedData, setSearched] = useState("");

  const [currentPage, setCurrentPge] = useState(1);
  const [empPerPage] = useState(20);

  const { loading, data, refetch } = useQuery(GET_EMP, {
    variables: {
      currentPage: currentPage,
      input: { name: searchedData },
    },
    fetchPolicy: "no-cache",
  });
  // setting the current page
  useEffect(() => {
    if (loading === false && data) {
      setCurrentPge(data?.company_users?.paginatorInfo.currentPage);
    }
  }, [data, loading]);

  // handle current page
  const page = (num) => setCurrentPge(num);

  // handle id
  const [id, setId] = useState("");
  const handleId = (val) => {
    setId(val);
  };

  // s e a r ch
  const handleSearch = (val) => {
    setSearched(val);
    // reset upon search
    setCurrentPge(1);
  };

  // m o d a l   h a n d l i n g
  const modal = () => {
    dispatch(setShowModalVal(true));
    // setShowForm(true)
    dispatch(handleEditOrAdd("add"));
  };

  const showFormHandling = (value) => {
    setShowForm(value);
  };

  return (
    <main className="h-fit  relative">
      <div className=" flex mb-12 px-1 md:px-4 lg:px-9">
        <Search handleSearch={handleSearch} value={searchedData} />
        <div>
          <Button onClick={modal}>+ Add new</Button>
        </div>
        <NewEmploee
          updateList={refetch}
          emps={data?.company_users?.data}
          id={id}
          // showFormHandling={showFormHandling}
        />
        <DeleteModal updateList={refetch} id={id} />
      </div>
      {loading ? (
        <div className="text-center main-height flex justify-center items-center  w-full">
          <Spinner aria-label="Center-aligned spinner example" />
        </div>
      ) : (
        <div>
          <div className="  main-content  w-full  md:grid      h-full  gap-y-9 px-1 md:px-4  lg:px-9">
            {data?.company_users?.data.map((e) => (
              <EmployeeCard
                employee={e}
                key={e.id}
                updateList={refetch}
                handleId={handleId}
                // showFormHandling={showFormHandling}
              />
            ))}
          </div>
          <div className="w-full flex justify-center  ">
            <PaginationControlled
              totalEmp={data?.company_users?.paginatorInfo.total}
              empPerPage={empPerPage}
              handle={page}
              currentPage={currentPage}
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default EmployeeList;

/*
   refetchQueries: [
        {
          query: GET_EMP,
          variables: {
            currentPage: props.page,
          },
          fetchPolicy: "no-cache",
        },
      ],

*/
