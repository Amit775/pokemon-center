import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMoveWhereUniqueInput } from "../../../inputs/PokemonMoveWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokemonMoveArgs {
  @TypeGraphQL.Field(_type => PokemonMoveWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMoveWhereUniqueInput;
}
