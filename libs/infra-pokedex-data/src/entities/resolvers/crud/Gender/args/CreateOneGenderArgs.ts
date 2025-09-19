import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenderCreateInput } from "../../../inputs/GenderCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneGenderArgs {
  @TypeGraphQL.Field(_type => GenderCreateInput, {
    nullable: false
  })
  data!: GenderCreateInput;
}
