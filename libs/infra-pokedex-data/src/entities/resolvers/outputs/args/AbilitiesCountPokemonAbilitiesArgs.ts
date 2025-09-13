import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonAbilitiesWhereInput } from "../../inputs/PokemonAbilitiesWhereInput";

@TypeGraphQL.ArgsType()
export class AbilitiesCountPokemonAbilitiesArgs {
  @TypeGraphQL.Field(_type => PokemonAbilitiesWhereInput, {
    nullable: true
  })
  where?: PokemonAbilitiesWhereInput | undefined;
}
