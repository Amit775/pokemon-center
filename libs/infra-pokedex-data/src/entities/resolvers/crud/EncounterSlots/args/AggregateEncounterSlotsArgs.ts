import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterSlotsOrderByWithRelationInput } from "../../../inputs/EncounterSlotsOrderByWithRelationInput";
import { EncounterSlotsWhereInput } from "../../../inputs/EncounterSlotsWhereInput";
import { EncounterSlotsWhereUniqueInput } from "../../../inputs/EncounterSlotsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateEncounterSlotsArgs {
  @TypeGraphQL.Field(_type => EncounterSlotsWhereInput, {
    nullable: true
  })
  where?: EncounterSlotsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EncounterSlotsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotsWhereUniqueInput, {
    nullable: true
  })
  cursor?: EncounterSlotsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
