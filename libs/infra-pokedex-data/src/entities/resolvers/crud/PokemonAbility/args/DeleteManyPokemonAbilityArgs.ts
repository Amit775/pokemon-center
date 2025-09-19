import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonAbilityWhereInput } from "../../../inputs/PokemonAbilityWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPokemonAbilityArgs {
  @TypeGraphQL.Field(_type => PokemonAbilityWhereInput, {
    nullable: true
  })
  where?: PokemonAbilityWhereInput | undefined;
}
