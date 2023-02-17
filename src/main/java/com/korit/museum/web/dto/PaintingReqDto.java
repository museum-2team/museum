package com.korit.museum.web.dto;

import lombok.Data;

@Data
public class PaintingReqDto {

    private String paintingCode;

    private String paintingTitleName;
    private String viewingTime;
    private String exhibitionWorks;
    private String exhibitionPeriod;

    private String info_paintingName;
    private String author;
    private String info_paintingSize;
    private String year_of_Manufacture;
    private String info_material;

}
