import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonDexNumberOrderByWithAggregationInput } from "../../../inputs/PokemonDexNumberOrderByWithAggregationInput";
import { PokemonDexNumberScalarWhereWithAggregatesInput } from "../../../inputs/PokemonDexNumberScalarWhereWithAggregatesInput";
import { PokemonDexNumberWhereInput } from "../../../inputs/PokemonDexNumberWhereInput";
import { PokemonDexNumberScalarFieldEnum } from "../../../../enums/PokemonDexNumberScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonDexNumberArgs {
  @TypeGraphQL.Field(_type => PokemonDexNumberWhereInput, {
    nullable: true
  })
  where?: PokemonDexNumberWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumberOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonDexNumberOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumberScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"species_id" | "pokedex_id" | "pokedex_number">;

  @TypeGraphQL.Field(_type => PokemonDexNumberScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonDexNumberScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
