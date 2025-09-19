import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormWhereInput } from "../../inputs/PokemonFormWhereInput";

@TypeGraphQL.ArgsType()
export class VersionGroupCountPokemonFormsArgs {
  @TypeGraphQL.Field(_type => PokemonFormWhereInput, {
    nullable: true
  })
  where?: PokemonFormWhereInput | undefined;
}
