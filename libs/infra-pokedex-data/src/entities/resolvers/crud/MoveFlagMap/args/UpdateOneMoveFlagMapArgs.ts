import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveFlagMapUpdateInput } from "../../../inputs/MoveFlagMapUpdateInput";
import { MoveFlagMapWhereUniqueInput } from "../../../inputs/MoveFlagMapWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMoveFlagMapArgs {
  @TypeGraphQL.Field(_type => MoveFlagMapUpdateInput, {
    nullable: false
  })
  data!: MoveFlagMapUpdateInput;

  @TypeGraphQL.Field(_type => MoveFlagMapWhereUniqueInput, {
    nullable: false
  })
  where!: MoveFlagMapWhereUniqueInput;
}
