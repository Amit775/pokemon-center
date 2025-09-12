import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveBattleStylesCreateInput } from "../../../inputs/MoveBattleStylesCreateInput";
import { MoveBattleStylesUpdateInput } from "../../../inputs/MoveBattleStylesUpdateInput";
import { MoveBattleStylesWhereUniqueInput } from "../../../inputs/MoveBattleStylesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMoveBattleStylesArgs {
  @TypeGraphQL.Field(_type => MoveBattleStylesWhereUniqueInput, {
    nullable: false
  })
  where!: MoveBattleStylesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveBattleStylesCreateInput, {
    nullable: false
  })
  create!: MoveBattleStylesCreateInput;

  @TypeGraphQL.Field(_type => MoveBattleStylesUpdateInput, {
    nullable: false
  })
  update!: MoveBattleStylesUpdateInput;
}
