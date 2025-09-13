import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonDexNumbersOrderByWithAggregationInput } from "../../../inputs/PokemonDexNumbersOrderByWithAggregationInput";
import { PokemonDexNumbersScalarWhereWithAggregatesInput } from "../../../inputs/PokemonDexNumbersScalarWhereWithAggregatesInput";
import { PokemonDexNumbersWhereInput } from "../../../inputs/PokemonDexNumbersWhereInput";
import { PokemonDexNumbersScalarFieldEnum } from "../../../../enums/PokemonDexNumbersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonDexNumbersArgs {
  @TypeGraphQL.Field(_type => PokemonDexNumbersWhereInput, {
    nullable: true
  })
  where?: PokemonDexNumbersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumbersOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonDexNumbersOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonDexNumbersScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"species_id" | "pokedex_id" | "pokedex_number">;

  @TypeGraphQL.Field(_type => PokemonDexNumbersScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonDexNumbersScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
