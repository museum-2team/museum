package com.korit.museum.web.dto;

import lombok.Data;

@Data
public class SearchPaintingReqDto {

    private int page;
    private String searchValue;

    private int count;
    private int userId;

    private int index;

    public void setIndex(){
        index = (page - 1) * count;
    }

}
