import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveBattleStylesWhereUniqueInput } from "../../../inputs/MoveBattleStylesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMoveBattleStylesOrThrowArgs {
  @TypeGraphQL.Field(_type => MoveBattleStylesWhereUniqueInput, {
    nullable: false
  })
  where!: MoveBattleStylesWhereUniqueInput;
}
