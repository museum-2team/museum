package com.korit.museum.web.dto;

import lombok.Data;

@Data
public class PaintingReqDto {

    private String paintingId;

    private String paintingTitelname;
    private String viewingTime;
    private String exhibitionWorks;
    private String exhibitionPeriod;

    private String info_paintingName;
    private String info_author;
    private String info_paintingSize;
    private String info_paintingMstcol;
    private String info_material;

}
