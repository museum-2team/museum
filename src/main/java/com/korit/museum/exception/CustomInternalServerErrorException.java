package com.korit.museum.exception;

public class CustomInternalServerErrorException extends RuntimeException{

    public CustomInternalServerErrorException(String message){
        super(message);
    }
}
