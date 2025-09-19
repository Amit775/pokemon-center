import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionUpdateManyMutationInput } from "../../../inputs/EncounterConditionUpdateManyMutationInput";
import { EncounterConditionWhereInput } from "../../../inputs/EncounterConditionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEncounterConditionArgs {
  @TypeGraphQL.Field(_type => EncounterConditionUpdateManyMutationInput, {
    nullable: false
  })
  data!: EncounterConditionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EncounterConditionWhereInput, {
    nullable: true
  })
  where?: EncounterConditionWhereInput | undefined;
}
