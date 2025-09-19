import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AbilityWhereUniqueInput } from "../../../inputs/AbilityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAbilityArgs {
  @TypeGraphQL.Field(_type => AbilityWhereUniqueInput, {
    nullable: false
  })
  where!: AbilityWhereUniqueInput;
}
