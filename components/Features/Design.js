import { colors } from "./colors.js"


//This file holds style aspects that either include a lot of lines or repeat in different pages
export const heading = {
    fontSize: 24, 
    paddingTop: 20, 
    paddingBottom: 5, 
    textAlign: 'center',
    fontWeight: 'bold'
}

export const submit_button = {
    width: '35%',
    backgroundColor: colors.colors.Sunflower,
    color: colors.colors.Sunflower,
    marginTop: 40,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    height: '6%',
}

export const calendar_button = {
    width: '35%',
    backgroundColor: colors.colors.Moss_Green,
    color: colors.colors.Moss_Green,
    marginTop: 40,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    height: '6%',
}

export const format = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
}

export const background ={
    flex: 1, 
    backgroundColor: colors.colors.Chesapeake_Teal,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 5,
}

export const submit_button_text = {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    lineHeight: 26,
}

export const yes_no = {
    width: 100, 
    height: 40,  // style for the "yes" button
    alignSelf: 'center', 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 10
}

export const make_cleanup_live_button = {
    width: 250, 
    height: 50,
    alignSelf: 'center',
    borderColor: 'grey', 
    borderWidth: 1,
    marginTop: 20,
    backgroundColor: colors.colors.Sunflower, 
    borderRadius: 10   
}

export const text_box =  {
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'gray',
    padding: 5,
    textAlign: 'left',
    height: 30,
    width: 200,
    borderRadius: 8,
    marginBottom: 20
}


export const item_text_box =  {
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'gray',
    padding: 5,
    textAlign: 'left',
    height: 30,
    width: 100,
    borderRadius: 8,
    marginBottom: 20
}

