import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveFlagMapCreateInput } from "../../../inputs/MoveFlagMapCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMoveFlagMapArgs {
  @TypeGraphQL.Field(_type => MoveFlagMapCreateInput, {
    nullable: false
  })
  data!: MoveFlagMapCreateInput;
}
