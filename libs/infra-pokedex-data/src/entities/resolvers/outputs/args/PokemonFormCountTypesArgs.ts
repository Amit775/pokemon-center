import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormTypeWhereInput } from "../../inputs/PokemonFormTypeWhereInput";

@TypeGraphQL.ArgsType()
export class PokemonFormCountTypesArgs {
  @TypeGraphQL.Field(_type => PokemonFormTypeWhereInput, {
    nullable: true
  })
  where?: PokemonFormTypeWhereInput | undefined;
}
