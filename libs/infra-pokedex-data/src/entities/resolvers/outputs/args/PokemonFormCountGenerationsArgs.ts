import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormGenerationWhereInput } from "../../inputs/PokemonFormGenerationWhereInput";

@TypeGraphQL.ArgsType()
export class PokemonFormCountGenerationsArgs {
  @TypeGraphQL.Field(_type => PokemonFormGenerationWhereInput, {
    nullable: true
  })
  where?: PokemonFormGenerationWhereInput | undefined;
}
