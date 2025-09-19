import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonGameIndexWhereUniqueInput } from "../../../inputs/PokemonGameIndexWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokemonGameIndexOrThrowArgs {
  @TypeGraphQL.Field(_type => PokemonGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonGameIndexWhereUniqueInput;
}
