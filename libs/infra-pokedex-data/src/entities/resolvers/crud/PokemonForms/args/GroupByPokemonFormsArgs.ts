import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormsOrderByWithAggregationInput } from "../../../inputs/PokemonFormsOrderByWithAggregationInput";
import { PokemonFormsScalarWhereWithAggregatesInput } from "../../../inputs/PokemonFormsScalarWhereWithAggregatesInput";
import { PokemonFormsWhereInput } from "../../../inputs/PokemonFormsWhereInput";
import { PokemonFormsScalarFieldEnum } from "../../../../enums/PokemonFormsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonFormsArgs {
  @TypeGraphQL.Field(_type => PokemonFormsWhereInput, {
    nullable: true
  })
  where?: PokemonFormsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonFormsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier" | "form_identifier" | "pokemon_id" | "introduced_in_version_group_id" | "is_default" | "is_battle_only" | "is_mega" | "form_order" | "order">;

  @TypeGraphQL.Field(_type => PokemonFormsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonFormsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
