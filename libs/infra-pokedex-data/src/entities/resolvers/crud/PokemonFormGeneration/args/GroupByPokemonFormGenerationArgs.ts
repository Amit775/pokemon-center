import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormGenerationOrderByWithAggregationInput } from "../../../inputs/PokemonFormGenerationOrderByWithAggregationInput";
import { PokemonFormGenerationScalarWhereWithAggregatesInput } from "../../../inputs/PokemonFormGenerationScalarWhereWithAggregatesInput";
import { PokemonFormGenerationWhereInput } from "../../../inputs/PokemonFormGenerationWhereInput";
import { PokemonFormGenerationScalarFieldEnum } from "../../../../enums/PokemonFormGenerationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonFormGenerationArgs {
  @TypeGraphQL.Field(_type => PokemonFormGenerationWhereInput, {
    nullable: true
  })
  where?: PokemonFormGenerationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonFormGenerationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"pokemon_form_id" | "generation_id" | "game_index">;

  @TypeGraphQL.Field(_type => PokemonFormGenerationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonFormGenerationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
