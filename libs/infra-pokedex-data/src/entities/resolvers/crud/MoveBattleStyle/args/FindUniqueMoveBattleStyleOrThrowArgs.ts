import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveBattleStyleWhereUniqueInput } from "../../../inputs/MoveBattleStyleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMoveBattleStyleOrThrowArgs {
  @TypeGraphQL.Field(_type => MoveBattleStyleWhereUniqueInput, {
    nullable: false
  })
  where!: MoveBattleStyleWhereUniqueInput;
}
