import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionsOrderByWithAggregationInput } from "../../../inputs/EncounterConditionsOrderByWithAggregationInput";
import { EncounterConditionsScalarWhereWithAggregatesInput } from "../../../inputs/EncounterConditionsScalarWhereWithAggregatesInput";
import { EncounterConditionsWhereInput } from "../../../inputs/EncounterConditionsWhereInput";
import { EncounterConditionsScalarFieldEnum } from "../../../../enums/EncounterConditionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEncounterConditionsArgs {
  @TypeGraphQL.Field(_type => EncounterConditionsWhereInput, {
    nullable: true
  })
  where?: EncounterConditionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EncounterConditionsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => EncounterConditionsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EncounterConditionsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
