import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonEggGroupsOrderByWithAggregationInput } from "../../../inputs/PokemonEggGroupsOrderByWithAggregationInput";
import { PokemonEggGroupsScalarWhereWithAggregatesInput } from "../../../inputs/PokemonEggGroupsScalarWhereWithAggregatesInput";
import { PokemonEggGroupsWhereInput } from "../../../inputs/PokemonEggGroupsWhereInput";
import { PokemonEggGroupsScalarFieldEnum } from "../../../../enums/PokemonEggGroupsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonEggGroupsArgs {
  @TypeGraphQL.Field(_type => PokemonEggGroupsWhereInput, {
    nullable: true
  })
  where?: PokemonEggGroupsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonEggGroupsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"species_id" | "egg_group_id">;

  @TypeGraphQL.Field(_type => PokemonEggGroupsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonEggGroupsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
