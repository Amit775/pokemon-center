import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonColorsOrderByWithAggregationInput } from "../../../inputs/PokemonColorsOrderByWithAggregationInput";
import { PokemonColorsScalarWhereWithAggregatesInput } from "../../../inputs/PokemonColorsScalarWhereWithAggregatesInput";
import { PokemonColorsWhereInput } from "../../../inputs/PokemonColorsWhereInput";
import { PokemonColorsScalarFieldEnum } from "../../../../enums/PokemonColorsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonColorsArgs {
  @TypeGraphQL.Field(_type => PokemonColorsWhereInput, {
    nullable: true
  })
  where?: PokemonColorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonColorsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonColorsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonColorsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => PokemonColorsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonColorsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
