import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CharacteristicsOrderByWithAggregationInput } from "../../../inputs/CharacteristicsOrderByWithAggregationInput";
import { CharacteristicsScalarWhereWithAggregatesInput } from "../../../inputs/CharacteristicsScalarWhereWithAggregatesInput";
import { CharacteristicsWhereInput } from "../../../inputs/CharacteristicsWhereInput";
import { CharacteristicsScalarFieldEnum } from "../../../../enums/CharacteristicsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCharacteristicsArgs {
  @TypeGraphQL.Field(_type => CharacteristicsWhereInput, {
    nullable: true
  })
  where?: CharacteristicsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CharacteristicsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "stat_id" | "gene_mod_5">;

  @TypeGraphQL.Field(_type => CharacteristicsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CharacteristicsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
