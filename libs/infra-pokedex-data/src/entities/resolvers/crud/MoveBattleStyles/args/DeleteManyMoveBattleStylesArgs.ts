import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveBattleStylesWhereInput } from "../../../inputs/MoveBattleStylesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMoveBattleStylesArgs {
  @TypeGraphQL.Field(_type => MoveBattleStylesWhereInput, {
    nullable: true
  })
  where?: MoveBattleStylesWhereInput | undefined;
}
