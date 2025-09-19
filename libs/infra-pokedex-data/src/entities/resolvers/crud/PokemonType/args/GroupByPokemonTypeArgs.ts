import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonTypeOrderByWithAggregationInput } from "../../../inputs/PokemonTypeOrderByWithAggregationInput";
import { PokemonTypeScalarWhereWithAggregatesInput } from "../../../inputs/PokemonTypeScalarWhereWithAggregatesInput";
import { PokemonTypeWhereInput } from "../../../inputs/PokemonTypeWhereInput";
import { PokemonTypeScalarFieldEnum } from "../../../../enums/PokemonTypeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonTypeArgs {
  @TypeGraphQL.Field(_type => PokemonTypeWhereInput, {
    nullable: true
  })
  where?: PokemonTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonTypeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"pokemon_id" | "type_id" | "slot">;

  @TypeGraphQL.Field(_type => PokemonTypeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonTypeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
