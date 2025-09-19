import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormOrderByWithAggregationInput } from "../../../inputs/PokemonFormOrderByWithAggregationInput";
import { PokemonFormScalarWhereWithAggregatesInput } from "../../../inputs/PokemonFormScalarWhereWithAggregatesInput";
import { PokemonFormWhereInput } from "../../../inputs/PokemonFormWhereInput";
import { PokemonFormScalarFieldEnum } from "../../../../enums/PokemonFormScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonFormArgs {
  @TypeGraphQL.Field(_type => PokemonFormWhereInput, {
    nullable: true
  })
  where?: PokemonFormWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonFormOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier" | "form_identifier" | "pokemon_id" | "introduced_in_version_group_id" | "is_default" | "is_battle_only" | "is_mega" | "form_order" | "order">;

  @TypeGraphQL.Field(_type => PokemonFormScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonFormScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
