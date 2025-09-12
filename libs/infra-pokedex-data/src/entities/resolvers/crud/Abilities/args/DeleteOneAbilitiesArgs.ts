import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AbilitiesWhereUniqueInput } from "../../../inputs/AbilitiesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneAbilitiesArgs {
  @TypeGraphQL.Field(_type => AbilitiesWhereUniqueInput, {
    nullable: false
  })
  where!: AbilitiesWhereUniqueInput;
}
