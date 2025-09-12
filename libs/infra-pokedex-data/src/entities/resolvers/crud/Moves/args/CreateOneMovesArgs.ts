import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovesCreateInput } from "../../../inputs/MovesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMovesArgs {
  @TypeGraphQL.Field(_type => MovesCreateInput, {
    nullable: false
  })
  data!: MovesCreateInput;
}
