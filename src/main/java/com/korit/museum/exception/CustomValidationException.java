package com.korit.museum.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Map;

@AllArgsConstructor
@Getter
public class CustomValidationException extends RuntimeException{
    public Map<String, String> errorMap;
}
