import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterSlotsUpdateManyMutationInput } from "../../../inputs/EncounterSlotsUpdateManyMutationInput";
import { EncounterSlotsWhereInput } from "../../../inputs/EncounterSlotsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEncounterSlotsArgs {
  @TypeGraphQL.Field(_type => EncounterSlotsUpdateManyMutationInput, {
    nullable: false
  })
  data!: EncounterSlotsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EncounterSlotsWhereInput, {
    nullable: true
  })
  where?: EncounterSlotsWhereInput | undefined;
}
