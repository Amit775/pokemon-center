import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AbilitiesCreateInput } from "../../../inputs/AbilitiesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAbilitiesArgs {
  @TypeGraphQL.Field(_type => AbilitiesCreateInput, {
    nullable: false
  })
  data!: AbilitiesCreateInput;
}
