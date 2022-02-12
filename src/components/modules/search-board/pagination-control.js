import React, { useContext, useEffect, useState, createContext } from "react";
import {
  Select,
  Button,
  Separator,
  ControlBar,
  Indicator,
  Text,
  Box,
} from "../../primitives/assets";
import styled from "styled-components";
import { SearchBoardContext } from "./search-board-context";
import { arraySubgroupOf, numberToArray } from "./helpers/functions";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const PaginationContext = createContext({});

const PaginationButtons = (props) => {
  const { currentButtonGroupIndex, setCurrentButtonGroupIndex } =
    useContext(PaginationContext);

  const parsedChildren = arraySubgroupOf(
    React.Children.toArray(props.children),
    5
  );

  return (
    <Box>
      {currentButtonGroupIndex !== 0 && (
        <Button
          pad-w="xs"
          pad-h="xxs"
          mar-w="xxs"
          radius="xs"
          onClick={() =>
            setCurrentButtonGroupIndex(currentButtonGroupIndex - 1)
          }
        >
          ...
        </Button>
      )}

      {parsedChildren[currentButtonGroupIndex || 0]}

      {currentButtonGroupIndex !== parsedChildren.length - 1 && (
        <Button
          pad-w="xs"
          pad-h="xxs"
          mar-w="xxs"
          radius="xs"
          onClick={() =>
            setCurrentButtonGroupIndex(currentButtonGroupIndex + 1)
          }
        >
          ...
        </Button>
      )}
    </Box>
  );
};

const PaginationControlMain = styled(ControlBar)`
  width: fit-content;
  * {
    font-weight: 300;

    .items-per-page-select {
      border-bottom: 1px solid white;
    }
  }
`;

const PaginationControl = (props) => {
  let {
    GraphqlData,
    HandleSearch,
    category,
    page,
    setItemsPerPage,
    itemsPerPage,
  } = useContext(SearchBoardContext);
  const [paginationData, setPaginationData] = useState();
  const [currentPage, setCurrentPage] = useState(parseInt(page) || 1);
  const [currentButtonGroupIndex, setCurrentButtonGroupIndex] = useState(0);
  const [pagesSubgroup, setPagesSubgroups] = useState();
  const { scroll } = useLocomotiveScroll();

  //Assign all the pagination data received from the server
  useEffect(() => {
    if (GraphqlData?.data && category) {
      let data = { ...GraphqlData?.data?.[category] };
      setPaginationData({
        ...data?.info,
        length: Object.keys({ ...data?.results }),
      });
    }
  }, [GraphqlData, category]);

  //Current page change methods
  const scrollToSearch = () =>
    scroll.scrollTo(document.getElementById("searchControl-Input"), {
      offset: -50,
      duration: 70,
    });

  const HandleNextPage = () => {
    if (currentPage < paginationData.pages) {
      scrollToSearch();
      setCurrentPage(currentPage + 1);
    }
  };

  const HandlePrevPage = () => {
    if (currentPage > 1) {
      scrollToSearch();
      setCurrentPage(currentPage - 1);
    }
  };

  const HandleCurrentPage = (num) => {
    scrollToSearch();
    setCurrentPage(num);
  }

  useEffect(() => {
    setTimeout(() => {
      HandleSearch({ page: currentPage });
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  //Will find where the current page is to show it into the subgroup
  useEffect(() => {
    if (pagesSubgroup?.length) {
      pagesSubgroup.forEach((group, idx) => {
        group.forEach((page) => {
          if (page === currentPage) setCurrentButtonGroupIndex(idx);
        });
      });
    } else {
      if (!!paginationData?.pages)
        setPagesSubgroups(
          arraySubgroupOf(numberToArray(paginationData.pages), 5)
        );
    }
  }, [currentPage, pagesSubgroup, paginationData]);

  return (
    <PaginationContext.Provider
      value={{
        paginationData,
        setPaginationData,
        currentPage,
        setCurrentPage,
        currentButtonGroupIndex,
        setCurrentButtonGroupIndex,
      }}
    >
      {!!paginationData && (
        <PaginationControlMain
          color="dark-gray"
          pad-w="xs"
          pad-h="xxs"
          mar-h="md"
          fontColor="white"
        >
          <Box pad-w="xs">
            <Button pad-w="xs" pad-h="xxs" radius="xs" onClick={HandlePrevPage}>
              ◄
            </Button>

            {/* Button groups */}
            <PaginationButtons>
              {numberToArray(paginationData.pages).map((pageNumber) => (
                <Button
                  pad-w="xs"
                  pad-h="xxs"
                  mar-w="xxs"
                  radius="xs"
                  key={"pagination-button-page-vale-" + pageNumber}
                  selected={pageNumber === currentPage}
                  onClick={()=>HandleCurrentPage(pageNumber)}
                >
                  {pageNumber}
                </Button>
              ))}
            </PaginationButtons>

            <Button pad-w="xs" pad-h="xxs" radius="xs" onClick={HandleNextPage}>
              ►
            </Button>
          </Box>

          <Separator color="white" opacity="0.2" />

          <Box pad-w="sm">
            <Text>show</Text>

            <Indicator mar-w="xs" showOnHover>
              <Select
                color="white"
                option-color="white"
                pad-w="xxxs"
                pad-h="xxs"
                option-bg="dark-gray"
                className="items-per-page-select"
                onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
              >
                <option value={itemsPerPage}>{itemsPerPage}</option>
                {paginationData?.length.reverse().map((item) => (
                  <option
                    value={item}
                    key={"pagination-data-quantity-value-" + item}
                  >
                    {parseInt(item) + 1}
                  </option>
                ))}
              </Select>
            </Indicator>

            <Text>items</Text>
          </Box>
        </PaginationControlMain>
      )}
    </PaginationContext.Provider>
  );
};

export default PaginationControl;
