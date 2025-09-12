import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveFlagsCreateInput } from "../../../inputs/MoveFlagsCreateInput";
import { MoveFlagsUpdateInput } from "../../../inputs/MoveFlagsUpdateInput";
import { MoveFlagsWhereUniqueInput } from "../../../inputs/MoveFlagsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMoveFlagsArgs {
  @TypeGraphQL.Field(_type => MoveFlagsWhereUniqueInput, {
    nullable: false
  })
  where!: MoveFlagsWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveFlagsCreateInput, {
    nullable: false
  })
  create!: MoveFlagsCreateInput;

  @TypeGraphQL.Field(_type => MoveFlagsUpdateInput, {
    nullable: false
  })
  update!: MoveFlagsUpdateInput;
}
