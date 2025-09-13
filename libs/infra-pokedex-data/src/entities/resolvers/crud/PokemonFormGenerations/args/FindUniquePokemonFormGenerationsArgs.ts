import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormGenerationsWhereUniqueInput } from "../../../inputs/PokemonFormGenerationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokemonFormGenerationsArgs {
  @TypeGraphQL.Field(_type => PokemonFormGenerationsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormGenerationsWhereUniqueInput;
}
