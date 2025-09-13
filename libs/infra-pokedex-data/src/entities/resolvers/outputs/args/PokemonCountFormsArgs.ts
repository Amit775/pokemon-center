import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormsWhereInput } from "../../inputs/PokemonFormsWhereInput";

@TypeGraphQL.ArgsType()
export class PokemonCountFormsArgs {
  @TypeGraphQL.Field(_type => PokemonFormsWhereInput, {
    nullable: true
  })
  where?: PokemonFormsWhereInput | undefined;
}
