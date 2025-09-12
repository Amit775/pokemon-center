import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonTypesWhereInput } from "../../../inputs/PokemonTypesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPokemonTypesArgs {
  @TypeGraphQL.Field(_type => PokemonTypesWhereInput, {
    nullable: true
  })
  where?: PokemonTypesWhereInput | undefined;
}
