import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormGenerationWhereInput } from "../../inputs/PokemonFormGenerationWhereInput";

@TypeGraphQL.ArgsType()
export class GenerationCountPokemonFormGenerationsArgs {
  @TypeGraphQL.Field(_type => PokemonFormGenerationWhereInput, {
    nullable: true
  })
  where?: PokemonFormGenerationWhereInput | undefined;
}
