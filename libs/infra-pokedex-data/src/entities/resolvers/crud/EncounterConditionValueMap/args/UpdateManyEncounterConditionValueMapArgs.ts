import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionValueMapUpdateManyMutationInput } from "../../../inputs/EncounterConditionValueMapUpdateManyMutationInput";
import { EncounterConditionValueMapWhereInput } from "../../../inputs/EncounterConditionValueMapWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEncounterConditionValueMapArgs {
  @TypeGraphQL.Field(_type => EncounterConditionValueMapUpdateManyMutationInput, {
    nullable: false
  })
  data!: EncounterConditionValueMapUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapWhereInput, {
    nullable: true
  })
  where?: EncounterConditionValueMapWhereInput | undefined;
}
