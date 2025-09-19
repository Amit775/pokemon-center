import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonEggGroupCreateManyInput } from "../../../inputs/PokemonEggGroupCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPokemonEggGroupArgs {
  @TypeGraphQL.Field(_type => [PokemonEggGroupCreateManyInput], {
    nullable: false
  })
  data!: PokemonEggGroupCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
