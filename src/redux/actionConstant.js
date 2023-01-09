const createRequestType = (base) => {
    const res = {};
    ["REQUEST", "SUCCESS", "FAILED"].forEach((type) => {
      res[type] = `${base}_${type}`;
    });
    return res;
};

export const GET_MOVIE_DATA = createRequestType("GET_MOVIE_DATA");

export const GET_MOVIE_DETAIL_VIEW = createRequestType("GET_MOVIE_DETAIL_VIEW");

// export const GET_MARKED_MOVIE = createRequestType("GET_MARKED_MOVIE");

export const UPDATE_MOVIE = createRequestType("UPDATE_MOVIE");






  