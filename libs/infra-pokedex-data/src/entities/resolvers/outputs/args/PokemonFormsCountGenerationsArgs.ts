import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormGenerationsWhereInput } from "../../inputs/PokemonFormGenerationsWhereInput";

@TypeGraphQL.ArgsType()
export class PokemonFormsCountGenerationsArgs {
  @TypeGraphQL.Field(_type => PokemonFormGenerationsWhereInput, {
    nullable: true
  })
  where?: PokemonFormGenerationsWhereInput | undefined;
}
