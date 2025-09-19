import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonTypeWhereInput } from "../../inputs/PokemonTypeWhereInput";

@TypeGraphQL.ArgsType()
export class PokemonCountTypesArgs {
  @TypeGraphQL.Field(_type => PokemonTypeWhereInput, {
    nullable: true
  })
  where?: PokemonTypeWhereInput | undefined;
}
