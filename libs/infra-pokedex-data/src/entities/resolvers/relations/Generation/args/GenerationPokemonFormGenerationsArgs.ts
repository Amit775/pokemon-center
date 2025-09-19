import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormGenerationOrderByWithRelationInput } from "../../../inputs/PokemonFormGenerationOrderByWithRelationInput";
import { PokemonFormGenerationWhereInput } from "../../../inputs/PokemonFormGenerationWhereInput";
import { PokemonFormGenerationWhereUniqueInput } from "../../../inputs/PokemonFormGenerationWhereUniqueInput";
import { PokemonFormGenerationScalarFieldEnum } from "../../../../enums/PokemonFormGenerationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GenerationPokemonFormGenerationsArgs {
  @TypeGraphQL.Field(_type => PokemonFormGenerationWhereInput, {
    nullable: true
  })
  where?: PokemonFormGenerationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonFormGenerationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonFormGenerationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormGenerationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"pokemon_form_id" | "generation_id" | "game_index"> | undefined;
}
