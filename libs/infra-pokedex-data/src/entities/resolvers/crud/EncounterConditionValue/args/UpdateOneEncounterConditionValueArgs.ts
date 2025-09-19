import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionValueUpdateInput } from "../../../inputs/EncounterConditionValueUpdateInput";
import { EncounterConditionValueWhereUniqueInput } from "../../../inputs/EncounterConditionValueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEncounterConditionValueArgs {
  @TypeGraphQL.Field(_type => EncounterConditionValueUpdateInput, {
    nullable: false
  })
  data!: EncounterConditionValueUpdateInput;

  @TypeGraphQL.Field(_type => EncounterConditionValueWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionValueWhereUniqueInput;
}
