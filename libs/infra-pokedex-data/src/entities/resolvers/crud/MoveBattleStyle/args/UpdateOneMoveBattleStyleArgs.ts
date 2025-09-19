import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveBattleStyleUpdateInput } from "../../../inputs/MoveBattleStyleUpdateInput";
import { MoveBattleStyleWhereUniqueInput } from "../../../inputs/MoveBattleStyleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMoveBattleStyleArgs {
  @TypeGraphQL.Field(_type => MoveBattleStyleUpdateInput, {
    nullable: false
  })
  data!: MoveBattleStyleUpdateInput;

  @TypeGraphQL.Field(_type => MoveBattleStyleWhereUniqueInput, {
    nullable: false
  })
  where!: MoveBattleStyleWhereUniqueInput;
}
