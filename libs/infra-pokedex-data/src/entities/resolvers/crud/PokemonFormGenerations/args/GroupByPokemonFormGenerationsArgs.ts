import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormGenerationsOrderByWithAggregationInput } from "../../../inputs/PokemonFormGenerationsOrderByWithAggregationInput";
import { PokemonFormGenerationsScalarWhereWithAggregatesInput } from "../../../inputs/PokemonFormGenerationsScalarWhereWithAggregatesInput";
import { PokemonFormGenerationsWhereInput } from "../../../inputs/PokemonFormGenerationsWhereInput";
import { PokemonFormGenerationsScalarFieldEnum } from "../../../../enums/PokemonFormGenerationsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonFormGenerationsArgs {
  @TypeGraphQL.Field(_type => PokemonFormGenerationsWhereInput, {
    nullable: true
  })
  where?: PokemonFormGenerationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonFormGenerationsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"pokemon_form_id" | "generation_id" | "game_index">;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonFormGenerationsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
