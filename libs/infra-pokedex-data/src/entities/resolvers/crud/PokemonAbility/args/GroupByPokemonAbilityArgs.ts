import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonAbilityOrderByWithAggregationInput } from "../../../inputs/PokemonAbilityOrderByWithAggregationInput";
import { PokemonAbilityScalarWhereWithAggregatesInput } from "../../../inputs/PokemonAbilityScalarWhereWithAggregatesInput";
import { PokemonAbilityWhereInput } from "../../../inputs/PokemonAbilityWhereInput";
import { PokemonAbilityScalarFieldEnum } from "../../../../enums/PokemonAbilityScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonAbilityArgs {
  @TypeGraphQL.Field(_type => PokemonAbilityWhereInput, {
    nullable: true
  })
  where?: PokemonAbilityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilityOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonAbilityOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilityScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"pokemon_id" | "ability_id" | "is_hidden" | "slot">;

  @TypeGraphQL.Field(_type => PokemonAbilityScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonAbilityScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
