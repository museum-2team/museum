package com.korit.museum.web.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class SearchReqDto {

    private String searchValue;

    private String order;

    @NotBlank
    private String limit;

    private int page;

    private int count;

    private int index;

    public void setIndex(){
        index = (page - 1) * count;
    }
}
