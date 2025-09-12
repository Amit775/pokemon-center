import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionValuesUpdateManyMutationInput } from "../../../inputs/EncounterConditionValuesUpdateManyMutationInput";
import { EncounterConditionValuesWhereInput } from "../../../inputs/EncounterConditionValuesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEncounterConditionValuesArgs {
  @TypeGraphQL.Field(_type => EncounterConditionValuesUpdateManyMutationInput, {
    nullable: false
  })
  data!: EncounterConditionValuesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EncounterConditionValuesWhereInput, {
    nullable: true
  })
  where?: EncounterConditionValuesWhereInput | undefined;
}
