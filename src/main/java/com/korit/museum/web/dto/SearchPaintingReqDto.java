package com.korit.museum.web.dto;

public class SearchPaintingReqDto {

    private int page;

    private String searchValue;
    private int userId;

    private int index;

    public void setIndex(){
        index = (page - 1) * count;
    }

}
