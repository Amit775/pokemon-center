import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonSpeciesCreateManyInput } from "../../../inputs/PokemonSpeciesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPokemonSpeciesArgs {
  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateManyInput], {
    nullable: false
  })
  data!: PokemonSpeciesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
