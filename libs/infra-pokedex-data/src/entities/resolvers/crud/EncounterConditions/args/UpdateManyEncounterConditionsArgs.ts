import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionsUpdateManyMutationInput } from "../../../inputs/EncounterConditionsUpdateManyMutationInput";
import { EncounterConditionsWhereInput } from "../../../inputs/EncounterConditionsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEncounterConditionsArgs {
  @TypeGraphQL.Field(_type => EncounterConditionsUpdateManyMutationInput, {
    nullable: false
  })
  data!: EncounterConditionsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EncounterConditionsWhereInput, {
    nullable: true
  })
  where?: EncounterConditionsWhereInput | undefined;
}
