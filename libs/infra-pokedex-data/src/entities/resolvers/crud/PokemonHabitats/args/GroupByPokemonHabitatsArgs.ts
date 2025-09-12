import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonHabitatsOrderByWithAggregationInput } from "../../../inputs/PokemonHabitatsOrderByWithAggregationInput";
import { PokemonHabitatsScalarWhereWithAggregatesInput } from "../../../inputs/PokemonHabitatsScalarWhereWithAggregatesInput";
import { PokemonHabitatsWhereInput } from "../../../inputs/PokemonHabitatsWhereInput";
import { PokemonHabitatsScalarFieldEnum } from "../../../../enums/PokemonHabitatsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonHabitatsArgs {
  @TypeGraphQL.Field(_type => PokemonHabitatsWhereInput, {
    nullable: true
  })
  where?: PokemonHabitatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonHabitatsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonHabitatsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonHabitatsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => PokemonHabitatsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonHabitatsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
