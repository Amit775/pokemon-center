import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormTypeOrderByWithAggregationInput } from "../../../inputs/PokemonFormTypeOrderByWithAggregationInput";
import { PokemonFormTypeScalarWhereWithAggregatesInput } from "../../../inputs/PokemonFormTypeScalarWhereWithAggregatesInput";
import { PokemonFormTypeWhereInput } from "../../../inputs/PokemonFormTypeWhereInput";
import { PokemonFormTypeScalarFieldEnum } from "../../../../enums/PokemonFormTypeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonFormTypeArgs {
  @TypeGraphQL.Field(_type => PokemonFormTypeWhereInput, {
    nullable: true
  })
  where?: PokemonFormTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonFormTypeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormTypeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"pokemon_form_id" | "type_id" | "slot">;

  @TypeGraphQL.Field(_type => PokemonFormTypeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonFormTypeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
