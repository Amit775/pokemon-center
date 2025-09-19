import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonGameIndexOrderByWithAggregationInput } from "../../../inputs/PokemonGameIndexOrderByWithAggregationInput";
import { PokemonGameIndexScalarWhereWithAggregatesInput } from "../../../inputs/PokemonGameIndexScalarWhereWithAggregatesInput";
import { PokemonGameIndexWhereInput } from "../../../inputs/PokemonGameIndexWhereInput";
import { PokemonGameIndexScalarFieldEnum } from "../../../../enums/PokemonGameIndexScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonGameIndexArgs {
  @TypeGraphQL.Field(_type => PokemonGameIndexWhereInput, {
    nullable: true
  })
  where?: PokemonGameIndexWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonGameIndexOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"pokemon_id" | "version_id" | "game_index">;

  @TypeGraphQL.Field(_type => PokemonGameIndexScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonGameIndexScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
