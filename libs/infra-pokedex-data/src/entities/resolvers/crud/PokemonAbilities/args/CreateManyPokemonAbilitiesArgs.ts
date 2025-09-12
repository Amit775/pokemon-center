import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonAbilitiesCreateManyInput } from "../../../inputs/PokemonAbilitiesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPokemonAbilitiesArgs {
  @TypeGraphQL.Field(_type => [PokemonAbilitiesCreateManyInput], {
    nullable: false
  })
  data!: PokemonAbilitiesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
