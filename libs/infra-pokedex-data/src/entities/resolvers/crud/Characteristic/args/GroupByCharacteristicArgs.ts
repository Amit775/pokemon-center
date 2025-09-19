import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CharacteristicOrderByWithAggregationInput } from "../../../inputs/CharacteristicOrderByWithAggregationInput";
import { CharacteristicScalarWhereWithAggregatesInput } from "../../../inputs/CharacteristicScalarWhereWithAggregatesInput";
import { CharacteristicWhereInput } from "../../../inputs/CharacteristicWhereInput";
import { CharacteristicScalarFieldEnum } from "../../../../enums/CharacteristicScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCharacteristicArgs {
  @TypeGraphQL.Field(_type => CharacteristicWhereInput, {
    nullable: true
  })
  where?: CharacteristicWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CharacteristicOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CharacteristicScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "stat_id" | "gene_mod_5">;

  @TypeGraphQL.Field(_type => CharacteristicScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CharacteristicScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
