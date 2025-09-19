import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterSlotUpdateManyMutationInput } from "../../../inputs/EncounterSlotUpdateManyMutationInput";
import { EncounterSlotWhereInput } from "../../../inputs/EncounterSlotWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEncounterSlotArgs {
  @TypeGraphQL.Field(_type => EncounterSlotUpdateManyMutationInput, {
    nullable: false
  })
  data!: EncounterSlotUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EncounterSlotWhereInput, {
    nullable: true
  })
  where?: EncounterSlotWhereInput | undefined;
}
