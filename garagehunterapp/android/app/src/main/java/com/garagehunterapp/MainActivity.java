package com.garagehunterapp;

import com.facebook.react.ReactActivity;
import android.content.Intent;
public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "garagehunterapp";
    }
    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);
        super.onActivityResult(requestCode, resultCode, data);
    }
}
