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

    private String paintingTitelname;
    private String viewingTime;
    private String exhibitionWorks;
    private String exhibitionPeriod;

    private String info_paintingName;
    private String info_author;
    private String info_paintingSize;
    private String info_paintingMstcol;
    private String info_material;

    private LocalDateTime create_date;
    private LocalDateTime update_date;


}
