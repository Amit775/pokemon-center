import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormTypesOrderByWithAggregationInput } from "../../../inputs/PokemonFormTypesOrderByWithAggregationInput";
import { PokemonFormTypesScalarWhereWithAggregatesInput } from "../../../inputs/PokemonFormTypesScalarWhereWithAggregatesInput";
import { PokemonFormTypesWhereInput } from "../../../inputs/PokemonFormTypesWhereInput";
import { PokemonFormTypesScalarFieldEnum } from "../../../../enums/PokemonFormTypesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonFormTypesArgs {
  @TypeGraphQL.Field(_type => PokemonFormTypesWhereInput, {
    nullable: true
  })
  where?: PokemonFormTypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonFormTypesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"pokemon_form_id" | "type_id" | "slot">;

  @TypeGraphQL.Field(_type => PokemonFormTypesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonFormTypesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
