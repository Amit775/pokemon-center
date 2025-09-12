import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionValuesUpdateInput } from "../../../inputs/EncounterConditionValuesUpdateInput";
import { EncounterConditionValuesWhereUniqueInput } from "../../../inputs/EncounterConditionValuesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEncounterConditionValuesArgs {
  @TypeGraphQL.Field(_type => EncounterConditionValuesUpdateInput, {
    nullable: false
  })
  data!: EncounterConditionValuesUpdateInput;

  @TypeGraphQL.Field(_type => EncounterConditionValuesWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionValuesWhereUniqueInput;
}
