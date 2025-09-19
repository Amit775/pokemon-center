import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonEvolutionCreateManyInput } from "../../../inputs/PokemonEvolutionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPokemonEvolutionArgs {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateManyInput], {
    nullable: false
  })
  data!: PokemonEvolutionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
