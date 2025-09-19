import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterSlotOrderByWithRelationInput } from "../../../inputs/EncounterSlotOrderByWithRelationInput";
import { EncounterSlotWhereInput } from "../../../inputs/EncounterSlotWhereInput";
import { EncounterSlotWhereUniqueInput } from "../../../inputs/EncounterSlotWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateEncounterSlotArgs {
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
}
