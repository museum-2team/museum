package com.korit.museum.web.dto;

import lombok.Data;

@Data
public class PaintingReqDto {

    private String paintingCode;

    private String paintingTitleName;
    private String viewingTime;
    private String exhibitionWorks;
    private String exhibitionPeriod;

    private String paintingName;
    private String author;
    private String paintingSize;
    private String year_of_Manufacture;
    private String material;

}
