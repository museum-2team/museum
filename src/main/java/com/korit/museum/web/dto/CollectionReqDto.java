package com.korit.museum.web.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class CollectionReqDto {

    @NotBlank
    private String collectionName;

    @NotBlank
    private String author;

    @NotBlank
    private String location;

    @NotBlank
    private String collectionSize;

    @NotBlank
    private String year_of_Manufacture;

    @NotBlank
    private String material;
}
