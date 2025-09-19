import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterMethodOrderByWithAggregationInput } from "../../../inputs/EncounterMethodOrderByWithAggregationInput";
import { EncounterMethodScalarWhereWithAggregatesInput } from "../../../inputs/EncounterMethodScalarWhereWithAggregatesInput";
import { EncounterMethodWhereInput } from "../../../inputs/EncounterMethodWhereInput";
import { EncounterMethodScalarFieldEnum } from "../../../../enums/EncounterMethodScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEncounterMethodArgs {
  @TypeGraphQL.Field(_type => EncounterMethodWhereInput, {
    nullable: true
  })
  where?: EncounterMethodWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EncounterMethodOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EncounterMethodOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterMethodScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier" | "order">;

  @TypeGraphQL.Field(_type => EncounterMethodScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EncounterMethodScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
