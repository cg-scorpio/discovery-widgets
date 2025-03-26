/*
 *   Copyright 2022-2025 SenX S.A.S.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */
export class PluginDef {
  type: string;
  name: string;
  tag: string;
  author: string;
  description: string;
  version: string;
  scriptWrapper: (_n: string) => string;

  constructor(def: any) {
    this.type = def.type;
    this.name = def.name;
    this.tag = def.tag;
    this.author = def.author;
    this.description = def.description;
    this.version = def.version;
    this.scriptWrapper = def.scriptWrapper;
  }

  public toString(): string {
    return `${this.name}:${this.version} by ${this.author}`;
  }
}
