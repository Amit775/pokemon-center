import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormTypesWhereUniqueInput } from "../../../inputs/PokemonFormTypesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokemonFormTypesOrThrowArgs {
  @TypeGraphQL.Field(_type => PokemonFormTypesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormTypesWhereUniqueInput;
}
