import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionValueWhereUniqueInput } from "../../../inputs/EncounterConditionValueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueEncounterConditionValueArgs {
  @TypeGraphQL.Field(_type => EncounterConditionValueWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionValueWhereUniqueInput;
}
