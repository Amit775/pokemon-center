import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonDexNumbersWhereUniqueInput } from "../../../inputs/PokemonDexNumbersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokemonDexNumbersOrThrowArgs {
  @TypeGraphQL.Field(_type => PokemonDexNumbersWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonDexNumbersWhereUniqueInput;
}
