import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormsWhereUniqueInput } from "../../../inputs/PokemonFormsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokemonFormsOrThrowArgs {
  @TypeGraphQL.Field(_type => PokemonFormsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormsWhereUniqueInput;
}
