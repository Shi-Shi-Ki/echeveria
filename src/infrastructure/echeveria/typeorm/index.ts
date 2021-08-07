import { UsersEntity } from "./users.entity"

/*
 * [注意]
 * EntityとRepositoryのclass名(?)が重複するとサーバ起動時にエラーが発生する
 * 少なくともファイル名に同じ名前のテーブル名があってもエラーが発生しない
 * ところがclass名が被る(重複する名前がが含まれている)とエラーが発生する
 * 何かしら因果関係がありそうだが今のところ不明...
 *
 * ex) NGパターン
 *   users.entity.ts
 *     ~ ~ ~ ~ ~
 *     ...
 *     @Entity('users')
 *     export class Users
 *     ...
 *     ~ ~ ~ ~ ~
 *   users.repository.ts
 *     ~ ~ ~ ~ ~
 *     ...
 *     @Injectable()
 *     export class UsersRepository { // "Users"が含まれているからNG?
 *     ...
 *     ~ ~ ~ ~ ~
 *
 * ex) OKパターン_1
 *   users.entity.ts
 *     ~ ~ ~ ~ ~
 *     ...
 *     @Entity('users')
 *     export class User // "Users" -> "User"に変える
 *     ...
 *     ~ ~ ~ ~ ~
 *
 * ex) OKパターン_2
 *   users.entity.ts
 *     ~ ~ ~ ~ ~
 *     ...
 *     @Entity('users')
 *     export class UsersEntity // "Users" -> "UsersEntity"に変える
 *     ...
 *     ~ ~ ~ ~ ~
 */
export const AllModels = [
  UsersEntity,
]

