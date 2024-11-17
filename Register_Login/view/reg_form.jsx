import React, { useEffect, useState } from 'react';
import axios from 'axios';

async function register(){

    try{
        const data = await axios('localhost:3000/register');
        
    }catch(error){

    }

}