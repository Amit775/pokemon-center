import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormWhereUniqueInput } from "../../../inputs/PokemonFormWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokemonFormArgs {
  @TypeGraphQL.Field(_type => PokemonFormWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormWhereUniqueInput;
}
