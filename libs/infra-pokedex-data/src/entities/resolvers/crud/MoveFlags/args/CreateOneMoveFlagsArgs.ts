import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveFlagsCreateInput } from "../../../inputs/MoveFlagsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMoveFlagsArgs {
  @TypeGraphQL.Field(_type => MoveFlagsCreateInput, {
    nullable: false
  })
  data!: MoveFlagsCreateInput;
}
