import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveFlagCreateInput } from "../../../inputs/MoveFlagCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMoveFlagArgs {
  @TypeGraphQL.Field(_type => MoveFlagCreateInput, {
    nullable: false
  })
  data!: MoveFlagCreateInput;
}
