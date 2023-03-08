package com.korit.museum.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class SearchPainting {

    private int paintingId;
    private String paintingCode;

    private String paintingTitleName;
    private String viewingTime;
    private String exhibitionWorks;

    private String paintingName;
    private String author;
    private String paintingSize;
    private String year_of_Manufacture;
    private String material;
    private String saveName;

}
