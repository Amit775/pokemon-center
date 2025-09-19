import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterSlotOrderByWithRelationInput } from "../../../inputs/EncounterSlotOrderByWithRelationInput";
import { EncounterSlotWhereInput } from "../../../inputs/EncounterSlotWhereInput";
import { EncounterSlotWhereUniqueInput } from "../../../inputs/EncounterSlotWhereUniqueInput";
import { EncounterSlotScalarFieldEnum } from "../../../../enums/EncounterSlotScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyEncounterSlotArgs {
  @TypeGraphQL.Field(_type => EncounterSlotWhereInput, {
    nullable: true
  })
  where?: EncounterSlotWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EncounterSlotOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotWhereUniqueInput, {
    nullable: true
  })
  cursor?: EncounterSlotWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "version_group_id" | "encounter_method_id" | "slot" | "rarity"> | undefined;
}
