package com.korit.museum.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class CollectionImage {
    private int imageId;
    private String collectionCode;
    private String saveName;
    private String originName;
}
