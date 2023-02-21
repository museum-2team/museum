package com.korit.museum.repository;

import com.korit.museum.entity.PaintingImage;
import com.korit.museum.entity.PaintingMst;
import com.korit.museum.web.dto.PaintingReqDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface PaintingRepository {

    public PaintingMst findPaintingByPaintingCode (String paintingCode);

    public List<PaintingMst> searchPainting(SearchReqDto searchReqDto);

    public int savePainting (PaintingReqDto paintingReqDto);

    public int updatePaintingByPaintingCode (PaintingReqDto paintingReqDto);

    public int registerPaintingImages (List<PaintingImage> paintingImages);

    public List<PaintingImage> findPaintingImageAll(String paintingCode);
    public PaintingImage findPaintingByImageId (int imageId);
    public PaintingImage findPaintingByImageCode (String imageCode);

    public int deletePainting(String paintingCode);

    public int deletePaintings(List<Integer> userIds);

    public int deletePaintingImage(int imageId);

}
