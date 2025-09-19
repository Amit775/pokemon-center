import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonEggGroupOrderByWithAggregationInput } from "../../../inputs/PokemonEggGroupOrderByWithAggregationInput";
import { PokemonEggGroupScalarWhereWithAggregatesInput } from "../../../inputs/PokemonEggGroupScalarWhereWithAggregatesInput";
import { PokemonEggGroupWhereInput } from "../../../inputs/PokemonEggGroupWhereInput";
import { PokemonEggGroupScalarFieldEnum } from "../../../../enums/PokemonEggGroupScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonEggGroupArgs {
  @TypeGraphQL.Field(_type => PokemonEggGroupWhereInput, {
    nullable: true
  })
  where?: PokemonEggGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonEggGroupOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"species_id" | "egg_group_id">;

  @TypeGraphQL.Field(_type => PokemonEggGroupScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonEggGroupScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
