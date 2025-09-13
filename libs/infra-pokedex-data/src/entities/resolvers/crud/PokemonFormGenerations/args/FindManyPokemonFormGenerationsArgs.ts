import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormGenerationsOrderByWithRelationInput } from "../../../inputs/PokemonFormGenerationsOrderByWithRelationInput";
import { PokemonFormGenerationsWhereInput } from "../../../inputs/PokemonFormGenerationsWhereInput";
import { PokemonFormGenerationsWhereUniqueInput } from "../../../inputs/PokemonFormGenerationsWhereUniqueInput";
import { PokemonFormGenerationsScalarFieldEnum } from "../../../../enums/PokemonFormGenerationsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyPokemonFormGenerationsArgs {
  @TypeGraphQL.Field(_type => PokemonFormGenerationsWhereInput, {
    nullable: true
  })
  where?: PokemonFormGenerationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonFormGenerationsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonFormGenerationsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"pokemon_form_id" | "generation_id" | "game_index"> | undefined;
}
