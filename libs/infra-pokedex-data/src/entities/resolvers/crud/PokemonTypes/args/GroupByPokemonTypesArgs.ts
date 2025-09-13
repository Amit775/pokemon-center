import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonTypesOrderByWithAggregationInput } from "../../../inputs/PokemonTypesOrderByWithAggregationInput";
import { PokemonTypesScalarWhereWithAggregatesInput } from "../../../inputs/PokemonTypesScalarWhereWithAggregatesInput";
import { PokemonTypesWhereInput } from "../../../inputs/PokemonTypesWhereInput";
import { PokemonTypesScalarFieldEnum } from "../../../../enums/PokemonTypesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonTypesArgs {
  @TypeGraphQL.Field(_type => PokemonTypesWhereInput, {
    nullable: true
  })
  where?: PokemonTypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonTypesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"pokemon_id" | "type_id" | "slot">;

  @TypeGraphQL.Field(_type => PokemonTypesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonTypesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
