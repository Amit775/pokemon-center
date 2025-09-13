import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMovesWhereUniqueInput } from "../../../inputs/PokemonMovesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokemonMovesOrThrowArgs {
  @TypeGraphQL.Field(_type => PokemonMovesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMovesWhereUniqueInput;
}
