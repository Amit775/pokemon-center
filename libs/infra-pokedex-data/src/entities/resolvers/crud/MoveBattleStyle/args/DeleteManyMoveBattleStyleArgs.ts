import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveBattleStyleWhereInput } from "../../../inputs/MoveBattleStyleWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMoveBattleStyleArgs {
  @TypeGraphQL.Field(_type => MoveBattleStyleWhereInput, {
    nullable: true
  })
  where?: MoveBattleStyleWhereInput | undefined;
}
