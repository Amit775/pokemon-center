import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonGameIndicesOrderByWithAggregationInput } from "../../../inputs/PokemonGameIndicesOrderByWithAggregationInput";
import { PokemonGameIndicesScalarWhereWithAggregatesInput } from "../../../inputs/PokemonGameIndicesScalarWhereWithAggregatesInput";
import { PokemonGameIndicesWhereInput } from "../../../inputs/PokemonGameIndicesWhereInput";
import { PokemonGameIndicesScalarFieldEnum } from "../../../../enums/PokemonGameIndicesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonGameIndicesArgs {
  @TypeGraphQL.Field(_type => PokemonGameIndicesWhereInput, {
    nullable: true
  })
  where?: PokemonGameIndicesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonGameIndicesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"pokemon_id" | "version_id" | "game_index">;

  @TypeGraphQL.Field(_type => PokemonGameIndicesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonGameIndicesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
