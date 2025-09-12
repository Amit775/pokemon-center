import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveFlagMapCreateInput } from "../../../inputs/MoveFlagMapCreateInput";
import { MoveFlagMapUpdateInput } from "../../../inputs/MoveFlagMapUpdateInput";
import { MoveFlagMapWhereUniqueInput } from "../../../inputs/MoveFlagMapWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMoveFlagMapArgs {
  @TypeGraphQL.Field(_type => MoveFlagMapWhereUniqueInput, {
    nullable: false
  })
  where!: MoveFlagMapWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveFlagMapCreateInput, {
    nullable: false
  })
  create!: MoveFlagMapCreateInput;

  @TypeGraphQL.Field(_type => MoveFlagMapUpdateInput, {
    nullable: false
  })
  update!: MoveFlagMapUpdateInput;
}
