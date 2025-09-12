import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveBattleStylesCreateInput } from "../../../inputs/MoveBattleStylesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMoveBattleStylesArgs {
  @TypeGraphQL.Field(_type => MoveBattleStylesCreateInput, {
    nullable: false
  })
  data!: MoveBattleStylesCreateInput;
}
