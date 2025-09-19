import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveBattleStyleCreateInput } from "../../../inputs/MoveBattleStyleCreateInput";
import { MoveBattleStyleUpdateInput } from "../../../inputs/MoveBattleStyleUpdateInput";
import { MoveBattleStyleWhereUniqueInput } from "../../../inputs/MoveBattleStyleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMoveBattleStyleArgs {
  @TypeGraphQL.Field(_type => MoveBattleStyleWhereUniqueInput, {
    nullable: false
  })
  where!: MoveBattleStyleWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveBattleStyleCreateInput, {
    nullable: false
  })
  create!: MoveBattleStyleCreateInput;

  @TypeGraphQL.Field(_type => MoveBattleStyleUpdateInput, {
    nullable: false
  })
  update!: MoveBattleStyleUpdateInput;
}
