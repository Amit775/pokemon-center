import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonTypesWhereUniqueInput } from "../../../inputs/PokemonTypesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePokemonTypesArgs {
  @TypeGraphQL.Field(_type => PokemonTypesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonTypesWhereUniqueInput;
}
