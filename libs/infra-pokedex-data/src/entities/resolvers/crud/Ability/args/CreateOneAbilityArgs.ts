import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AbilityCreateInput } from "../../../inputs/AbilityCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAbilityArgs {
  @TypeGraphQL.Field(_type => AbilityCreateInput, {
    nullable: false
  })
  data!: AbilityCreateInput;
}
