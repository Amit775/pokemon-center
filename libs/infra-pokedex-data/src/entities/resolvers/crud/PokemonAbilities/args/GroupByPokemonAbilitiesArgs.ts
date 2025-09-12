import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonAbilitiesOrderByWithAggregationInput } from "../../../inputs/PokemonAbilitiesOrderByWithAggregationInput";
import { PokemonAbilitiesScalarWhereWithAggregatesInput } from "../../../inputs/PokemonAbilitiesScalarWhereWithAggregatesInput";
import { PokemonAbilitiesWhereInput } from "../../../inputs/PokemonAbilitiesWhereInput";
import { PokemonAbilitiesScalarFieldEnum } from "../../../../enums/PokemonAbilitiesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonAbilitiesArgs {
  @TypeGraphQL.Field(_type => PokemonAbilitiesWhereInput, {
    nullable: true
  })
  where?: PokemonAbilitiesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilitiesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonAbilitiesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilitiesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"pokemon_id" | "ability_id" | "is_hidden" | "slot">;

  @TypeGraphQL.Field(_type => PokemonAbilitiesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonAbilitiesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
