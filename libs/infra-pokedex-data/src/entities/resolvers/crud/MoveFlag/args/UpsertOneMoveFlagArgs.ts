import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveFlagCreateInput } from "../../../inputs/MoveFlagCreateInput";
import { MoveFlagUpdateInput } from "../../../inputs/MoveFlagUpdateInput";
import { MoveFlagWhereUniqueInput } from "../../../inputs/MoveFlagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMoveFlagArgs {
  @TypeGraphQL.Field(_type => MoveFlagWhereUniqueInput, {
    nullable: false
  })
  where!: MoveFlagWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveFlagCreateInput, {
    nullable: false
  })
  create!: MoveFlagCreateInput;

  @TypeGraphQL.Field(_type => MoveFlagUpdateInput, {
    nullable: false
  })
  update!: MoveFlagUpdateInput;
}
