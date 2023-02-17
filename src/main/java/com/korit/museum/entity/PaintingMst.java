package com.korit.museum.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class PaintingMst {

    private int paintingId;
    private String paintingCode;

    private String paintingTitleName;
    private String viewingTime;
    private String exhibitionWorks;
    private String exhibitionPeriod;

    private String info_paintingName;
    private String author;
    private String info_paintingSize;
    private String year_of_Manufacture;
    private String info_Material;

    private LocalDateTime create_date;
    private LocalDateTime update_date;


}
