import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonAbilityWhereUniqueInput } from "../../../inputs/PokemonAbilityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokemonAbilityArgs {
  @TypeGraphQL.Field(_type => PokemonAbilityWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonAbilityWhereUniqueInput;
}
