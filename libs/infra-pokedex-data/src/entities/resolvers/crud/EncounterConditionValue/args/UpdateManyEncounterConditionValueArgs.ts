import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionValueUpdateManyMutationInput } from "../../../inputs/EncounterConditionValueUpdateManyMutationInput";
import { EncounterConditionValueWhereInput } from "../../../inputs/EncounterConditionValueWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEncounterConditionValueArgs {
  @TypeGraphQL.Field(_type => EncounterConditionValueUpdateManyMutationInput, {
    nullable: false
  })
  data!: EncounterConditionValueUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EncounterConditionValueWhereInput, {
    nullable: true
  })
  where?: EncounterConditionValueWhereInput | undefined;
}
