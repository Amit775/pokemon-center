import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonStatWhereUniqueInput } from "../../../inputs/PokemonStatWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePokemonStatArgs {
  @TypeGraphQL.Field(_type => PokemonStatWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonStatWhereUniqueInput;
}
