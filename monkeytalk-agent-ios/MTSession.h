//
//  MTSession.h
//  iWebDriver
//
//  Copyright 2009 Google Inc.
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//  http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.

#import <Foundation/Foundation.h>
#import "MTHTTPVirtualDirectory.h"

@class MTElementStore;
@class MTSessionRoot;

// This |MTHTTPVirtualDirectory| matches the /:session directory which WebDriver
// expects.
@interface MTSession : MTHTTPVirtualDirectory {
  MTSessionRoot* sessionRoot_;
  int sessionId_;
  MTElementStore* __unsafe_unretained elementStore_;
  NSTimeInterval implicitWait_;
  NSTimeInterval scriptTimeout_;
}

@property (unsafe_unretained, nonatomic, readonly) MTElementStore* elementStore;
@property (nonatomic) int sessionId;
@property (nonatomic) NSTimeInterval implicitWait;
@property (nonatomic) NSTimeInterval scriptTimeout;

- (id) initWithSessionRootAndSessionId:(MTSessionRoot*)root
                             sessionId:(int)sessionId;

- (void)cleanSessionStatus;

// Deletes all from shared cookie storage on iPhone. If cookies are not deleted
// in between sessions than sessions become nondeterministic.
- (void)deleteAllCookies;

// Deletes a session. Recursively destroys all inherited subtree of
// elements, etc.
- (void)deleteSession;

@end
