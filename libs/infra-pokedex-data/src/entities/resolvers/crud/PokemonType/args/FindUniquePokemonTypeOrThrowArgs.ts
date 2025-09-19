import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonTypeWhereUniqueInput } from "../../../inputs/PokemonTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokemonTypeOrThrowArgs {
  @TypeGraphQL.Field(_type => PokemonTypeWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonTypeWhereUniqueInput;
}
