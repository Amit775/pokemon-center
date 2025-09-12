import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveFlagsUpdateInput } from "../../../inputs/MoveFlagsUpdateInput";
import { MoveFlagsWhereUniqueInput } from "../../../inputs/MoveFlagsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMoveFlagsArgs {
  @TypeGraphQL.Field(_type => MoveFlagsUpdateInput, {
    nullable: false
  })
  data!: MoveFlagsUpdateInput;

  @TypeGraphQL.Field(_type => MoveFlagsWhereUniqueInput, {
    nullable: false
  })
  where!: MoveFlagsWhereUniqueInput;
}
