import { Injectable } from '@angular/core';
import * as AWSCognito from 'amazon-cognito-identity-js';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CognitoService {
  private userPool: AWSCognito.CognitoUserPool;

  constructor() {
    // Revature Pool and Clent Ids.
    const poolData = {
      UserPoolId: 'us-east-2_eqhVcePBe',
      ClientId: '4ptb0da4skq58fmigvjp65o1k'
    };

    this.userPool = new AWSCognito.CognitoUserPool(poolData);
  }

  // Sign in a user attempt.
  signIn(username: string, password: string): BehaviorSubject<object> {
    const userData = {
      Username: username,
      Pool: this.userPool
    };

    const authenticationData = {
      Username: username,
      Password: password
    };

    const authenticationDetails = new AWSCognito.AuthenticationDetails(authenticationData);

    const cognitoUser = new AWSCognito.CognitoUser(userData);

    const resultStream = new BehaviorSubject<object>(null);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (session: AWSCognito.CognitoUserSession) {
        console.log('[LOG] - Cognito login succeeded');
        resultStream.next(session.getIdToken());
      },
      onFailure: function (err: any) {
        console.log('[ERROR] - Failed to authenticate user');
        resultStream.next(err);
      }
    });

    return resultStream;
  }


  //Register a new user.
  registerUser(username: string, password: string, email: string): BehaviorSubject<object> {
    console.log('[LOG] - In CognitoService.registerUser()');
    const attributeList = [];


    const emailData = {
      Name: 'email',
      Value: email
    };


    const emailAttribute = new AWSCognito.CognitoUserAttribute(emailData);

  
    attributeList.push(emailAttribute);


    const resultStream = new BehaviorSubject<object>(null);
    this.userPool.signUp(username, password, attributeList, null,
      (error, result) => {
        if (error) {
          resultStream.next(error);
        }
        if (result) {
          resultStream.next(result);
        }
      }
    );

    return resultStream;
  }


}
