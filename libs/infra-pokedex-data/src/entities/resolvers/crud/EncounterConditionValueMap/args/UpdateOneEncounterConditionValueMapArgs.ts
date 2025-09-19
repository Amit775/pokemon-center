import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionValueMapUpdateInput } from "../../../inputs/EncounterConditionValueMapUpdateInput";
import { EncounterConditionValueMapWhereUniqueInput } from "../../../inputs/EncounterConditionValueMapWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEncounterConditionValueMapArgs {
  @TypeGraphQL.Field(_type => EncounterConditionValueMapUpdateInput, {
    nullable: false
  })
  data!: EncounterConditionValueMapUpdateInput;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionValueMapWhereUniqueInput;
}
