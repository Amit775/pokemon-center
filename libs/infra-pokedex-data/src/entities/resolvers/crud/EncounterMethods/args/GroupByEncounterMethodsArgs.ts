import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterMethodsOrderByWithAggregationInput } from "../../../inputs/EncounterMethodsOrderByWithAggregationInput";
import { EncounterMethodsScalarWhereWithAggregatesInput } from "../../../inputs/EncounterMethodsScalarWhereWithAggregatesInput";
import { EncounterMethodsWhereInput } from "../../../inputs/EncounterMethodsWhereInput";
import { EncounterMethodsScalarFieldEnum } from "../../../../enums/EncounterMethodsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEncounterMethodsArgs {
  @TypeGraphQL.Field(_type => EncounterMethodsWhereInput, {
    nullable: true
  })
  where?: EncounterMethodsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EncounterMethodsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EncounterMethodsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterMethodsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier" | "order">;

  @TypeGraphQL.Field(_type => EncounterMethodsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EncounterMethodsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
