package com.korit.museum.web.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Data
public class SearchPaintingReqDto {

    private int page;
    private String searchValue;
    private List<String> categories;
    private int count;
    private int userId;

    private int index;

    public void setIndex(){
        index = (page - 1) * count;
    }

}
