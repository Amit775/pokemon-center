import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonAbilitiesWhereUniqueInput } from "../../../inputs/PokemonAbilitiesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokemonAbilitiesOrThrowArgs {
  @TypeGraphQL.Field(_type => PokemonAbilitiesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonAbilitiesWhereUniqueInput;
}
