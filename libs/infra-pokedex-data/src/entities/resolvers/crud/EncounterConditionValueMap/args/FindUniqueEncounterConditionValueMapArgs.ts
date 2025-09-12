import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionValueMapWhereUniqueInput } from "../../../inputs/EncounterConditionValueMapWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueEncounterConditionValueMapArgs {
  @TypeGraphQL.Field(_type => EncounterConditionValueMapWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionValueMapWhereUniqueInput;
}
