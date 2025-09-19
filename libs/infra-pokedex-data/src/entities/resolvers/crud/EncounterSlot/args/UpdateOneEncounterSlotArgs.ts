import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterSlotUpdateInput } from "../../../inputs/EncounterSlotUpdateInput";
import { EncounterSlotWhereUniqueInput } from "../../../inputs/EncounterSlotWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEncounterSlotArgs {
  @TypeGraphQL.Field(_type => EncounterSlotUpdateInput, {
    nullable: false
  })
  data!: EncounterSlotUpdateInput;

  @TypeGraphQL.Field(_type => EncounterSlotWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterSlotWhereUniqueInput;
}
