import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonHabitatOrderByWithAggregationInput } from "../../../inputs/PokemonHabitatOrderByWithAggregationInput";
import { PokemonHabitatScalarWhereWithAggregatesInput } from "../../../inputs/PokemonHabitatScalarWhereWithAggregatesInput";
import { PokemonHabitatWhereInput } from "../../../inputs/PokemonHabitatWhereInput";
import { PokemonHabitatScalarFieldEnum } from "../../../../enums/PokemonHabitatScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonHabitatArgs {
  @TypeGraphQL.Field(_type => PokemonHabitatWhereInput, {
    nullable: true
  })
  where?: PokemonHabitatWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonHabitatOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonHabitatOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonHabitatScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => PokemonHabitatScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonHabitatScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
